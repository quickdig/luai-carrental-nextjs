import React from 'react';
import Home from '@/components/Home';
import config from "../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}test${lang}`);
    const data = response.data?.data;
    return {
      title:data?.meta_tag || "luai",
      description: data?.meta_description || "luai Home",
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      title: 'luai Home', // fallback title in case of an error
    };
  }
}

export async function generateStaticParams() {
  // Define all possible language codes
  const languages = ['en', 'ar'];
  
  // Generate the paths for each language
  const paths = languages.map((lang) => ({ lang }));
  return paths;
}

const page = ({ params }) => {
  const { lang } = params;
  
  return (
    <>
      <Home lang={lang} />
    </>
  );
};

export default page;

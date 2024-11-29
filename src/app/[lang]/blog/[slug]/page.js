import React from 'react'
import config from "../../../services/config.json";
import axios from 'axios';
import BlogDetail from './BlogDetail';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang, slug } = params;

    // fetch data using Axios
    try {
        const response = await axios.get(`${config.apiEndPoint}aboutus/${lang}`);
        // const data = response.data?.data;
        // return {
        //   title:data?.meta_tag || "Raalc About",
        //   description: data?.meta_description || "Raalc About",
        // };
    } catch (error) {
        console.error('Error fetching product data:', error);
        // return {
        //   title: 'Raalc About', // fallback title in case of an error
        // };
    }
}


export async function generateStaticParams() {
    const languages = ['en', 'ar',];

    const paths = languages.map((lang) => ({ lang }));

    return paths;
}

const page = ({ params }) => {
    const { lang, slug } = params;
    return (
        <>
            <BlogDetail lang={lang} />
        </>
    )
}

export default page

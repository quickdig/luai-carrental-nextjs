
import Home from "@/components/Home";
import axios from "axios";
import config from "../services/config.json"

export async function generateMetadata({ params }) {
  const { lang } = params; // Default to 'en' if lang is missing

  try {
    const response = await axios.get(`${config.apiEndPoint}meta_content/${lang}`);
    const data = response.data?.data;

    return {
      title: data?.home?.seo_title || "Home | LUAI Car Rental Dubai",
      description: data?.home?.seo_brief || "Home | LUAI Car Rental Dubai",
    };
  } catch (error) {
    console.error('Error fetching product data:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    return {
      title: 'Home | LUAI Car Rental Dubai',
      description: 'Home | LUAI Car Rental Dubai',
    };
  }
}

export async function generateStaticParams() {
  const languages = ['en', 'ar'];
  const paths = languages.map((lang) => ({ lang }));
  console.log("Static Params:", paths);
  return paths;
}

export default function page({ params }) {
  const { lang } = params;
  return (
    <div>
      <Home lang={lang} />
    </div>
  );
}

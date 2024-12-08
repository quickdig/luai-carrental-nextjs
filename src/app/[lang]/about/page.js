import React from 'react'
import AboutPage from './AboutPage';
import config from "../../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang } = params;

    // fetch data using Axios
    try {
        const response = await axios.get(`${config.apiEndPoint}meta_content/${lang}`);
        const data = response?.data?.data;

        return {
            title: data?.aboutus?.seo_title || "About Us | LUAI Drive",
            description: data?.aboutus?.seo_brief || "About Us | LUAI Drive Car Rental"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'About Us | LUAI Drive',
        };
    }
}


export async function generateStaticParams() {
    const languages = ['en', 'ar',];

    const paths = languages.map((lang) => ({ lang }));

    return paths;
}

const page = ({ params }) => {
    const { lang } = params;
    return (
        <>
            <AboutPage lang={lang} />
        </>
    )
}

export default page

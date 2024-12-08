import React from 'react'
import config from "../../services/config.json";
import axios from 'axios';
import Blogs from './Blogs';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang } = params;

    try {
        const response = await axios.get(`${config.apiEndPoint}meta_content/${lang}`);
        const data = response?.data?.data;

        return {
            title: data?.blogs?.seo_title || "Our Blogs",
            description: data?.blogs?.seo_brief || "Luaidrive | Our Blogs"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'Our Blogs',
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
            <Blogs lang={lang} />
        </>
    )
}

export default page

import React from 'react'
import config from "../../../services/config.json";
import axios from 'axios';
import BlogDetail from './BlogDetail';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang, slug } = params;

    // fetch data using Axios
    try {
        const response = await axios.get(`${config.apiEndPoint}blog/single/${lang}/${slug}`);
        const data = response?.data?.data;

        return {
            title: data?.seo_title || "Blog Details | Luaidrive",
            description: data?.seo_brief || "Blog Details | Luaidrive"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'Blog Details | Luaidrive',
        };
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

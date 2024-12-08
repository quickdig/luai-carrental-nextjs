import React from 'react'
import config from "../../../services/config.json";
import axios from 'axios';
import Brand from './Brand';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang, slug } = params;

    try {
        const response = await axios.get(`${config.apiEndPoint}brands/fetch_by_brand/${lang}/${slug}`);
        const data = response?.data?.meta;

        return {
            title: data?.seo_title || "Brands | Luaidrive",
            description: data?.seo_brief || "Brands | Luaidrive"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'Brands | Luaidrive',
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
            <Brand lang={lang} />
        </>
    )
}

export default page

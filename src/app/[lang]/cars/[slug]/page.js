import React from 'react'
import config from "../../../services/config.json";
import axios from 'axios';
import BrandModel from './BrandModel';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang, slug } = params;

    try {
        const response = await axios.get(`${config.apiEndPoint}car/detail/${lang}/${slug}`);
        const data = response?.data?.data;

        return {
            title: data?.seo_title || "Car Details | Luaidrive",
            description: data?.seo_brief || "Car Details | Luaidrive"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'Car Details | Luaidrive',
        };
    }
}


export async function generateStaticParams() {
    const languages = ['en', 'ar',];

    const paths = languages.map((lang) => ({ lang }));
    console.log('Pathssss', paths);
    return paths;
}

const page = ({ params }) => {
    const { lang, slug } = params;
    return (
        <>
            <BrandModel lang={lang} />
        </>
    )
}

export default page

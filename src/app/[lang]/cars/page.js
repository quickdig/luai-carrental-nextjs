import React from 'react'
import config from "../../services/config.json";
import axios from 'axios';
import Cars from './Cars';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang } = params;

    try {
        const response = await axios.get(`${config.apiEndPoint}meta_content/${lang}`);
        const data = response?.data?.data;

        return {
            title: data?.cars?.seo_title || "Luaidrive.ae's Symphony of Superb Automobiles",
            description: data?.cars?.seo_brief || "Cars | Luaidrive"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'Luaidrive.ae\'s Symphony of Superb Automobiles',
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
            <Cars lang={lang} />
        </>
    )
}

export default page

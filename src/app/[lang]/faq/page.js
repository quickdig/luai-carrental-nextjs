import React from 'react'
import config from "../../services/config.json";
import axios from 'axios';
import Faq from './Faq';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang } = params;

    try {
        const response = await axios.get(`${config.apiEndPoint}meta_content/${lang}`);
        const data = response?.data?.data;

        return {
            title: data?.faq?.seo_title || "Your Universe Guide to FAQs on Luaidrive.ae",
            description: data?.faq?.seo_brief || "Luaidrive | FAQ"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'Your Universe Guide to FAQs on Luaidrive.ae',
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
            <Faq lang={lang} />
        </>
    )
}

export default page

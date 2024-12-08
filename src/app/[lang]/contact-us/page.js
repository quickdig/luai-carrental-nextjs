import React from 'react'
import config from "../../services/config.json";
import axios from 'axios';
import ContactUs from './ContactUs';

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang, slug } = params;

    try {
        const response = await axios.get(`${config.apiEndPoint}meta_content/${lang}`);
        const data = response?.data?.data;

        return {
            title: data?.contact?.seo_title || "Connecting Whispers: Contact Luaidrive.ae",
            description: data?.contact?.seo_brief || "Contact Us | Luaidrive.ae"
        }
    } catch (error) {
        console.error('Error fetching', error);
        return {
            title: 'Connecting Whispers: Contact Luaidrive.ae',
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
            <ContactUs lang={lang} />
        </>
    )
}

export default page

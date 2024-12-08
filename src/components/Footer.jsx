"use client"

import React, { useEffect, useState } from 'react'
import footer_logo from "../../src/public/assets/logo_black.png";
import footer_back from "../../src/public/assets/footer_back.png";
import social_imgOne from "../../src/public/assets/fb.png";
import social_imgTwo from "../../src/public/assets/wa.png";
import social_imgThree from "../../src/public/assets/insta.png";
import Link from 'next/link';
import Image from 'next/image';
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useParams, usePathname } from 'next/navigation';
import useFetch from '@/app/customHooks/useFetch';
import { keywords } from '../../dataset';

const Footer = () => {

    const { lang } = useParams();
    const { loading, data } = useFetch(`footer/${lang}`);

    useEffect(() => {

    }, [data])

    if (loading) return;
    const footerData = data?.data;
    console.log(footerData);
    return (
        <section className="footer_Card relative mt-10">
            <div
                className="relative footer__Cardback flex items-center justify-center bg-cover bg-center h-100 sm:h-[30rem] md:h-[30rem] w-full"

            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/95"></div>
                <footer className="flex flex-col max-w-screen-lg w-full mx-auto items-center px-4 md:px-6 z-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-1 w-full my-16">
                        {/* Logo and Description */}
                        <div className="col-span-1 w-full text-center md:text-left">
                            <Image
                                src={footer_logo}
                                className="object-contain h-10 w-40 md:h-12 mx-auto md:mx-0"
                                alt="footer_logo"
                            />
                            <p className="text-white text-sm font-light leading-6 mt-4">
                                <b className="font-medium">
                                    {footerData.Header}
                                </b>
                                <br />
                                {footerData.Description}
                            </p>
                            <div className="flex flex-row justify-center md:justify-start items-center mt-3">
                                <Link href={"#"}>
                                    <Image
                                        src={social_imgOne}
                                        className="object-contain w-8 mr-3"
                                        alt="footer_social1"
                                    />
                                </Link>
                                <Link href={"#"}>
                                    <Image
                                        src={social_imgTwo}
                                        className="object-contain w-8 mr-3"
                                        alt="footer_social2"
                                    />
                                </Link>
                                <Link href={"#"}>
                                    <Image
                                        src={social_imgThree}
                                        className="object-contain w-8"
                                        alt="footer_social3"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-span-1 w-full md:pl-10 text-center md:text-left">
                            <h4 className="text-white font-medium text-lg lg:border-l-4 lg:border-l-primary pl-3">{lang == undefined ? 'Quick Links' : 'روابط سريعة'}</h4>
                            <ul className="text-white mt-3 space-y-3 ml-4">
                                <li>
                                    <Link href={"#"}>{lang == undefined ? keywords.navMenu.home.en : keywords.navMenu.home.ar}</Link>
                                    {/* {langValue == 'en' ? keywords.navMenu.home.en : keywords.navMenu.home.ar} */}
                                </li>
                                <li>
                                    <Link href={"#"}>{lang == undefined ? keywords.navMenu.about_us.en : keywords.navMenu.about_us.ar}</Link>
                                </li>
                                {/* <li>
                                    <Link href={"#"}>Brands</Link>
                                </li> */}
                                <li>
                                    <Link href={"#"}>{lang == undefined ? keywords.navMenu.cars.en : keywords.navMenu.cars.ar}</Link>
                                </li>
                                <li>
                                    <Link href={"#"}>{lang == undefined ? keywords.navMenu.faq.en : keywords.navMenu.faq.ar}</Link>
                                </li>
                                <li>
                                    <Link href={"#"}>{lang == undefined ? keywords.navMenu.contact_us.en : keywords.navMenu.contact_us.ar}</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <div className="col-span-1 w-full md:pl-10 text-center md:text-left">
                            <h4 className="text-white font-medium text-lg lg:border-l-4 lg:border-l-primary pl-3">{lang == undefined ? 'Contact Details' : 'تفاصيل الاتصال'}</h4>
                            <ul className="text-white mt-3 space-y-3 ml-3">
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white mr-2">
                                        <FiPhoneCall />
                                    </span>
                                    <Link href={"#"}>(+971) 505 123 558</Link>
                                </li>
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white mr-2">
                                        <FaRegEnvelope />
                                    </span>
                                    <Link href={"#"}>sales@luai.ae</Link>
                                </li>
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white mr-2">
                                        <FaLocationDot />
                                    </span>
                                    <Link href={"#"} className='line-clamp-2' dangerouslySetInnerHTML={{ __html: footerData.Address }}>
                                        {/* Shop No. 02, <br />
                                        Azurite Tower, Al Jaddaf */}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                {/* <div className="absolute bottom-5 flex flex-row w-full h-auto border-t-[.5px] border-t-white justify-center items-center">
                    <p className='text-xs text-white mt-5'>&copy;2024 LUAI Drive, All Rights Reserved. Powered by <Link to={"https://quickdigitals.ae/"} className='underline' target='_blank'>Quick Digitals</Link></p>
                </div> */}
            </div>
        </section>

    )
}

export default Footer
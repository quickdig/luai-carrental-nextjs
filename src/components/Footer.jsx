"use client"

import React, { useContext } from 'react'
import footer_logo from "../../src/public/assets/logo_black.png";
import Link from 'next/link';
import Image from 'next/image';
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useParams, usePathname } from 'next/navigation';
import useFetch from '@/app/customHooks/useFetch';
import { languageData } from '../../dataset';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import { social_imgOne, social_imgThree, social_imgTwo } from '@/ImagesImport/image';

const Footer = () => {
    const { langValue } = useContext(MainLanguageValueContext);
    const { loading, data } = useFetch(`footer/${langValue}`);

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
                                        className="object-contain w-8 mx-2"
                                        alt="footer_social1"
                                    />
                                </Link>
                                <Link href={"#"}>
                                    <Image
                                        src={social_imgTwo}
                                        className="object-contain w-8 mx-2"
                                        alt="footer_social2"
                                    />
                                </Link>
                                <Link href={"#"}>
                                    <Image
                                        src={social_imgThree}
                                        className="object-contain w-8 mx-2"
                                        alt="footer_social3"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-span-1 w-full md:pl-10 text-center md:text-left">
                            <h4 className="text-white font-medium text-lg lg:border-l-4 lg:border-l-primary pl-3 ar_footer">{languageData[langValue]["Quick Links"]}</h4>
                            <ul className="text-white mt-3 space-y-3 ml-4">
                                <li>
                                    <Link href={"#"}>{languageData[langValue]["Home"]}</Link>
                                    {/* {langValue == 'en' ? keywords.navMenu.home.en : keywords.navMenu.home.ar} */}
                                </li>
                                <li>
                                    <Link href={"#"}>{languageData[langValue]["About us"]}</Link>
                                </li>
                                {/* <li>
                                    <Link href={"#"}>Brands</Link>
                                </li> */}
                                <li>
                                    <Link href={"#"}>{languageData[langValue]["Cars"]}</Link>
                                </li>
                                <li>
                                    <Link href={"#"}>{languageData[langValue]["Faq"]}</Link>
                                </li>
                                <li>
                                    <Link href={"#"}>{languageData[langValue]["Contact Us"]}</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <div className="col-span-1 w-full md:pl-10 text-center md:text-left">
                            <h4 className="text-white font-medium text-lg lg:border-l-4 lg:border-l-primary pl-3 ar_footer">{languageData[langValue]["Contact Details"]}</h4>
                            <ul className="text-white mt-3 space-y-3 ml-3">
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white ">
                                        <FiPhoneCall />
                                    </span>
                                    <Link href={"#"} className='mx-3'>(+971) 505 123 558</Link>
                                </li>
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white ">
                                        <FaRegEnvelope />
                                    </span>
                                    <Link href={"#"} className='mx-3'>sales@luai.ae</Link>
                                </li>
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white">
                                        <FaLocationDot />
                                    </span>
                                    <Link href={"#"} className='line-clamp-2 mx-3' dangerouslySetInnerHTML={{ __html: footerData.Address }}>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>

            <div class="footer_Quick bg-secondary py-2 text-white text-center"><div class="container mx-auto"> Developed by <a target="_blank" class="border-b border-[#fff]" href="https://quickdigitals.ae/">Quick Digitals</a></div></div>
        </section>

    )
}

export default Footer
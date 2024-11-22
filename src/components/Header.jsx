"use client"

import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import off_logo from "../../src/public/assets/off_logo.png"
import { FaEarthAmericas, FaPhone } from "react-icons/fa6";
import Button from './Button';
import { useRouter } from 'next/navigation'

const Header = () => {

    const router = useRouter()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        console.log(router);
    }, [])
    return (
        <header className="bg-white shadow-md z-20">
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                {/* Logo */}
                <Link href={"/"} className="flex items-center lg:pl-0 md:pl-4">
                    <Image src={off_logo} className="object-contain h-10 md:h-12" alt="Logo" />
                </Link>

                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label
                    htmlFor="navbar-open"
                    className="absolute top-5 right-7 cursor-pointer md:hidden"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>

                {/* Navigation Menu */}
                <nav
                    aria-label="Header Navigation"
                    className="peer-checked:mt-8 text-center peer-checked:max-h-96 flex max-h-0 w-full flex-col items-center justify-end gap-6 overflow-hidden transition-all md:ml-32 md:max-h-full md:flex-row"
                >
                    {/* Top Main Links */}
                    <ul className="flex flex-col items-center space-y-4 justify-end md:space-y-0 md:flex-row md:space-x-6 text-sm">

                        <li className="group transition duration-300 uppercase font-medium text-black">
                            <Link href="/" className="relative">
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        </li>

                        <li className="group transition duration-300 uppercase font-medium text-black">
                            <Link href="/about" className="relative">
                                About us
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        </li>

                        <li className="group transition duration-300 uppercase font-medium text-black group-hover:block">
                            <Link href="#" className="relative">
                                Brands
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-block ml-2 w-3 h-3 group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                {/* <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span> */}
                            </Link>

                            <ul className="fixed z-10 hidden mt-2 space-y-2 bg-white shadow-lg w-48 group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100">
                                {/* absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg w-full group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100 */}
                                <Link
                                    href={"/brand/audi"}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                >
                                    Audi
                                </Link>

                                <Link
                                    href={"/brand/toyota"}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                >
                                    toyota
                                </Link>

                                <Link
                                    href={"/brand/bmw"}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                >
                                    bmw
                                </Link>

                                <Link
                                    href={"/brand/nissan"}
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                >
                                    nissan
                                </Link>
                            </ul>
                        </li>

                        <li className="group transition duration-300 uppercase font-medium text-black">
                            <Link href="/cars" className="relative">
                                Cars
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        </li>

                        <li className="group transition duration-300 uppercase font-medium text-black">
                            <Link href="/faq" className="relative">
                                FAQ
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        </li>

                        <li className="group transition duration-300 uppercase font-medium text-black">
                            <Link href="/contact-us" className="relative">
                                Contact Us
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        </li>

                        <li className="group transition duration-300 uppercase font-medium text-black">
                            <Link href="/blog" className="relative">
                                Blog
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        </li>
                        {/* {[
                            { name: "Home", path: "/" },
                            { name: "About us", path: "/about" },
                            { name: "Cars", path: "/" },
                            { name: "Faq", path: "/faq" },
                            { name: "Contact us", path: "/contact-us" },
                            { name: "Blogs", path: "/blog" },
                            {
                                name: "Brands",
                                path: "#",
                                dropdown: [
                                    { name: "Brand 1", path: "/brand1" },
                                    { name: "Brand 2", path: "/brand2" },
                                    { name: "Brand 3", path: "/brand3" },
                                ]
                            },
                        ].map((link) => (
                            <li
                                key={link.name}
                                className={`group transition duration-300 uppercase font-medium text-black relative ${link.dropdown ? 'peer' : ''}`}
                            >
                                <Link href={link.path} className="relative">
                                    {link.name}
                                    {link.dropdown && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="inline-block ml-2 w-3 h-3 group-hover:rotate-180"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></span>
                                </Link>
                                {link.dropdown && (
                                    <ul className="fixed z-10 hidden mt-2 space-y-2 bg-white w-auto group-hover:block">
                                        {link.dropdown.map((dropdownLink) => (
                                            <li key={dropdownLink.name}>
                                                <Link
                                                    href={dropdownLink.path}
                                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                                >
                                                    {dropdownLink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))} */}
                    </ul>

                    <ul className="flex flex-col items-center mt-4 space-y-4 text-xs md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
                        <li>
                            <Button
                                text={"English"}
                                type={"button"}
                                style={
                                    "bg-secondary hover:bg-primary text-white font-medium py-2 px-4 rounded inline-flex items-center"
                                }
                                icon={<FaEarthAmericas />}
                            />
                        </li>
                        <li>
                            <Button
                                text={"Book Ride"}
                                type={"button"}
                                style={
                                    "bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded inline-flex items-center"
                                }
                                icon={<FaPhone />}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


    )
}

export default Header
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import off_logo from "../../src/public/assets/off_logo.png";
import { FaEarthAmericas, FaPhone } from "react-icons/fa6";
import FormModal from "./FormModal";

const Header = () => {
  const pathname = usePathname();
  const [language, setLanguage] = useState("English");

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "English" ? "Arabic" : "English"
    );
  };

  const isActive = (path) => pathname === path;

  const navlink = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Cars", path: "/cars" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="bg-white shadow-md z-20">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
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

        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 text-center peer-checked:max-h-96 flex max-h-0 w-full flex-col items-center justify-end gap-6 overflow-hidden transition-all md:ml-32 md:max-h-full md:flex-row"
        >
          <ul className="flex flex-col items-center space-y-4 justify-end md:space-y-0 md:flex-row md:space-x-6 text-sm">
            {navlink.map((item) => {
              const { path, name } = item;
              return (
                <li
                  key={name}
                  className={`group transition duration-300 uppercase font-medium ${isActive(path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-black"
                    }`}
                >
                  <Link href={path} className="relative">
                    {name}
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary "></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col items-center mt-4 space-y-4 text-xs md:mt-0 md:flex-row md:space-y-0 md:space-x-4">

            <li>
              <button
                onClick={toggleLanguage}
                className="bg-secondary hover:bg-primary text-white font-medium py-2 px-4 rounded inline-flex items-center"
              >
                <FaEarthAmericas className="mr-2" />
                {language}
              </button>
            </li>


            <li>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded inline-flex items-center"
              >
                <FaPhone className="mr-2" />
                Book Ride
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {
        isModalOpen && <FormModal setOpenTrue={() => setIsModalOpen(false)} />
      }
    </header>
  );
};

export default Header;

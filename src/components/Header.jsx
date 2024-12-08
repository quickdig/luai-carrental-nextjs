"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import off_logo from "../../src/public/assets/off_logo.png";
import { FaEarthAmericas, FaPhone } from "react-icons/fa6";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import useGet from "@/app/customHooks/useGet";
import useFetch from "@/app/customHooks/useFetch";
import { languageData } from "../../dataset";


const items = [
  {
    label: "En",
    key: 'en',
  },
  {
    label: "Ar",
    key: 'ar',
  },
];

const Header = () => {
  const languages = ['en', 'ar'];
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("Brands");
  const [brands, setBrands] = useState("");
  const [resget, apiMethodGet] = useGet();

  const { langValue, handleLanguage } = useContext(MainLanguageValueContext);
  const [selectedLanguage, setSelectedLanguage] = useState(`${langValue}`);
  const [language, setLanguage] = useState(`${langValue}`);

  useEffect(() => {
    if (selectedLanguage) {
      document.body.classList.add(selectedLanguage.toLowerCase());
      return () => {
        document.body.classList.remove(selectedLanguage.toLowerCase());
      };
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (langValue) {
      apiMethodGet(`home_content/${langValue}`);

    }
  }, [langValue]);

  const { data } = useFetch(`brands/all/${langValue}`)

  useEffect(() => {
    if (data) {
      setBrands(data?.data)
    }
  }, [data])

  const basePath = langValue === "en" ? '' : `${langValue}/`;

  const toggleLanguage = (e) => {
    setLanguage((prevLanguage) =>
      prevLanguage === "en" ? "ar" : "en"
    );

    const selectedItem = items.find(item => item.key === (e === "ar" ? "en" : "ar"));
    setSelectedLanguage(selectedItem.label);
    handleLanguage(selectedItem.key);
    const newLang = selectedItem.key;

    let pathParts = pathname.split('/');

    if (languages.includes(pathParts[1])) {
      pathParts.splice(1, 1);
    }


    if (newLang !== 'en') {
      pathParts = ['', newLang, ...pathParts.slice(1)];
    } else {
      pathParts = ['', ...pathParts.slice(1)];
    }
    const newPath = pathParts.join('/');
    if (newPath) {
      router.push(newPath);

    }
    else {
      router.push("/");
    }

  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setIsDropdownOpen(false);
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
      <div className="flex flex-col max-w-screen-xl sm:flex-col md:flex-col lg:flex-row items-center mx-auto px-4 py-4">

        <Link href={`/${basePath}`} className="flex items-center ml-0 lg:pl-0 md:pl-4 sm:pl-0 pl-0">
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
          className="peer-checked:mt-8 text-center peer-checked:max-h-[33rem] flex max-h-0 w-full flex-col items-center justify-end gap-6 transition-all md:ml-32 md:max-h-full md:flex-row"
        >

          <ul className="flex flex-col items-center space-y-4 justify-end md:space-y-0 md:flex-row  text-sm gap-7">
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}`}
                className={`relative ${isActive(`/${basePath}`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Home"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}about`}
                className={`relative ${isActive(`/${basePath}about`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["About us"]}
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-black font-medium bg-transparent uppercase">
                {languageData[langValue]["Brand"]}
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 bg-[#f1f4f8] w-64 border border-gray-200 rounded-md shadow-lg z-[999] grid grid-cols-2">
                  {brands?.map((item, idx) => (
                    <Link
                      href={`/${basePath}brand/${item.slug}`}
                      key={idx}
                      className="px-4 py-2 text-sm text-black hover:bg-[#e9ecef] cursor-pointer text-start"
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}cars`}
                className={`relative ${isActive(`/${basePath}cars`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Cars"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}faq`}
                className={`relative ${isActive(`/${basePath}faq`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Faq"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}contact-us`}
                className={`relative ${isActive(`/${basePath}contact-us`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Contact Us"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}blog`}
                className={`relative ${isActive(`/${basePath}blog`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Blog"]}
              </Link>
            </li>


          </ul>
          <ul className="flex flex-col items-center mt-4 space-y-4 text-xs gap-3 md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <button onClick={() => toggleLanguage(language)} className="bg-secondary hover:bg-primary text-white font-medium py-2 px-4 rounded inline-flex items-center">
                <FaEarthAmericas className="en_icon mr-2" />
                {languageData[langValue]["English"]}
              </button>
            </li>
            <li>
              <Link href={`/${basePath}cars`}>
                <button className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded inline-flex items-center">
                  <FaPhone className="ar_icon mr-2" />
                  {languageData[langValue]["Book Ride"]}
                </button>
              </Link>
            </li>
          </ul>

        </nav>
      </div>
    </header>

  );
};

export default Header;

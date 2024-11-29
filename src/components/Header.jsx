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
import { keywords } from "../../dataset";


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

  // const brands = ["Toyota", "BMW", "Mercedes", "Tesla", "Audi"];
  const { langValue, handleLanguage } = useContext(MainLanguageValueContext);
  const [selectedLanguage, setSelectedLanguage] = useState(`${langValue}`);
  const [language, setLanguage] = useState(`${langValue}`);

  useEffect(() => {
    // Update the body class whenever selectedLanguage changes
    if (selectedLanguage) {
      document.body.classList.add(selectedLanguage.toLowerCase());
      // Clean up by removing the class when the component unmounts or selectedLanguage changes
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

    // Construct new path with selected language
    let pathParts = pathname.split('/');

    // Remove the existing language segment if present
    if (languages.includes(pathParts[1])) {
      pathParts.splice(1, 1);
    }


    if (newLang !== 'en') {
      pathParts = ['', newLang, ...pathParts.slice(1)];
    } else {
      pathParts = ['', ...pathParts.slice(1)];
    }
    // Construct the new path
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
        {/* relative flex flex-col px-4 py-4 max-w-screen-xl sm:flex-row lg:flex-col md:mx-auto md:flex-row md:items-center */}
        {/* Logo */}
        <Link href="/" className="flex items-center ml-0 lg:pl-0 md:pl-4 sm:pl-0 pl-0">
          <Image src={off_logo} className="object-contain h-10 md:h-12" alt="Logo" />
        </Link>

        {/* Mobile Menu Toggle */}
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
          {/* peer-checked:mt-8 text-center peer-checked:max-h-96 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-32 md:max-h-full md:flex-row */}
          {/* Main Links */}
          <ul className="flex flex-col items-center space-y-4 justify-end md:space-y-0 md:flex-row md:space-x-6 text-sm">
            <li className="group transition duration-300 uppercase font-medium hover:text-primary">
              <Link
                href={`/${basePath}`}
                className={`relative ${isActive(`/${basePath}`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {langValue == 'en' ? keywords.navMenu.home.en : keywords.navMenu.home.ar}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary">
              <Link
                href={`/${basePath}about`}
                className={`relative ${isActive(`/${basePath}about`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {langValue == 'en' ? keywords.navMenu.about_us.en : keywords.navMenu.about_us.ar}
              </Link>
            </li>
            {/* Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-black font-medium bg-transparent uppercase">
                {langValue == 'en' ? keywords.navMenu.brands.en : keywords.navMenu.brands.ar}
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 bg-[#f1f4f8] w-64 border border-gray-200 rounded-md shadow-lg z-30 grid grid-cols-2">
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
            <li className="group transition duration-300 uppercase font-medium hover:text-primary">
              <Link
                href={`/${basePath}cars`}
                className={`relative ${isActive(`/${basePath}cars`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {langValue == 'en' ? keywords.navMenu.cars.en : keywords.navMenu.cars.ar}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary">
              <Link
                href={`/${basePath}faq`}
                className={`relative ${isActive(`/${basePath}faq`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {langValue == 'en' ? keywords.navMenu.faq.en : keywords.navMenu.faq.ar}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary">
              <Link
                href={`/${basePath}contact-us`}
                className={`relative ${isActive(`/${basePath}contact-us`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {langValue == 'en' ? keywords.navMenu.contact_us.en : keywords.navMenu.contact_us.ar}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary">
              <Link
                href={`/${basePath}blog`}
                className={`relative ${isActive(`/${basePath}blog`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {langValue == 'en' ? keywords.navMenu.blog.en : keywords.navMenu.blog.ar}
              </Link>
            </li>


          </ul>
          {/* Buttons */}
          <ul className="flex flex-col items-center mt-4 space-y-4 text-xs md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <button
                onClick={() => toggleLanguage(language)}
                className="bg-secondary hover:bg-primary text-white font-medium py-2 px-4 rounded inline-flex items-center"
              >
                <FaEarthAmericas className="mr-2" />
                {language === 'en' ? 'عربي' : 'English'}
              </button>
            </li>
            <li>
              <button className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded inline-flex items-center">
                <FaPhone className="mr-2" />
                {langValue == 'en' ? keywords.buttonText.book_ride.en : keywords.buttonText.book_ride.ar}
              </button>
            </li>
          </ul>

        </nav>
      </div>
    </header>

  );
};

export default Header;

"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import off_logo from "../../src/public/assets/off_logo.png";
import { FaEarthAmericas, FaPhone } from "react-icons/fa6";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";


const items = [
  {
    label: "En",
    key: 'en',
  },
  // {
  //   label: "Ch",
  //   key: 'ch',
  // },
  {
    label: "Ar",
    key: 'ar',
  },
  // {
  //   label: "Ru",
  //   key: 'ru',
  // },
];




const Header = () => {
  const languages = ['en', 'ar'];
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("Brands");
  
  const brands = ["Toyota", "BMW", "Mercedes", "Tesla", "Audi"];
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

  const toggleLanguage = (e) => {
    setLanguage((prevLanguage) =>
      prevLanguage === "en" ? "ar" : "en"
    );

    const selectedItem = items.find(item => item.key === (e===  "ar" ? "en" : "ar") );
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
    if(newPath) {
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
      <div className="relative flex max-w-screen-xl flex-col px-4 py-4 md:mx-auto md:flex-row md:items-center">
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
          className="peer-checked:mt-8 text-center peer-checked:max-h-96 flex max-h-0 w-full flex-col items-center justify-end gap-6 transition-all md:ml-32 md:max-h-full md:flex-row"
        >
          <ul className="flex flex-col items-center space-y-4 justify-end md:space-y-0 md:flex-row md:space-x-6 text-sm">
            {navlink.map((item) => {
              const { path, name } = item;
              return (
                <li
                  key={name}
                  className={`group transition duration-300 uppercase font-medium hover:text-primary hover:border-primary hover:border-b-2 ${
                    isActive(path)
                      ? "text-primary border-b-2 border-primary"
                      : "text-black"
                  }`}
                >
                  <Link href={path} className="relative">
                    {name}
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary"></span>
                  </Link>
                </li>
              );
            })}

            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="text-black font-medium capitalize bg-white px-4 py-2 hover:bg-primary hover:text-white"
              >
                {selectedBrand}
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 bg-[#f1f4f8] w-64  border border-gray-200 rounded-md shadow-lg z-30 grid grid-cols-2">
                  {brands.map((brand) => (
                    <li
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className="px-4 py-2 text-sm text-black hover:bg-[#e9ecef] cursor-pointer text-start"
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <ul className="flex flex-col items-center mt-4 space-y-4 text-xs md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <button
                onClick={() => toggleLanguage(language)}
                className="bg-secondary hover:bg-primary text-white font-medium py-2 px-4 rounded inline-flex items-center"
              >
                <FaEarthAmericas className="mr-2" />
                {language}
              </button>
            </li>

            <li>
              <button className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded inline-flex items-center">
                <FaPhone className="mr-2" />
                Book Ride
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { FaStar } from "react-icons/fa6";
import car_img from "../../src/public/assets/car_img.png";
import whatsApp from "../../src/public/assets/whatsApp.png";
import Link from "next/link"
import Button from "./Button";
import Image from "next/image";
import { languageData } from "../../dataset";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import { useContext } from "react";

const CarCard = ({ lang, image, rating, title, model, daily, weekly, monthly, slug, id, btnText }) => {

    const { langValue } = useContext(MainLanguageValueContext);

    const basePath = lang === "en" ? '' : `${lang}/`;
    return (
        <div className="bg-white rounded-md px-4 py-5 space-y-4">
            {/* Star Rating */}
            <div className="flex flex-row items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-yellow-400 text-sm sm:text-base">5.0</span>
            </div>

            {/* Image Box */}
            <div className="relative w-full h-40 overflow-hidden mx-auto object-contain group">
                <img
                    src={image}
                    alt="Zoomable"
                    width={200}
                    className="object-contain transform mx-auto transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Car Name and Year */}
            <div className="flex flex-col text-center sm:text-left px-2">
                <Link href={`${basePath}cars/${slug}`} className="text-lg font-medium uppercase">
                    {title}
                </Link>
                {/* <span className="text-xs sm:text-sm text-secondary">2023</span> */}
            </div>

            {/* Price Section */}
            <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-2">
                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-sm font-[500] text-primary">{daily}&nbsp;AED</span>
                    <span className="text-gray-400 font-light text-xs ar_text_center">/{languageData[langValue]["Per Day"]}</span>
                </div>

                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-sm font-[500] text-primary">{weekly}&nbsp;AED</span>
                    <span className="text-gray-400 font-light text-xs ar_text_center">/{languageData[langValue]["Per Week"]}</span>
                </div>

                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-sm font-[500] text-primary">{monthly}&nbsp;AED</span>
                    <span className="text-gray-400 font-light text-xs ar_text_center">/{languageData[langValue]["Per Month"]}</span>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-row lg:flex-row md:flex-row gap-2 sm:flex-row">
                {/* Book Ride Button */}
                <Button
                    text={btnText}
                    type={"submit"}
                    style={
                        "bg-primary hover:bg-secondary uppercase w-full px-6 py-2 rounded items-center font-medium text-white ar_text_center"
                    }
                />

                <button
                    type="button"
                    className="flex justify-center items-center rounded-md bg-[#29a71a] w-16 sm:w-16"
                >
                    <Image src={whatsApp} alt="whats_ap" className="object-contain w-8" />
                </button>
            </div>
        </div>
    );
};

export default CarCard;

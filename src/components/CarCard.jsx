import Link from "next/link"
import Button from "./Button";
import Image from "next/image";
import { languageData } from "../../dataset";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import { useContext } from "react";
import { whatsApp } from "@/commonExports/images";

const CarCard = ({ lang, image, rating, title, model, daily, weekly, monthly, slug, id, btnText }) => {

    const { langValue } = useContext(MainLanguageValueContext);

    const basePath = lang === "en" ? '' : `${lang}/`;
    return (
        <div className="bg-white rounded-md px-4 py-5 space-y-4">

            {/* Image Box */}
            {/* <div className="relative w-full h-40 overflow-hidden mx-auto items-center object-contain group">
                <img
                    src={image}
                    alt="Zoomable"
                    width={200}
                    className="object-contain transform mx-auto max-h-[400px] h-auto transition-transform duration-300 group-hover:scale-110"
                />
            </div> */}

            <div className="img_box relative w-auto overflow-hidden mx-auto items-center object-contain">
                <img src={image} className="object-cover h-48 w-full rounded-md" />
            </div>

            {/* Car Name and Year */}
            <div className="flex flex-col text-center sm:text-left px-2">
                <Link href={`${basePath}cars/${slug}`} className="text-lg font-medium uppercase">
                    {title} {model}
                </Link>
                {/* <span className="text-xs sm:text-sm text-secondary">2023</span> */}
            </div>

            {/* Price Section */}
            <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-2">
                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-sm font-[500] text-primary">{daily}&nbsp;AED</span>
                    <span className="text-gray-400 font-light text-xs ar_text_center">/{languageData[langValue]["Daily"]}</span>
                </div>

                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-sm font-[500] text-primary">{weekly}&nbsp;AED</span>
                    <span className="text-gray-400 font-light text-xs ar_text_center">/{languageData[langValue]["Weekly"]}</span>
                </div>

                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-sm font-[500] text-primary">{monthly}&nbsp;AED</span>
                    <span className="text-gray-400 font-light text-xs ar_text_center">/{languageData[langValue]["Monthly"]}</span>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-row lg:flex-row md:flex-row gap-2 sm:flex-row">
                {/* Book Ride Button */}
                <Link href={`${basePath}cars/${slug}`} className="bg-primary hover:bg-secondary uppercase w-full rounded items-center font-medium text-white">
                    <Button
                        text={btnText}
                        type={"submit"}
                        style={
                            "bg-primary hover:bg-secondary uppercase w-full px-6 py-2 rounded items-center font-medium text-white"
                        }
                    />
                </Link>

                <Link href="https://wa.me/971508879971" target="_blank" className="flex justify-center items-center rounded-md bg-[#29a71a] w-16 sm:w-16">
                    <button
                        type="button"
                        className="flex justify-center items-center rounded-md bg-[#29a71a] w-16 sm:w-16"
                    >
                        <Image src={whatsApp} alt="whats_ap" className="object-contain w-8" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CarCard;

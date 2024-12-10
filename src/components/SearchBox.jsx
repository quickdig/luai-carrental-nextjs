"use client";

import { useState, useEffect, useContext } from "react";
import { FaCarRear, FaCalendarDays, FaClock } from "react-icons/fa6";
import Button from "./Button";
import { languageData } from "../../dataset";
import useFetch from "@/app/customHooks/useFetch";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const SearchBox = ({ lang }) => {
    const { langValue } = useContext(MainLanguageValueContext);
    const basePath = langValue === "en" ? '' : `${langValue}/`;
    const router = useRouter();
    const [brands, setBrands] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const { data } = useFetch(`brands/all/${lang}`)

    useEffect(() => {
        if (data) {
            setBrands(data?.data)
        }
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push(`${basePath}brand/${selectedBrand}`)
    }

    return (
        <section className="searchform_Section relative bg-secondary py-6">
            <div className="flex flex-col min-[1024px]:flex-row p-4 max-w-screen-lg w-full mx-auto items-center">
                <div className="min-[1024px]:w-1/6 md:mb-8 sm:mb-8 sm:px-4 min-[1024px]:mb-0 text-center min-[1024px]:text-left">
                    {
                        lang == 'en' ?
                            (
                                <>
                                    <p className="text-sm font-medium text-white">Fast and efficient car</p>
                                    <p className="text-white font-light text-sm">search at your fingertips.</p>
                                </>
                            ) :
                            (
                                <>
                                    <p className="text-sm font-medium text-white">سيارة سريعة وفعالة</p>
                                    <p className="text-white font-light text-sm">البحث في متناول يدك.</p>
                                </>
                            )
                    }
                </div>

                <div className="md:w-5/6 w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:flex-wrap">
                        <div className="relative flex items-center w-full md:w-auto">
                            <select
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                                className="pr-4 pl-14 p-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                required
                            >
                                <option value="" disabled>
                                    {languageData[langValue]["Pick a Brand"]}
                                </option>
                                {
                                    Array.isArray(brands) && brands.map((item, idx) => {
                                        return (<option key={idx} value={item.slug}>
                                            <img src={item.image} /> {item.name}
                                        </option>)
                                    })
                                }
                            </select>
                            <div className="absolute left-4 text-gray-400">
                                <FaCarRear />
                            </div>
                        </div>

                        <div className="relative flex items-center w-full md:w-auto">
                            <input
                                type="date"
                                placeholder="Select Date"
                                className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full  outline-[#333]"
                                required
                            />
                            <div className="absolute left-4 text-gray-400">
                                <FaCalendarDays />
                            </div>
                        </div>

                        <div className="relative flex items-center w-full md:w-auto">
                            <input
                                type="time"
                                placeholder="Select Time"
                                className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full  outline-[#333]"
                                required
                            />
                            <div className="absolute left-4 text-gray-400">
                                <FaClock />
                            </div>
                        </div>

                        <Button
                            text={languageData[langValue]["Search"]}
                            type={"submit"}
                            style={
                                "bg-primary hover:bg-[#c9281a] uppercase text-center w-full md:w-auto text-white font-medium py-3 px-6 rounded inline-flex items-center justify-center"
                            }
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchBox;

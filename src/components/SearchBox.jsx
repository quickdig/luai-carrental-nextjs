"use client";

import { useState, useEffect } from "react";
import { FaCarRear, FaCalendarDays, FaClock } from "react-icons/fa6";
import Button from "./Button";
import { keywords } from "../../dataset";
import useFetch from "@/app/customHooks/useFetch";

const SearchBox = ({ lang }) => {
    const [brands, setBrands] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const { data } = useFetch(`brands/all/${lang}`)

    useEffect(() => {
        if (data) {
            console.log(data);
            setBrands(data?.data)
        }
    }, [data])

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
                    <form className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:flex-wrap">
                        <div className="relative flex items-center w-full md:w-auto">
                            <select
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                                className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                            >
                                <option value="" disabled>
                                    {lang == 'en' ? keywords.buttonText.pick_brand.en : keywords.buttonText.pick_brand.ar}
                                </option>
                                {
                                    Array.isArray(brands) && brands.map((item, idx) => {
                                        return (<option key={idx} value={item.id}>
                                            {item.name}
                                        </option>)
                                    })
                                }
                                {/* {brands?.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                        {item.name}
                                    </option>
                                ))} */}
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
                            />
                            <div className="absolute left-4 text-gray-400">
                                <FaClock />
                            </div>
                        </div>

                        <Button
                            text={lang == 'en' ? keywords.buttonText.search.en : keywords.buttonText.search.ar}
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

"use client"
import React from "react";
import Breadcrumb from "@/components/Breadcrumb"
import dropdown from "./script";
import { useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import FaqCard from "@/components/FaqCard";
import useFetch from "@/app/customHooks/useFetch";

const Faq = ({ params, lang }) => {

    const { loading, data } = useFetch(`faq/${lang}`);

    useEffect(() => {
        dropdown()
    }, [])

    return (
        <div className="bg-[#F1F4F8] pb-10">
            <div className="relative aboutus__Back flex items-center justify-center bg-cover bg-no-repeat bg-center h-60 sm:h-80 md:h-96 lg:h-[15rem] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="relative z-10 flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center text-center md:text-left">
                    <div className="text-white space-y-4 sm:space-y-6 ar_banner">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            FAQs
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-md font-medium">
                            Top-rated car rental in Dubai. Low prices, great deals, convenient pick-up, top-notch service!
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-10 mx-auto items-center">
                <Breadcrumb linkOne={"Home"} linkTwo={"FAQs"} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">FAQs</h2>
            </div>

            <div className="relative flex flex-col max-w-screen-lg bg-[#F8FBFF] w-full mx-auto px-4 py-4 sm:px-6 lg:px-4 mt-5 rounded-md">
                <div className="flex flex-col bg-white w-full pt-8">
                    {/* FAQ Section */}
                    {/* Questions */}
                    {/* Q1 */}

                    {
                        data?.data?.map((item, idx) => {
                            return (
                                <FaqCard key={idx} idx={idx + 1} question={item.Question} answer={item.Answer} />
                            )
                        })
                    }

                    {/* <FaqCard idx={"02"} question={"I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?"} />
                    <FaqCard idx={"03"} question={"Are your rates competitive?"} />
                    <FaqCard idx={"04"} question={"Why do you have a monthly project cap?"} />
                    <FaqCard idx={"05"} question={"I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?"} /> */}
                </div>
            </div>

        </div>
    )
}

export default Faq
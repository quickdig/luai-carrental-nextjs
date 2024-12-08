"use client"
import Breadcrumb from "@/components/Breadcrumb"
import carBrandOne from "../../../../../src/public/assets/carBrand1.png";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import BrandDetailSidebar from "@/components/BrandDetailSidebar";
import useFetch from "@/app/customHooks/useFetch";
import { useParams, usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getBreadcrumb } from "@/app/utils/getBreadcrumbs";
import { requirements } from "../../../../../dataset";
import PreLoader from "@/components/PreLoader";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";

const BrandModel = ({ lang }) => {
    const params = useParams();
    const pathname = usePathname();
    const breadcrumbs = getBreadcrumb(pathname)
    const { loading, data } = useFetch(`car/detail/${lang}/${params.slug}`);
    const { langValue } = useContext(MainLanguageValueContext);

    const [bannerData, setBannerData] = useState("");
    const dataBanner = useFetch(`banner_data/${lang}/car-details`);
    useEffect(() => {
        if (dataBanner) {
            setBannerData(dataBanner?.data?.data)
        }
    }, [dataBanner]);

    if (loading) return <PreLoader />;
    const { id, name, description, price_daily, price_weekly, price_monthly, image, engine, bluetooth, cruise, luggage, deposit, stock } = data?.data
    return (
        <div className="bg-[#F1F4F8]">
            <div className="relative aboutus__Back flex items-center justify-center bg-cover bg-no-repeat bg-center h-60 sm:h-80 md:h-96 lg:h-[15rem] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="relative z-10 flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center text-center md:text-left">
                    <div className="text-white space-y-4 sm:space-y-6 ar_banner">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            {bannerData?.header}
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-md font-medium">
                            {bannerData?.text}
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-10 mx-auto items-center">
                <Breadcrumb breadcrumbs={breadcrumbs} lang={lang} lastVal={name} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-2xl font-bold">{name}</h2>
            </div>


            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full gap-5 mt-5 mx-auto sm:px-2 md:px-2 lg:px-0">
                <div className="relative top-0 w-full lg:w-8/12 px-4 md:px-6 lg:px-0">
                    <div className="w-full">
                        <img
                            src={image}
                            alt="car_brand"
                            layout="responsive"
                            objectFit="contain"
                            className="rounded-md"
                        />
                    </div>

                    <div className="w-full bg-white my-5 rounded-md shadow-md">
                        <div className="content_area w-full space-y-4 px-4 md:px-6 lg:px-10 py-5">
                            <h4 className="text-left text-secondary font-bold text-lg md:text-xl lg:text-2xl">
                                {name}
                            </h4>
                            <p className="text-[#707070] text-sm md:text-md font-normal text-justify leading-6">
                                {requirements[langValue]["Please check the requirements before making the booking: - Minimum age 25. -Security deposit is required. You may get a different car from the pictures depends on the availability but for sure same model. Free daily mileage is 250KM. Any extra mileage will be deducted from the security deposit."]}
                            </p>

                            <p className="text-justify leading-7" dangerouslySetInnerHTML={{ __html: description }}>

                            </p>

                            <div className="flex flex-col md:flex-row justify-between p-0 m-0 space-y-6 md:space-y-0">
                                {/* Requirements for UAE Residents */}
                                <div className="text-[#707070] w-full md:w-1/2 md:pr-4">
                                    <span className="text-sm md:text-md text-secondary text-left font-medium block">
                                        {lang === 'en' ? 'Requirements for UAE Residents' : 'المتطلبات للمقيمين في دولة الإمارات العربية المتحدة'}
                                    </span>
                                    <ul className="list-none space-y-3 mt-4">
                                        {

                                            ["Copy of Passport", "Copy of Residential Visa", "UAE Driving License", "Copy of Emirates ID"]?.map((item, idx) => {
                                                return (
                                                    <li className="flex items-start text-sm font-normal" key={idx}>
                                                        <span className="text-primary">
                                                            <FaCheck />
                                                        </span>
                                                        &nbsp; {requirements[langValue][item]}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                {/* Requirements for Tourists */}
                                <div className="text-[#707070] w-full md:w-1/2 md:pl-4">
                                    <span className="text-sm md:text-md text-secondary text-left font-medium block">
                                        {lang === 'en' ? 'Requirements for Tourists' : 'متطلبات للسياح'}
                                    </span>
                                    <ul className="list-none space-y-3 mt-4">
                                        {
                                            ["Copy of Passport", "Copy of Visit Visa", "US, Canada, EU, GCC or International Driving License"]?.map((item, idx) => {
                                                return (
                                                    <li className="flex items-start text-sm font-normal" key={idx}>
                                                        <span className="text-primary">
                                                            <FaCheck />
                                                        </span>
                                                        &nbsp; {requirements[langValue][item]}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Panel Pricing/Other Filtering */}
                <div className="h-full bg-white border-[.5px] border-gray-400 rounded-md lg:w-4/12 px-4 py-6 sm:px-6 sm:py-8">
                    <BrandDetailSidebar lang={lang} title={name} image={image} car_id={id} />
                </div>

            </div>

        </div>
    )
}

export default BrandModel
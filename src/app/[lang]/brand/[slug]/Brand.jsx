"use client"
import { IoCheckmarkCircle } from "react-icons/io5";
import Brands from "@/components/Brands"
import bOne from "../../../../../src/public/assets/car-brands/chevrolet.png";
import bTwo from "../../../../../src/public/assets/car-brands/mazda.svg";
import bThree from "../../../../../src/public/assets/car-brands/honda.png";
import bFour from "../../../../../src/public/assets/car-brands/bmw.webp";
import bFive from "../../../../../src/public/assets/car-brands/mg.png";
import bSix from "../../../../../src/public/assets/car-brands/rr.png";
import bSeven from "../../../../../src/public/assets/car-brands/toyota.png";
import bEight from "../../../../../src/public/assets/car-brands/kia.svg";
import Breadcrumb from "@/components/Breadcrumb"
import CarSingleCard from "@/components/CarSingleCard";
import { useParams, usePathname } from "next/navigation";
import useFetch from "@/app/customHooks/useFetch";
import useGet from "@/app/customHooks/useGet";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { languageData } from "../../../../../dataset";
import { getBreadcrumb } from "@/app/utils/getBreadcrumbs";


const Brand = ({ lang }) => {
    const params = useParams()
    const {slug} = params
    const pathname = usePathname();
    const breadcrumbs = getBreadcrumb(pathname)
    const { loading, data } = useFetch(`brands/fetch_by_brand/${lang}/${slug}/12?page=1`); //brands/fetch_by_brand/en/rent-a-mitsubishi/12
    const filters = useFetch(`brands/filters/${lang}/${slug}`);

    const [carData, setCarData] = useState("");
    const [resget, apiMethodGet] = useGet()
    const [activePage, setActivePage] = useState(1);
    const [isExpanded, setIsExpanded] = useState(true);
    const [filterData, setFilterData] = useState("");
    const [filtersAll, setFiltersAll] = useState({
        type_of_car: 1,
        availability: 1,
        from_value: null,
        to_value: null,
        car_brands: null,
    });

    const [isFilterSet, setIsFilterSet] = useState({
        type_of_car: false,
        availability: false,
        from_value: false,
        to_value: false,
        car_brands: false,
    });

    const [bannerData, setBannerData] = useState("");
    const dataBanner = useFetch(`banner_data/${lang}/brand`);

    useEffect(() => {
        if (filters) {
            // console.log(filters?.data?.data);
            setFilterData(filterData?.data)
        }
    }, [filters])

    useEffect(() => {
        if (dataBanner) {
            setBannerData(dataBanner?.data?.data)
        }
    }, [dataBanner]);

    useEffect(() => {
        if (data) {
            setCarData(data?.data)
        }

    }, [data])

    useEffect(() => {
        if (resget.data) {
            setCarData(resget?.data?.data)
        }

        console.log(resget);
    }, [resget.data])

    const onFilterSelect = (e) => {
        const { name, value } = e.target;

        // if (!isFilterSet[name]) {
        //     setFiltersAll((prevState) => ({ ...prevState, [name]: value }));
        //     setIsFilterSet((prevState) => ({ ...prevState, [name]: true }));
        // }
        setFiltersAll((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
        handleFilter()
    }

    const handleFilter = () => {
        // console.log(filtersAll.type_of_car, filtersAll.availability, filtersAll.car_brands, filtersAll.from_value, filtersAll.to_value);
        apiMethodGet(`filter/${lang}/${filtersAll.type_of_car}/${filtersAll.availability}/${filtersAll.car_brands}`)

    }
    const onChange = (current) => {
        setActivePage(current)
        apiMethodGet(`brands/fetch_by_brand/${lang}/${slug}/12?page=${current}`)
    }
    if (loading) return;

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

            <div className="relative flex flex-row md:flex-row max-w-screen-lg sm:mt-5 md:mt-5+6 lg:mt-5 w-full mt-10 mx-auto items-center">
                <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">{slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}</h2>
            </div>

            {/* Filter bar section */}
            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full gap-5 mt-5 mx-auto">
                <div className="w-[90%] mx-auto h-full bg-[#1C1C1C] lg:w-4/12 rounded-md p-5">
                    <div className="flex flex-row justify-between items-center mb-5 px-1 text-white" onClick={() => setIsExpanded(!isExpanded)}>
                        <span className="text-md font-normal">Filters</span>
                        {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                    </div>
                    {
                        isExpanded && (
                            <div className="filters_Options">
                                {/* Type of Cars Section */}
                                <div className="grid grid-cols-1 space-y-2">
                                    <span className="text-left text-sm text-white">Type of cars:</span>

                                    <div className="inline-flex items-center">
                                        <label className="relative flex items-center cursor-pointer" htmlFor="type_of_car">
                                            <input
                                                name="framework-custom-icon"
                                                type="radio"
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                id="type_of_car"
                                            />
                                            <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                <IoCheckmarkCircle />
                                            </span>
                                        </label>
                                        <label className="mx-2 text-white cursor-pointer text-sm" htmlFor="html-custom-icon">
                                            Economy <span className="text-[#90A3BF]">(99)</span>
                                        </label>
                                    </div>

                                    <div className="inline-flex items-center">
                                        <label className="relative flex items-center cursor-pointer" htmlFor="type_of_car">
                                            <input
                                                name="framework-custom-icon"
                                                type="radio"
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                id="type_of_car"
                                            />
                                            <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                <IoCheckmarkCircle />
                                            </span>
                                        </label>
                                        <label className="mx-2 text-white cursor-pointer text-sm" htmlFor="html-custom-icon">
                                            SUV <span className="text-[#90A3BF]">(99)</span>
                                        </label>
                                    </div>
                                    {
                                        Array.isArray(filters?.data?.data?.types) && filters?.data?.data?.types?.map((item, idx) => {
                                            return (
                                                <div className="inline-flex items-center" key={idx} >
                                                    <label className="relative flex items-center cursor-pointer" htmlFor={`type_of_car_` + item.id}>
                                                        <input
                                                            name="type_of_car"
                                                            type="radio"
                                                            value={item.id}
                                                            onClick={onFilterSelect}
                                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                            id={`type_of_car_` + item.id}
                                                        />
                                                        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                            <IoCheckmarkCircle />
                                                        </span>
                                                    </label>
                                                    <label className="ml-2 text-white cursor-pointer text-sm" htmlFor={`type_of_car_` + item.id}>
                                                        {item.name} <span className="text-[#90A3BF]">({item.count})</span>
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* Availability Section */}
                                <div className="grid grid-cols-1 space-y-2 mt-5">
                                    <span className="text-left text-sm text-white">Availability</span>
                                    <div className="flex flex-row items-center justify-start gap-5">
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center cursor-pointer" htmlFor="in_stock">
                                                <input
                                                    name="availability"
                                                    type="radio"
                                                    value="1"
                                                    onClick={onFilterSelect}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                    id="in_stock"
                                                />
                                                <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <IoCheckmarkCircle />
                                                </span>
                                            </label>
                                            <label className="mx-2 text-white cursor-pointer text-sm" htmlFor="availability">
                                                In Stock
                                            </label>
                                        </div>

                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center cursor-pointer" htmlFor="out_of_stock">
                                                <input
                                                    name="availability"
                                                    type="radio"
                                                    value="0"
                                                    onClick={onFilterSelect}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                    id="out_of_stock"
                                                />
                                                <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <IoCheckmarkCircle />
                                                </span>
                                            </label>
                                            <label className="ml-2 text-white cursor-pointer text-sm" htmlFor="out_of_stock">
                                                Out of Stock
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Date Selection */}
                                {/* <div className="grid grid-cols-1 space-y-2 mt-5">
                                    <span className="text-left text-sm text-white">Select a date:</span>
                                    <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-5">
                                        <input
                                            type="date"
                                            placeholder="Select Date"
                                            className="p-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                        />
                                        <input
                                            type="date"
                                            placeholder="Select Date"
                                            className="p-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                        />
                                    </div>
                                </div> */}

                                {/* Special Offers Section */}
                                {/* <div className="grid grid-cols-1 space-y-2 mt-5">
                                    <span className="text-left text-sm text-white">Special Offers</span>
                                    <div className="flex flex-row items-center justify-center">
                                        <input
                                            type="text"
                                            placeholder="Special Offers"
                                            className="p-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                        />
                                    </div>
                                </div> */}

                                {/* Pricing Section */}
                                <div className="grid grid-cols-1 space-y-2 mt-5">
                                    <div className="flex flex-row justify-between items-center">
                                        <span className="text-left text-sm text-white">Pricing</span>
                                    </div>
                                    <div className="flex flex-row text-white justify-between items-center">
                                        <span>From AED {filters?.data?.data?.pricing?.min}</span>
                                        <span>To AED {filters?.data?.data?.pricing?.max}</span>
                                    </div>
                                    <div className="flex flex-row items-center justify-center">
                                        <input
                                            type="range"
                                            className="w-full cursor-pointer accent-primary"
                                        />
                                    </div>

                                    <div className="flex flex-row items-center gap-2 justify-between">
                                        <input
                                            type="number"
                                            placeholder="From"
                                            name="from_value"
                                            value={filters?.data?.data?.pricing?.min}
                                            className="py-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                        />
                                        <input
                                            type="number"
                                            placeholder="To"
                                            name="to_value"
                                            value={filters?.data?.data?.pricing?.max}
                                            className="py-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                        />
                                    </div>
                                </div>

                                {/* Sort By Brands Section */}
                                <div className="grid grid-cols-1 space-y-2 mt-5">
                                    <div className="flex flex-row justify-between items-center">
                                        <span className="text-left text-sm text-white">Sort By Brands</span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                                        {/* Brand 1 */}
                                        {
                                            Array.isArray(filters?.data?.data?.brands) && filters?.data?.data?.brands?.map((item, idx) => {
                                                return (
                                                    <label className="relative h-[5rem] items-center sm:h-[5rem] md:h-[5rem] bg-white rounded-lg" key={idx}>
                                                        <input
                                                            type="radio"
                                                            name="car_brands"
                                                            className="hidden peer"
                                                            value={item.id}
                                                            onClick={onFilterSelect}
                                                        />
                                                        <div className="w-full h-full bg-cover bg-center cursor-pointer rounded-lg border-[.5px] border-transparent peer-checked:border-primary peer-checked:rounded-lg relative">
                                                            <img
                                                                src={item.image}
                                                                alt="brand_back_img"
                                                                className="rounded-lg p-2 object-contain object-center w-full h-full"
                                                            />
                                                        </div>

                                                    </label>
                                                )
                                            })
                                        }


                                        {/* Brand 2 */}
                                        {/* <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-white rounded-lg">
                                            <input
                                                type="radio"
                                                name="car_brands"
                                                className="hidden peer"
                                            />
                                            <div className="w-full h-full bg-cover bg-center cursor-pointer rounded-lg border-[.5px] border-transparent peer-checked:border-primary peer-checked:rounded-lg relative">
                                                <Image
                                                    src={bTwo}
                                                    alt="Background Image"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="rounded-lg p-2"
                                                />
                                            </div>
                                        </label> */}

                                        {/* Brand 3 */}
                                        {/* <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-white rounded-lg">
                                            <input
                                                type="radio"
                                                name="car_brands"
                                                className="hidden peer"
                                            />
                                            <div className="w-full h-full bg-cover bg-center cursor-pointer rounded-lg border-[.5px] border-transparent peer-checked:border-primary peer-checked:rounded-lg relative">
                                                <Image
                                                    src={bThree}
                                                    alt="Background Image"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="rounded-lg p-2"
                                                />
                                            </div>
                                        </label> */}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="w-full h-full right-0 flex flex-col lg:flex-row mx-auto lg:w-8/12 justify-center">
                    {/* Data Card Area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2">
                        {
                            Array.isArray(carData?.data) && carData?.data?.map((item, idx) => {
                                return (
                                    <CarSingleCard key={idx} lang={lang} slug={item.slug} image={item.image} title={item.name} price_daily={item.price_daily}
                                        price_weekly={item.price_weekly} price_monthly={item.price_monthly} bluetooth={item.bluetooth}
                                        cruise_control={item.cruise}
                                        engine={item.engine} luggage={item.luggage} btnText={languageData[langValue]["Book Ride"]} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <div className="relative flex flex-row justify-center items-center my-10 ar_pagination">
                <Pagination onChange={onChange} responsive={true} current={activePage} total={data?.pagination?.total} pageSize={12} />
            </div>
            <div className="flex justify-center mt-10 p-0 w-full bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 max-w-screen-lg lg:grid-cols-8 gap-5 p-5 mt-5 w-full">
                    <Brands icon={bOne} />
                    <Brands icon={bTwo} />
                    <Brands icon={bThree} />
                    <Brands icon={bFour} />
                    <Brands icon={bFive} />
                    <Brands icon={bSix} />
                    <Brands icon={bSeven} />
                    <Brands icon={bEight} />
                </div>
            </div>

        </div>
    )
}

export default Brand
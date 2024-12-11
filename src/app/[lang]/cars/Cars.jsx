"use client"
import { IoCheckmarkCircle } from "react-icons/io5";
import Breadcrumb from "@/components/Breadcrumb"
import Button from "@/components/Button";
import Link from "next/link";
import CarSingleCard from "@/components/CarSingleCard";
import useFetch from "@/app/customHooks/useFetch";
import { useContext, useEffect, useState } from "react";
import useGet from "@/app/customHooks/useGet";
import { FaChevronUp, FaChevronDown, FaFilter } from "react-icons/fa6";
import { Pagination } from "antd";
import { languageData } from "../../../../dataset";
import { usePathname } from "next/navigation";
import { getBreadcrumb } from "@/app/utils/getBreadcrumbs";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import PreLoader from "@/components/PreLoader";
import axios from "axios";
import config from "../../services/config.json"

const Cars = ({ lang }) => {

    const params = usePathname();
    const breadcrumbs = getBreadcrumb(params)
    const { langValue } = useContext(MainLanguageValueContext);
    const { loading, data } = useFetch(`car/all/${lang}/12?page=1`);
    const [paginatioTotal, setPaginationTotal] = useState("")

    const [carData, setCarData] = useState("");
    const [filterData, setFilterData] = useState("");
    const [resget, apiMethodGet] = useGet()
    const [activePage, setActivePage] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

    const [bannerData, setBannerData] = useState("");
    const dataBanner = useFetch(`banner_data/${lang}/cars`);

    const [filtersAll, setFiltersAll] = useState({});

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [debouncedMin, setDebouncedMin] = useState(minPrice);
    const [debouncedMax, setDebouncedMax] = useState(maxPrice);

    useEffect(() => {
        if (dataBanner) {
            setBannerData(dataBanner?.data?.data)
        }
    }, [dataBanner]);

    useEffect(() => {
        if (data) {
            setCarData(data?.data)
            setFilterData(data?.filter_data)
            // setMinPrice(data?.filter_data?.pricing?.min)
            setMaxPrice(data?.filter_data?.pricing?.max)
            setPaginationTotal(data?.pagination?.total)
        }

    }, [data])

    useEffect(() => {
        if (resget.data) {
            setCarData(resget?.data?.data)
        }
        console.log(resget);
    }, [resget.data])

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedMin(minPrice);
            setDebouncedMax(maxPrice);
        }, 2000);

        return () => clearTimeout(timer);
    }, [minPrice, maxPrice]);

    const onFilterSelect = async () => {
        const data = {
            type: filtersAll?.type_of_car,
            availability: filtersAll?.availability,
            brand: filtersAll?.car_brands,
            price_high_low: filtersAll?.price_high_low,
            // price_max: debouncedMax
            // brand_x: filtersAll?.car_brands
        }

        console.log(data);

        const response = await axios.post(`${config.apiEndPoint}cars/filter/${lang}`, data)
        setCarData(response?.data?.data)
    }

    useEffect(() => {
        if (debouncedMax) {
            onFilterSelect();
        }
    }, [debouncedMin, debouncedMax]);

    useEffect(() => {
        if (filtersAll?.type_of_car || filtersAll?.availability || params.slug || filtersAll?.car_brands || filtersAll?.price_high_low) {
            onFilterSelect();
        }
    }, [filtersAll])

    const handleFilter = (e) => {
        const { name, value } = e.target
        setFiltersAll((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSliderChange = (e) => {
        const { value } = e.target;
        // setMinPrice(value.split(',')[0]);
        setMaxPrice(value);
    };

    const onChange = (current) => {
        setActivePage(current)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        apiMethodGet(`car/all/${lang}/12?page=${current}`)
    }

    if (loading) return <PreLoader />;

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
                <Breadcrumb breadcrumbs={breadcrumbs} lang={lang} lastVal={data?.name} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">{bannerData?.header}</h2>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full gap-5 mt-5 mx-auto">
                {/* Mobile Filter Button */}
                <button
                    className="flex md:hidden justify-center items-center bg-primary text-white py-2 px-4 rounded-md mb-3 mx-5"
                    onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
                >
                    <FaFilter className="mr-2" /> {languageData[langValue]["Filters"]}
                </button>

                {/* Filter Sidebar */}
                <div
                    className={`scrollbar fixed md:sticky top-0 ${isExpanded ? 'h-[calc(100vh-2rem)]' : 'h-full'} bg-[#1C1C1C] transition-all duration-300 z-50 md:w-4/12 rounded-md p-5 overflow-y-auto 
                        ${isMobileFilterVisible ? "left-0 w-full h-full" : "-left-full md:left-0 w-[90%]"
                        }`}
                >
                    <div
                        className="flex flex-row justify-between items-center mb-5 px-1 text-white"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <span className="text-md font-normal">{languageData[langValue]["Filters"]}</span>
                        {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                    </div>

                    {isExpanded && (
                        <div className="filters_Options">
                            {/* Type of Cars Section */}
                            <div className="grid grid-cols-1 space-y-2">
                                <span className="text-left text-sm text-white">{languageData[lang]["Type of Cars"]}</span>

                                {Array.isArray(filterData?.types) &&
                                    filterData?.types?.map((item, idx) => (
                                        <div className="inline-flex items-center" key={idx}>
                                            <label
                                                className="relative flex items-center cursor-pointer"
                                                htmlFor={`type_of_car_` + item.id}
                                            >
                                                <input
                                                    name="type_of_car"
                                                    type="radio"
                                                    value={item.id}
                                                    onClick={handleFilter}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                    id={`type_of_car_` + item.id}
                                                />
                                                <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <IoCheckmarkCircle />
                                                </span>
                                            </label>
                                            <label
                                                className="ml-2 text-white cursor-pointer text-sm"
                                                htmlFor={`type_of_car_` + item.id}
                                            >
                                                &nbsp;{item.name} <span className="text-[#90A3BF]">({item.count})</span>
                                            </label>
                                        </div>
                                    ))}
                            </div>

                            {/* Availability Section */}
                            <div className="grid grid-cols-1 space-y-2 mt-5">
                                <span className="text-left text-sm text-white">{languageData[lang]["Availability"]}</span>
                                <div className="flex flex-row items-center justify-start gap-5">
                                    <div className="inline-flex items-center">
                                        <label className="relative flex items-center cursor-pointer" htmlFor="in_stock">
                                            <input
                                                name="availability"
                                                type="radio"
                                                value="1"
                                                onClick={handleFilter}
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                id="in_stock"
                                            />
                                            <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                <IoCheckmarkCircle />
                                            </span>
                                        </label>
                                        <label className="ml-2 text-white cursor-pointer text-sm" htmlFor="in_stock">
                                            &nbsp;{languageData[lang]["In Stock"]}
                                        </label>
                                    </div>

                                    <div className="inline-flex items-center">
                                        <label className="relative flex items-center cursor-pointer" htmlFor="out_of_stock">
                                            <input
                                                name="availability"
                                                type="radio"
                                                value="0"
                                                onClick={handleFilter}
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                                                id="out_of_stock"
                                            />
                                            <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                                                <IoCheckmarkCircle />
                                            </span>
                                        </label>
                                        <label className="ml-2 text-white cursor-pointer text-sm" htmlFor="out_of_stock">
                                            &nbsp;{languageData[lang]["Out of Stock"]}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Sort By Pricing */}
                            <div className="grid grid-cols-1 space-y-2 mt-5">
                                <div className="flex flex-row justify-between items-center">
                                    <span className="text-left text-sm text-white">{languageData[lang]["Pricing"]}</span>
                                </div>

                                <div className="flex flex-row justify-between space-x-2 items-center">
                                    <div className="w-full">
                                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg" id="price_high_low">
                                            <input
                                                type="radio"
                                                name="price_high_low"
                                                className="hidden peer"
                                                id="low_to_high"
                                                value="low_to_high"
                                                onClick={handleFilter}
                                            />
                                            <div className="w-full h-full py-2 flex text-center text-white items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-primary">
                                                <label htmlFor="low_to_high text-white">{languageData[lang]["Low to High"]}</label>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg" id="price_high_low">
                                            <input
                                                type="radio"
                                                name="price_high_low"
                                                className="hidden peer"
                                                id="high_to_low"
                                                value="high_to_low"
                                                onClick={handleFilter}
                                            />
                                            <div className="w-full h-full py-2 flex text-center text-white items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-primary">
                                                <label htmlFor="high_to_low text-white">{languageData[lang]["High to Low"]}</label>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row text-white justify-between items-center">
                                    <span>{languageData[lang]["From"]} AED {minPrice}</span>
                                    <span>{languageData[lang]["To"]} AED {maxPrice}</span>
                                </div>
                                <div className="flex flex-row items-center justify-center">
                                    <input
                                        type="range"
                                        min={filterData?.pricing?.min}
                                        max={filterData?.pricing?.max}
                                        value={maxPrice}
                                        onChange={handleSliderChange}
                                        className="w-full cursor-pointer accent-primary"
                                    />
                                </div>

                                <div className="flex flex-row items-center gap-2 justify-between">
                                    <input
                                        type="number"
                                        placeholder="From"
                                        name="from_value"
                                        value={minPrice}
                                        className="py-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                    />
                                    <input
                                        type="number"
                                        placeholder="To"
                                        name="to_value"
                                        value={maxPrice}
                                        className="py-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
                                    />
                                </div>
                            </div>

                            {/* Sort By Brands Section */}
                            <div className="grid grid-cols-1 space-y-2 mt-5">
                                <div className="flex flex-row justify-between items-center">
                                    <span className="text-left text-sm text-white">{languageData[lang]["Sort By Brands"]}</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                                    {/* Brand 1 */}
                                    {
                                        Array.isArray(filterData?.brands) && filterData?.brands?.map((item, idx) => {
                                            return (
                                                <label className="relative h-[5rem] items-center sm:h-[5rem] md:h-[5rem] bg-white rounded-lg" key={idx}>
                                                    <input
                                                        type="radio"
                                                        name="car_brands"
                                                        className="hidden peer"
                                                        value={item.id}
                                                        onClick={handleFilter}
                                                    />
                                                    <div className="w-full h-full bg-cover bg-center cursor-pointer rounded-lg border-[2px] border-transparent peer-checked:border-primary peer-checked:rounded-lg relative">
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
                                </div>
                            </div>
                        </div>
                    )}
                    <button
                        className="block md:hidden bg-red-500 text-white py-2 px-4 rounded-md mt-5 w-full"
                        onClick={() => setIsMobileFilterVisible(false)}
                    >
                        Close
                    </button>
                </div>

                <div className="w-full h-full right-0 flex flex-col lg:flex-row mx-auto lg:w-8/12 justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2">
                        {Array.isArray(carData?.data) && carData?.data?.length > 0 ? (
                            carData?.data?.map((item, idx) => (
                                <CarSingleCard
                                    key={idx}
                                    car_id={item.id}
                                    lang={lang}
                                    slug={item.slug}
                                    image={item.image}
                                    title={item.name}
                                    price_daily={item.price_daily}
                                    price_weekly={item.price_weekly}
                                    price_monthly={item.price_monthly}
                                    bluetooth={item.bluetooth}
                                    cruise_control={item.cruise}
                                    model={item.model}
                                    engine={item.engine}
                                    luggage={item.luggage}
                                    btnText={languageData[langValue]["Book Ride"]}
                                />
                            ))
                        ) : (
                            <p className="flex flex-row justify-center text-xl text-secondary text-center">No Data Available</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative flex flex-row justify-center items-center my-10 ar_pagination">
                <Pagination onChange={onChange} responsive={true} current={activePage} total={paginatioTotal} pageSize={12} />
            </div>

        </div>
    )
}

export default Cars
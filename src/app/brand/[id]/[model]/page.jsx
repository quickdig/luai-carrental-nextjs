
import Image from "next/image";
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
import carBrandOne from "../../../../../src/public/assets/carBrand1.png";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import BrandDetailSidebar from "@/components/BrandDetailSidebar";

const page = () => {
    return (
        <div className="bg-[#F1F4F8]">
            <div className="relative aboutus__Back flex items-center justify-center bg-cover bg-no-repeat bg-center h-60 sm:h-80 md:h-96 lg:h-[15rem] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="relative z-10 flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center text-center md:text-left">
                    <div className="text-white space-y-4 sm:space-y-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Brands Detail
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-md font-medium">
                            Top-rated car rental in Dubai. Low prices, great deals, convenient pick-up, top-notch service!
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-10 mx-auto items-center">
                <Breadcrumb linkOne={"Home"} linkTwo={"Brand"} linkThree={"Audi"} linkFour={"Audi A3 2023"} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">Audi A3 2023</h2>
            </div>


            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full gap-5 mt-5 mx-auto sm:px-2 md:px-2 lg:px-0">
                <div className="relative top-0 w-full lg:w-8/12 px-4 md:px-6 lg:px-0">
                    <div className="w-full">
                        <Image
                            src={carBrandOne}
                            alt="car_brand"
                            layout="responsive"
                            objectFit="contain"
                            className="rounded-md"
                        />
                    </div>

                    <div className="w-full bg-white my-5 rounded-md shadow-md">
                        <div className="content_area w-full space-y-4 px-4 md:px-6 lg:px-10 py-5">
                            <h4 className="text-left text-secondary font-bold text-lg md:text-xl lg:text-2xl">
                                Audi A3 Turbo 2023
                            </h4>
                            <p className="text-[#707070] text-sm md:text-base text-justify leading-6">
                                Please check the requirements before making the booking: - Minimum age 25. -Security deposit is required. You may get a different car from the pictures depends on the availability but for sure same model. Free daily mileage is 250KM. Any extra mileage will be deducted from the security deposit.
                            </p>

                            <div className="flex flex-col md:flex-row justify-between p-0 m-0 space-y-6 md:space-y-0">
                                {/* Requirements for UAE Residents */}
                                <div className="text-[#707070] w-full md:w-1/2 md:pr-4">
                                    <span className="text-sm md:text-base text-secondary text-left font-medium block">
                                        Requirements for UAE Residents
                                    </span>
                                    <ul className="list-none space-y-3 mt-4">
                                        <li className="flex items-center text-sm font-normal">
                                            <span className="text-primary">
                                                <FaCheck />
                                            </span>
                                            &nbsp; Copy of Passport
                                        </li>
                                        <li className="flex items-center text-sm font-normal">
                                            <span className="text-primary">
                                                <FaCheck />
                                            </span>
                                            &nbsp; Copy of Residential Visa
                                        </li>
                                        <li className="flex items-center text-sm font-normal">
                                            <span className="text-primary">
                                                <FaCheck />
                                            </span>
                                            &nbsp; UAE Driving License
                                        </li>
                                        <li className="flex items-center text-sm font-normal">
                                            <span className="text-primary">
                                                <FaCheck />
                                            </span>
                                            &nbsp; Copy of Emirates ID
                                        </li>
                                    </ul>
                                </div>

                                {/* Requirements for Tourists */}
                                <div className="text-[#707070] w-full md:w-1/2 md:pl-4">
                                    <span className="text-sm md:text-base text-secondary text-left font-medium block">
                                        Requirements for Tourists
                                    </span>
                                    <ul className="list-none space-y-3 mt-4">
                                        <li className="flex items-center text-sm font-normal">
                                            <span className="text-primary">
                                                <FaCheck />
                                            </span>
                                            &nbsp; Copy of Passport
                                        </li>
                                        <li className="flex items-center text-sm font-normal">
                                            <span className="text-primary">
                                                <FaCheck />
                                            </span>
                                            &nbsp; Copy of Visit Visa
                                        </li>
                                        <li className="flex items-center text-sm font-normal">
                                            <span className="text-primary">
                                                <FaCheck />
                                            </span>
                                            &nbsp; US, Canada, EU, GCC or International Driving License
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Panel Pricing/Other Filtering */}
                <div className="w-full bg-white border-[.5px] border-gray-400 h-auto rounded-md lg:w-4/12 px-4 py-6 sm:px-6 sm:py-8">
                    <BrandDetailSidebar />
                </div>

            </div>
            <div className="flex justify-center mt-10 w-full bg-white">
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

export default page
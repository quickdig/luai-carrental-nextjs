
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link";
import BrandDetailSidebar from "@/components/BrandDetailSidebar";
import { FaCheck } from "react-icons/fa6";
import Button from "@/components/Button";
import mapImage from "../../public/assets/map.png"

const page = () => {
    return (
        <div className="bg-[#F1F4F8]">
            <div className="relative aboutus__Back flex items-center justify-center bg-cover bg-no-repeat bg-center h-60 sm:h-80 md:h-96 lg:h-[15rem] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="relative z-10 flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center text-center md:text-left">
                    <div className="text-white space-y-4 sm:space-y-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-md font-medium">
                            Top-rated car rental in Dubai. Low prices, great deals, convenient pick-up, top-notch service!
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-10 mx-auto items-center">
                <Breadcrumb linkOne={"Home"} linkTwo={"Contact Us"} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">Contact Us</h2>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full gap-5 mx-auto px-4 sm:px-6 lg:px-0">
                {/* Left Section */}
                <div className="relative w-full lg:w-1/2">
                    <ul className="list-none space-y-3 mt-4">
                        <li className="flex items-start text-sm font-normal">
                            <span className="text-primary flex items-center gap-2">
                                <FaCheck className="text-lg" />
                                <b className="text-black">Address:</b>
                                <span className="text-gray-600 font-light">Shop No. 02, Azurite tower, Al-Jaddaf</span>
                            </span>
                        </li>
                        <li className="flex items-start text-sm font-normal">
                            <span className="text-primary flex items-center gap-2">
                                <FaCheck className="text-lg" />
                                <b className="text-black">Open Hours:</b>
                                <span className="text-gray-600 font-light">9:00 AM to 7:00 PM</span>
                            </span>
                        </li>
                        <li className="flex items-start text-sm font-normal">
                            <span className="text-primary flex items-center gap-2">
                                <FaCheck className="text-lg" />
                                <b className="text-black">Customer Support:</b>
                                <span className="text-gray-600 font-light">(+971) 501837000 / (+971) 42711000</span>
                            </span>
                        </li>
                    </ul>

                    {/* Form Section */}
                    <div className="rounded-md bg-white py-5 px-6 mt-6 shadow-md">
                        <form action="#" className="w-full">
                            <div className="grid gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                />
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        name="number"
                                        placeholder="Your Number"
                                        className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                ></textarea>
                            </div>
                            <div className="mt-6 text-right mb-5">
                                <Button
                                    text="Submit"
                                    type="submit"
                                    style="bg-secondary hover:bg-[#c9281a] text-white text-sm md:text-base lg:text-md py-2 px-4 md:px-6 rounded uppercase font-medium"
                                />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] mt-5">
                    <div className="relative w-full h-full rounded-md overflow-hidden lg:mt-0">
                        <Image
                            src={mapImage}
                            alt="map"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page
import { FaStar } from "react-icons/fa6";
import car_img from "../../src/public/assets/car_img.png";
import whatsApp from "../../src/public/assets/whatsApp.png";
import Link from "next/link"
import Button from "./Button";
import Image from "next/image";

const CarCard = ({ image, rating, title, model, pricing }) => {
    return (
        <div className="bg-white rounded-md px-4 py-5 space-y-4">
            {/* Star Rating */}
            <div className="flex flex-row items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-yellow-400 text-sm sm:text-base">5.0</span>
            </div>

            {/* Image Box */}
            <div class="relative w-full h-40 overflow-hidden object-contain group">
                <Image
                    src={car_img}
                    alt="Zoomable"
                    width={270}
                    class="object-contain transform transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Car Name and Year */}
            <div className="flex flex-col text-center sm:text-left px-2">
                <Link href={"/brand/audi/audi-a3-2023"} className="text-lg font-medium">
                    Kia Pegas
                </Link>
                <span className="text-xs sm:text-sm text-secondary">2023</span>
            </div>

            {/* Price Section */}
            <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-2">
                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-md font-semibold text-primary">99 AED</span>
                    <span className="text-gray-400 font-light text-xs">/Daily</span>
                </div>

                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-md font-semibold text-primary">99 AED</span>
                    <span className="text-gray-400 font-light text-xs">/Daily</span>
                </div>

                <div className="p-2 flex flex-col lg:flex-col w-full md:flex-col sm:flex-col rounded-md text-center bg-[#EBF3FE80]">
                    <span className="text-md font-semibold text-primary">99 AED</span>
                    <span className="text-gray-400 font-light text-xs">/Daily</span>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-row lg:flex-row md:flex-row gap-2 sm:flex-row">
                {/* Book Ride Button */}
                <Button
                    text={"Book Ride"}
                    type={"submit"}
                    style={
                        "bg-primary hover:bg-secondary uppercase w-full px-6 py-2 rounded items-center font-medium text-white"
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

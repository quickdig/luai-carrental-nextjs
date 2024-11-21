import { FaStar } from "react-icons/fa6";
import car_img from "../../src/public/assets/car_img.png";
import whatsApp from "../../src/public/assets/whatsApp.png";
import Link from "next/link"
import Button from "./Button";
import Image from "next/image";

const CarCard = ({ image, rating, title, model, pricing }) => {
    return (
        <div className="bg-white rounded-md p-5 space-y-4">
            {/* Star Rating */}
            <div className="flex flex-row items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-yellow-400 text-sm sm:text-base">5.0</span>
            </div>

            {/* Image Box */}
            <div class="relative w-full h-44 overflow-hidden group">
                <Image
                    src={car_img}
                    alt="Zoomable"
                    class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Car Name and Year */}
            <div className="flex flex-col text-center sm:text-left">
                <Link href={"#"} className="text-lg font-medium">
                    Kia Pegas
                </Link>
                <span className="text-xs sm:text-sm text-gray-500">2023</span>
            </div>

            {/* Price Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-2">
                <div className="bg-[#EBF3FE80] p-2 rounded-md text-center">
                    <span className="text-primary font-bold text-sm sm:text-md">
                        99 AED <br />
                        <span className="text-gray-400 font-light">/Daily</span>
                    </span>
                </div>
                <div className="bg-[#EBF3FE80] p-2 rounded-md text-center">
                    <span className="text-primary font-bold text-sm sm:text-md">
                        999 AED <br />
                        <span className="text-gray-400 font-light">/Weekly</span>
                    </span>
                </div>
                <div className="bg-[#EBF3FE80] p-2 rounded-md text-center">
                    <span className="text-primary font-bold text-sm sm:text-md">
                        9999 AED <br />
                        <span className="text-gray-400 font-light">/Monthly</span>
                    </span>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-2">
                {/* Book Ride Button */}
                <Button
                    text={"Book Ride"}
                    type={"submit"}
                    style={
                        "bg-primary hover:bg-secondary uppercase w-full sm:w-auto text-white font-medium py-3 px-6 rounded items-center justify-center"
                    }
                />
                {/* WhatsApp Button */}
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

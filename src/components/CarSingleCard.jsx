import { IoCheckmarkCircle } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import carBrandOne from "../../src/public/assets/carBrand1.png";
import Button from "@/components/Button";
import Link from "next/link";

const CarSingleCard = () => {
    return (
        <div className="rounded-md bg-white mx-2">
            <Image
                src={carBrandOne}
                alt="car_brand"
                layout="responsive"
                width={500}
                height={300}
                objectFit="contain"
                className="rounded-t-md"
            />

            <div className="w-full mx-4 my-2">
                <Link href={"#"} className="text-xl font-semibold">Hyundai Creta 2023</Link>
            </div>

            <div className="bg-gray-200 flex flex-col sm:flex-row items-center text-left justify-between py-0 px-3 mx-4 border-[.5px] border-gray-300">
                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">Per Day</span>
                    <span className="price_cat text-sm font-medium">AED 99</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">Per Week</span>
                    <span className="price_cat text-sm font-medium">AED 999</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">Per Month</span>
                    <span className="price_cat text-sm font-medium">AED 9999</span>
                </div>
            </div>

            <ul className="list-none space-y-3 mt-4 mx-4">
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; 6 airbags.
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; Electronic stability control (ESC)
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; Vehicle stability management (VSM)
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; Height adjustable front seatbelts.
                </li>
            </ul>

            <Button
                text={"Book Ride"}
                type={"submit"}
                style={"bg-secondary float-right mx-4 my-4 hover:bg-[#c9281a] uppercase text-center w-full md:w-auto text-white font-medium py-2 px-6 rounded inline-flex items-center justify-center"}
            />
        </div>
    )
}

export default CarSingleCard
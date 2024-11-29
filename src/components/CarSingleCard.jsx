import { IoCheckmarkCircle } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import carBrandOne from "../../src/public/assets/carBrand1.png";
import Button from "@/components/Button";
import Link from "next/link";

const CarSingleCard = ({ slug, image, title, price_daily, price_weekly, price_monthly, bluetooth, cruise_control, engine, luggage }) => {
    // const basePath = lang === "en" ? '' : `${lang}/`;

    return (
        <div className="rounded-md h-full bg-white mx-2">
            {/* <img
                src={image}
                className="rounded-t-md object-contain"
            /> */}

            <div className="img_box object-contain p-5">
                <img
                    src={image}
                    alt="Car"
                    className="rounded-t-md object-contain"
                />
            </div>

            <div className="w-full mx-4 my-2">
                <Link href={`/cars/${slug}`} className="text-xl font-semibold uppercase">{title}</Link>
            </div>

            <div className="bg-gray-200 flex flex-col sm:flex-row items-center text-left justify-between py-0 px-3 mx-4 border-[.5px] border-gray-300">
                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">Per Day</span>
                    <span className="price_cat text-sm font-medium">AED {price_daily}</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">Per Week</span>
                    <span className="price_cat text-sm font-medium">AED {price_weekly}</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">Per Month</span>
                    <span className="price_cat text-sm font-medium">AED {price_monthly}</span>
                </div>
            </div>

            <ul className="list-none space-y-3 mt-4 mx-4">
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {bluetooth ? 'Blutooth Yes' : 'Blutooth No'}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {cruise_control ? 'Cruise Control Yes' : 'Cruise Control No'}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; Engine {engine}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {luggage ? 'Luggage Yes' : 'Luggage No'}
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
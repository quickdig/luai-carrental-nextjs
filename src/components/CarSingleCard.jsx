import { IoCheckmarkCircle } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import carBrandOne from "../../src/public/assets/carBrand1.png";
import Button from "@/components/Button";
import Link from "next/link";
import { keywords } from "../../dataset";

const CarSingleCard = ({ btnText, model, slug, image, title, price_daily, price_weekly, price_monthly, bluetooth, cruise_control, engine, luggage, lang }) => {
    const basePath = lang === "en" ? '' : `${lang}/`;

    return (
        <div className="rounded-md h-full bg-white mx-2 px-2">
            {/* <img
                src={image}
                className="rounded-t-md object-contain"
            /> */}

            <div className="img_box inline-block p-5">
                <img
                    src={image}
                    alt="Car"
                    className="rounded-t-md w-full h-auto"
                />
            </div>

            <div className="w-full flex flex-col mx-4 my-2">
                <Link href={`/${basePath}cars/${slug}`} className="text-xl font-semibold uppercase">{title}</Link>
                <span>{model}</span>
            </div>

            <div className="bg-gray-200 flex flex-row sm:flex-row items-center text-left justify-between py-0 px-3 mx-4 border-[.5px] border-gray-300">
                <div className="flex flex-col justify-center items-center">
                    <span className="price_cat text-primary text-xs font-semibold">{lang == 'en' ? keywords.commonText.pricing.per.day.en : keywords.commonText.pricing.per.day.ar}</span>
                    <span className={`price_cat text-xs font-medium ${price_daily == 'On Request' ? 'text-green-600' : ''}`}>{price_daily == 'On Request' ? 'On Request' : 'AED ' + price_daily}</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="price_cat text-primary text-xs font-semibold">{lang == 'en' ? keywords.commonText.pricing.per.week.en : keywords.commonText.pricing.per.week.ar}</span>
                    <span className={`price_cat text-xs font-medium ${price_weekly == 'On Request' ? 'text-green-600' : ''}`}>{price_weekly == 'On Request' ? 'On Request' : 'AED ' + price_weekly}</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="price_cat text-primary text-xs font-semibold">{lang == 'en' ? keywords.commonText.pricing.per.month.en : keywords.commonText.pricing.per.month.ar}</span>
                    <span className={`price_cat text-xs font-medium ${price_monthly == 'On Request' ? 'text-green-600' : ''}`}>{price_monthly == 'On Request' ? 'On Request' : 'AED ' + price_monthly}</span>
                </div>
            </div>

            <ul className="list-none space-y-3 mt-4 mx-4">
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {bluetooth && lang == 'en' ? keywords.carFeatures.bluetooth.yes.en
                        : bluetooth && lang == 'ar' ? keywords.carFeatures.bluetooth.yes.ar : bluetooth == false && lang == 'en' ? keywords.carFeatures.bluetooth.no.en : keywords.carFeatures.bluetooth.no.ar}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {cruise_control && lang == 'en' ? keywords.carFeatures.cruise_control.yes.en
                        : cruise_control && lang == 'ar' ? keywords.carFeatures.cruise_control.yes.ar : cruise_control == false && lang == 'en' ? keywords.carFeatures.cruise_control.no.en : keywords.carFeatures.cruise_control.no.ar}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {lang == 'en' ? keywords.carFeatures.engine.en
                        : keywords.carFeatures.engine.ar} {engine}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {luggage && lang == 'en' ? keywords.carFeatures.luggage.yes.en
                        : luggage && lang == 'ar' ? keywords.carFeatures.luggage.yes.ar : luggage == false && lang == 'en' ? keywords.carFeatures.luggage.no.en : keywords.carFeatures.luggage.no.ar}
                </li>
            </ul>

            <Button
                text={btnText}
                type={"submit"}
                style={"bg-secondary float-right mx-auto my-4 hover:bg-[#c9281a] uppercase text-center w-full md:w-auto text-white font-medium py-2 px-6 rounded inline-flex items-center justify-center"}
            />
        </div>
    )
}

export default CarSingleCard
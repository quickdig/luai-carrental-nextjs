
import { MdStar } from "react-icons/md";
import Link from "next/link";
import { languageData } from "../../dataset";
import { useContext, useState } from "react";
import { Modal } from "antd";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";

const CarSingleCard = ({ btnText, model, slug, image, title, price_daily, price_weekly, price_monthly, bluetooth, cruise_control, engine, luggage, lang }) => {
    const basePath = lang === "en" ? '' : `${lang}/`;

    return (
        <div className="rounded-md h-full bg-white mx-2 px-4">

            <div className="img_box w-full">
                <img src={image} alt="Car" className=" w-full h-[10rem] object-contain object-center" />
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

            <ul className="list-none grid grid-cols-2 mt-4">
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {bluetooth ? languageData[langValue]["Blutooth Yes"] : languageData[langValue]["Blutooth No"]}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {cruise_control ? languageData[langValue]["Cruise Control Yes"] : languageData[langValue]["Cruise Control No"]}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {languageData[langValue]["Engine"]} {engine}
                </li>
                <li className="flex items-center text-xs font-semibold">
                    <span className="text-primary"><MdStar /></span> &nbsp; {luggage ? languageData[langValue]["Luggage Yes"] : languageData[langValue]["Luggage No"]}
                </li>
            </ul>

            <button onClick={handleBookingModal} className="bg-secondary float-right mx-auto my-4 hover:bg-[#c9281a] uppercase text-center w-full md:w-auto text-white font-medium py-2 px-6 rounded inline-flex items-center justify-center">Book Ride</button>

            <Modal className="p-0" width={"80%"} height={"100vh"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div className="flex overflow-auto h-[100vh]">
                    <div className="w-1/2 bg-white p-6">
                        <h2 className="uppercase text-[40px] font-light">{title}</h2>
                        <p className="text-[#2c9248] text-[18px]">Total Price: AED 1005.25</p>
                        <img src={image} alt="Car" className="rounded-t-md object-contain w-80" />
                        <h3>Coverages/Extras</h3>
                        <div>
                            <ul>
                                <li className="flex justify-between">
                                    <div>Refundable Security Deposit </div>
                                    <div>1000.00</div>
                                    <button>Added</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 w-1/2">
                        <h2 className="">Book Now</h2>
                        <form action="" className="pb-14">
                            <input type="text" placeholder="Name" className=" py-2 px-5 m-2 rounded-md" />
                            <input type="number" placeholder="Phone" className=" py-2 px-5 m-2 rounded-md" />
                            <input type="email" placeholder="Email" className="py-2 px-5 m-2 rounded-md mb-8" />
                            <div>
                                <span className="p-4 bg-[#dbb6df] rounded-md text-[#8b2b90]">
                                    The customer&apos;s age must be 25+
                                </span>
                            </div>

                            <div className="flex mt-8">
                                <div className="w-1/2">
                                    <label htmlFor="Start from Date" className="pb-4">Start from Date</label>
                                    <input type="date" className="py-2 px-8" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="Start from Date" className="pb-4">Start from Date</label>
                                    <input type="time" className="py-2 px-8 " />
                                </div>
                            </div>
                            <div className="flex mt-8">
                                <div className="w-1/2">
                                    <label htmlFor="End from Date" className="mb-4">End from Date</label>
                                    <input type="date" className="py-2 px-8" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="End from Date" className="pb-4">End from Date</label>
                                    <input type="time" className="py-2 px-8 " />
                                </div>
                            </div>
                            <div className="mb-9 p-4 bg-[#dbb6df] rounded-md text-[#8b2b90] w-[70%] text-sm mt-8">
                                <span >
                                    You can pick up and return our car at Dubai Head Office, Al Barsha or use Delivery or Collection Addres
                                </span>
                            </div>
                            <h2 className="my-5 text-[18px]">
                                Enter promo code
                            </h2>
                            <div className="">
                                <input className="w-[65%] p-2 rounded-l-md" type="text" placeholder="Promo Code" />
                                <span className="py-2 px-5 bg-[#dbb6df] rounded-r-md cursor-pointer">Valid</span>
                            </div>



                        </form>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CarSingleCard
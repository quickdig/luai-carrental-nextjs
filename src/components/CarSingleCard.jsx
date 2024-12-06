
import { MdStar } from "react-icons/md";
import Link from "next/link";
import { keywords } from "../../dataset";
import { useState } from "react";
import { Modal } from "antd";

const CarSingleCard = ({ btnText, model, slug, image, title, price_daily, price_weekly, price_monthly, bluetooth, cruise_control, engine, luggage, lang }) => {
    // const basePath = lang === "en" ? '' : `${lang}/`;

    const { commonText, carFeatures } = keywords
    const { day, week, month } = commonText.pricing.per
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleBookingModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="rounded-md h-full bg-white mx-2 px-2">

            <div className="img_box inline-block p-5">
                <img
                    src={image}
                    alt="Car"
                    className="rounded-t-md w-full h-auto"
                />
            </div>

            <div className="w-full flex flex-col mx-4 my-2">
                <Link href={`/cars/${slug}`} className="text-xl font-semibold uppercase">{title}</Link>
                <span>{model}</span>
            </div>

            <div className="bg-gray-200 flex flex-row sm:flex-row items-center text-left justify-between py-0 px-3 mx-4 border-[.5px] border-gray-300">
                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">{lang == 'en' ? day.en : day.ar}</span>
                    <span className="price_cat text-sm font-medium">AED {price_daily}</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">{lang == 'en' ? week.en : week.ar}</span>
                    <span className="price_cat text-sm font-medium">AED {price_weekly}</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">{lang == 'en' ? month.en : month.ar}</span>
                    <span className="price_cat text-sm font-medium">AED {price_monthly}</span>
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
                                    The customer's age must be 25+
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
                            <div class="input-group">
                                <input class="input-group__text" type="text" placeholder="Promo Code"/>
                                    <span class="input-group__btn js-promo-submit">Valid</span>
                            </div>



                        </form>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CarSingleCard
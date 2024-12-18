"use client"

import { IoCheckmarkCircle } from "react-icons/io5";
import Button from "@/components/Button";
import { FaCheck } from "react-icons/fa6";
import { languageData, requirements } from "../../dataset";
import { Modal } from "antd";
import { useState } from "react";
import usePost from "@/app/customHooks/usePost";
import Message from "./Message";

const BrandDetailSidebar = ({ lang, model, title, image, car_id, price_daily, price_weekly, price_monthly, pricing, subscription, insurance, techDetails, deposit }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [res, apiMethod] = usePost()
    const [isShow, setIsShow] = useState(false)
    const [services, setServices] = useState({});

    const [bookingData, setBookingData] = useState({
        name: "",
        number: "",
        email: "",
        date_from: "",
        start_time: "",
        date_to: "",
        end_time: "",
    });

    const handleInputChange = (e) => {
        e.persist();
        setBookingData({ ...bookingData, [e.target.name]: e.target.value })
        // if (e.target.name == 'pricing_mode') {
        //     setBookingData({ ...bookingData, ['pricing_mode']: e.target.id + ',' + e.target.value })
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", bookingData.name);
        formData.append("number", bookingData.number);
        formData.append("email", bookingData.email);
        formData.append("date_from", bookingData.date_from);
        formData.append("start_time", bookingData.start_time);
        formData.append("date_to", bookingData.date_to);
        formData.append("end_time", bookingData.end_time);
        formData.append("pricing", services?.pricing_mode);
        formData.append("baby_seat", services?.baby_set)
        formData.append("driver", services?.additional_driver)
        formData.append("insurance", services?.full_insurance)
        formData.append("car", title + model);

        if (bookingData.name == "" || bookingData.number == "" || bookingData.email == ""
            || bookingData.date_from == "" || bookingData.date_to == "") {
            window.alert("Required fields are empty!");
        } else {
            apiMethod(`booking`, formData)
            if (res.error == null) {
                setIsShow(true)
                setTimeout(() => {
                    setIsShow(false);
                    setIsModalOpen(false);
                }, [3000])
            }
        }

        console.log(...formData);
    }

    const handleBookingModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleServices = (e) => {
        e.persist();

        const { name, value } = e.target;

        console.log(name, value);
        setServices({ ...services, [name]: value })

        if (name === 'pricing_mode') {
            setServices({ ...services, ['pricing_mode']: e.target.id + ',' + value })
        }

    }

    return (
        <div className="space-y-4">
            {/* Pricing Mode */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-md text-black font-medium">{lang === 'en' ? 'Choose Pricing Mode' : 'اختر وضع التسعير'}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    {/* Daily */}
                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="pricing_mode"
                                className="hidden peer"
                                id="daily_price"
                                value={price_daily}
                                onChange={handleServices}
                            />
                            <div className="w-full h-full py-2 flex text-center items-center justify-center text-[12px] border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="daily_price">{languageData[lang]["Daily"]} <br />{price_daily == 'On Request' ? null : 'AED'} {price_daily}</label>
                            </div>
                        </label>
                    </div>
                    {/* Weekly */}
                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="pricing_mode"
                                className="hidden peer"
                                id="weekly_price"
                                value={price_weekly}
                                onChange={handleServices}
                            />
                            <div className="w-full h-full py-2 flex text-center items-center justify-center text-[12px] border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="weekly_price">{languageData[lang]["Weekly"]} <br />{price_weekly == 'On Request' ? null : 'AED'} {price_weekly}</label>
                            </div>
                        </label>
                    </div>
                    {/* Monthly */}
                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="pricing_mode"
                                className="hidden peer"
                                id="monthly_price"
                                value={price_monthly}
                                onChange={handleServices}
                            />
                            <div className="w-full h-full py-2 flex text-center items-center justify-center text-[12px] border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="monthly_price">{languageData[lang]["Monthly"]}<br /> {price_monthly == 'On Request' ? null : 'AED'} {price_monthly}</label>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Subscription Length */}
            {/* <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-md text-black font-medium">{lang === 'en' ? 'Subscription Length' : 'مدة الاشتراك'}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="sub_length"
                                className="hidden peer"
                                id="one_week"
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="one_week">{lang === 'en' ? '1 Week' : '1 أسبوع'}</label>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="sub_length"
                                className="hidden peer"
                                id="two_week"
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="two_week">{lang === 'en' ? '2 Weeks' : '2 أسابيع'}</label>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="sub_length"
                                className="hidden peer"
                                id="three_week"
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="three_week">{lang === 'en' ? '3 Weeks' : '3 أسابيع'}</label>
                            </div>
                        </label>
                    </div>
                </div>
            </div> */}

            {/* Insurance */}
            {/* <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-md text-black font-medium">{lang === 'en' ? 'Insurance' : 'تأمين'}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="insurance"
                                className="hidden peer"
                                id="standard_insurance"
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="standard_insurance">{lang === 'en' ? 'Standard Cover' : 'الغلاف القياسي'}</label>
                            </div>
                        </label>
                    </div>

                    <div>
                        <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                            <input
                                type="radio"
                                name="insurance"
                                className="hidden peer"
                                id="standard_insurance"
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="standard_insurance">{lang === 'en' ? 'Full Insurance' : 'التأمين الكامل'}</label>
                            </div>
                        </label>
                    </div>

                </div>
            </div> */}

            {/* Additional Services */}
            <div className="grid grid-cols-1 space-y-4">
                <span className="text-md text-black font-medium">{languageData[lang]["Additional services"]}</span>
                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer" htmlFor="service_1">
                        <input
                            name="baby_set"
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                            id="service_1"
                            value={"Baby Seat"}
                            onClick={handleServices}
                        />
                        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                            <IoCheckmarkCircle />
                        </span>
                    </label>
                    <label className="ml-2 text-[#707070] cursor-pointer text-sm" htmlFor="service_1">
                        &nbsp;{languageData[lang]["Baby Seat"]} (10 AED) <small>({languageData[lang]["Per Day"]})</small>
                    </label>
                </div>
                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer" htmlFor="service_2">
                        <input
                            name="additional_driver"
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                            id="service_2"
                            value={"Additional Driver"}
                            onClick={handleServices}
                        />
                        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                            <IoCheckmarkCircle />
                        </span>
                    </label>
                    <label className="ml-2 text-[#707070] cursor-pointer text-sm" htmlFor="service_2">
                        &nbsp;{languageData[lang]["Additional Driver"]} (200 AED)
                    </label>
                </div>
                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer" htmlFor="service_3">
                        <input
                            name="full_insurance"
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                            id="service_3"
                            value={"Full Insurance"}
                            onClick={handleServices}
                        />
                        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                            <IoCheckmarkCircle />
                        </span>
                    </label>
                    <label className="ml-2 text-[#707070] cursor-pointer text-sm" htmlFor="service_2">
                        &nbsp;{languageData[lang]["Full Insurance"]} (300 - 1000 AED)
                    </label>
                </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-4">
                <span className="text-md text-black font-medium">{lang === 'en' ? 'Technical Details' : 'التفاصيل الفنية'}</span>
                <ul className="list-none space-y-3 mt-4">
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{languageData[lang]["Security Amount"]}</span>
                            <span className="font-medium">{deposit} AED</span>
                        </div>
                    </li>
                    {/* <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{lang === 'en' ? 'Security Type' : 'نوع الأمان'}</span>
                            <span className="font-medium">{lang === 'en' ? 'Card Only' : 'البطاقة فقط'}</span>
                        </div>
                    </li> */}
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{languageData[lang]["Payment Type"]}</span>
                            <span className="font-medium">{lang === 'en' ? 'Credit Card, Cash' : 'بطاقة الائتمان، نقدا'}</span>
                        </div>
                    </li>
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{languageData[lang]["24x7 Support"]}</span>
                            <span className="font-medium">{lang === 'en' ? 'Yes' : 'نعم'}</span>
                        </div>
                    </li>

                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{languageData[lang]["Free Delivery"]}</span>
                            <span className="font-medium">{lang === 'en' ? 'Yes' : 'نعم'}</span>
                        </div>
                    </li>
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{languageData[lang]["Free Cancellation"]}</span>
                            <span className="font-medium">{lang === 'en' ? 'Yes' : 'نعم'}</span>
                        </div>
                    </li>

                </ul>
            </div>

            {/* Checkout Button */}
            <button
                type="submit"
                onClick={handleBookingModal}
                className="inline-block float-right text-white text-sm px-2 py-2 bg-secondary hover:bg-primary rounded md:mx-auto sm:mx-auto">{languageData[lang]["Proceed to Checkout"]}</button>

            <Modal
                className="p-0"
                width={"80%"}
                height={"100vh"}
                open={isModalOpen}
                // onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className="flex flex-col lg:flex-row overflow-auto h-[100vh]">

                    <div className="lg:w-1/2 w-full bg-white p-4 sm:p-6">
                        <h2 className="uppercase text-[24px] sm:text-[30px] lg:text-[40px] font-light">{title}</h2>
                        {/* <div className="flex flex-row gap-2">
                            <div className="w-full">
                                <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                                    <input
                                        type="radio"
                                        name="pricing_mode"
                                        className="hidden peer"
                                        id="daily_price"
                                        value={price_daily}
                                        onChange={handleInputChange}
                                    />
                                    <div className="w-full h-full py-2 flex text-center items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                        <label htmlFor="daily_price">{languageData[lang]["Daily"]}: AED {price_daily}</label>
                                    </div>
                                </label>
                            </div>

                            <div className="w-full">
                                <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                                    <input
                                        type="radio"
                                        name="pricing_mode"
                                        className="hidden peer"
                                        id="weekly_price"
                                        value={price_weekly}
                                        onChange={handleInputChange}
                                    />
                                    <div className="w-full h-full py-2 flex text-center items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                        <label htmlFor="weekly_price">{languageData[lang]["Weekly"]}: AED {price_weekly}</label>
                                    </div>
                                </label>
                            </div>

                            <div className="w-full">
                                <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                                    <input
                                        type="radio"
                                        name="pricing_mode"
                                        className="hidden peer"
                                        id="monthly_price"
                                        value={price_monthly}
                                        onChange={handleInputChange}
                                    />
                                    <div className="w-full h-full py-2 flex text-center items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                        <label htmlFor="monthly_price">{languageData[lang]["Monthly"]}: AED {price_monthly}</label>
                                    </div>
                                </label>
                            </div>
                        </div> */}
                        {/* <p className="text-primary text-[16px] sm:text-[18px] mt-2">{languageData[lang]["Total Price"]}: AED {price_daily}</p> */}
                        <img
                            src={image}
                            alt="Car"
                            className="rounded-t-md object-contain mx-auto w-full lg:w-80 mt-4"
                        />

                        <h4 className="text-left mt-5 mb-2 underline text-black">Selected Services</h4>
                        <div className="flex flex-row w-full justify-start items-center">
                            <div className="selected_details_section">

                                <div className="overflow-x-auto w-full">
                                    <table className="table-auto w-full text-center border border-gray-300">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="border border-gray-300 px-4 py-2 text-[12px]">Pricing</th>
                                                <th className="border border-gray-300 px-4 py-2 text-[12px]">Additional</th>
                                                <th className="border border-gray-300 px-4 py-2 text-[12px]">Deposit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    rowSpan={3}
                                                    className="border border-gray-300 px-4 py-2 text-[12px]"
                                                >
                                                    {languageData[lang][services?.pricing_mode?.split(',')[0]]}{" "}
                                                    {services?.pricing_mode?.split(',')[1]} AED
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 text-[12px]">
                                                    {
                                                        services?.baby_set ? services?.baby_set : 'No Additional Services Selected'
                                                    }
                                                </td>
                                                <td
                                                    rowSpan={3}
                                                    className="border border-gray-300 px-4 py-2 text-[12px]"
                                                >
                                                    {deposit}
                                                </td>
                                            </tr>
                                            {
                                                services?.additional_driver && (
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2 text-[12px]">{services?.additional_driver}</td>
                                                    </tr>
                                                )

                                            }

                                            {
                                                services?.full_insurance && (
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2 text-[12px]">{services?.full_insurance}</td>
                                                    </tr>
                                                )
                                            }

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                        <h3 className="mt-6 text-lg text-black font-semibold">{languageData[lang]["Min Requirement"]}</h3>
                        <div className="flex flex-row justify-center">
                            <p className="text-justify leading-6 text-[12px]">{requirements[lang]["MinReq"]}</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full sm:p-6 p-5">
                        <h2 className="text-lg lg:text-xl font-semibold mb-2">{languageData[lang]["Book Ride"]}</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="flex flex-col gap-4">
                                <div className="flex-1">
                                    <label htmlFor="name" className="block text-sm mb-1">{languageData[lang]["Name"]}</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="py-2 px-4 w-full rounded-md border border-gray-300"
                                        name="name"
                                        id="name"
                                        value={bookingData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="number" className="block text-sm">{languageData[lang]["Contact Number"]}</label>
                                    <input
                                        type="text"
                                        placeholder="Number"
                                        className="py-2 px-4 w-full rounded-md border border-gray-300"
                                        name="number"
                                        id="number"
                                        value={bookingData.number}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className="block text-sm">{languageData[lang]["Email"]}</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="py-2 px-4 w-full rounded-md border border-gray-300"
                                        name="email"
                                        id="email"
                                        value={bookingData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="bg-[#ff78787b] text-[#fa4c4c] text-sm mt-4 p-4 rounded-md">
                                {languageData[lang]["The customer's age must be 25+"]}
                            </div>
                            <div className="flex flex-wrap gap-4 mt-6">
                                <div className="flex-1">
                                    <label htmlFor="start-date" className="block mb-1 text-sm">{languageData[lang]["Start from Date"]}</label>
                                    <input
                                        type="date"
                                        id="start-date"
                                        className="py-2 px-4 w-full border border-gray-300 rounded-md"
                                        name="date_from"
                                        value={bookingData.date_from}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="start-time" className="block mb-1 text-sm">{languageData[lang]["Start from Time"]}</label>
                                    <input
                                        type="time"
                                        id="start-time"
                                        className="py-2 px-4 w-full border border-gray-300 rounded-md"
                                        name="start_time"
                                        value={bookingData.start_time}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <div className="flex-1">
                                    <label htmlFor="end-date" className="block mb-1 text-sm">{languageData[lang]["End from Date"]}</label>
                                    <input
                                        type="date"
                                        id="end-date"
                                        className="py-2 px-4 w-full border border-gray-300 rounded-md"
                                        name="date_to"
                                        value={bookingData.date_to}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="end-time" className="block mb-1 text-sm">{languageData[lang]["End from Time"]}</label>
                                    <input
                                        type="time"
                                        id="end-time"
                                        className="py-2 px-4 w-full border border-gray-300 rounded-md"
                                        name="end_time"
                                        value={bookingData.end_time}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            {
                                isShow && (
                                    <Message message={languageData[lang]["Success! Your Booking Request has been Sent"]} />
                                )
                            }

                            <button type="submit" className="inline-block float-right my-5 text-white text-sm px-2 py-2 bg-secondary hover:bg-primary rounded md:mx-auto sm:mx-auto" name="model_submit">
                                {languageData[lang]["Submit Request"]}
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* block bottom-4 md:bottom-8 md:right-0 lg:bottom-10 bg-secondary hover:bg-[#c9281a] text-white text-sm md:text-base lg:text-md py-2 px-4 md:px-6 rounded uppercase font-medium */}
        </div>
    )
}

export default BrandDetailSidebar
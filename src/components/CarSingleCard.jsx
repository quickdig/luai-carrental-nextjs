
import { MdStar } from "react-icons/md";
import Link from "next/link";
import { languageData, requirements } from "../../dataset";
import { useContext, useState } from "react";
import { Modal } from "antd";
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import usePost from "@/app/customHooks/usePost";
import Message from "./Message";

const CarSingleCard = ({ car_id, model, slug, image, title, price_daily, price_weekly, price_monthly, bluetooth, cruise_control, engine, luggage, lang }) => {
    const basePath = lang === "en" ? '' : `${lang}/`;
    const { langValue } = useContext(MainLanguageValueContext);
    const [res, apiMethod] = usePost()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShow, setIsShow] = useState(false)
    const [bookingData, setBookingData] = useState({
        name: "",
        number: "",
        email: "",
        date_from: "",
        start_time: "",
        date_to: "",
        end_time: "",
        pricing_mode: ""
    });

    const handleInputChange = (e) => {
        e.persist();
        setBookingData({ ...bookingData, [e.target.name]: e.target.value })
        if (e.target.name == 'pricing_mode') {
            setBookingData({ ...bookingData, ['pricing_mode']: e.target.id + ',' + e.target.value })
        }
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
        formData.append("pricing", bookingData.pricing_mode);
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
    return (
        <div className="rounded-md h-full bg-white mx-2 hover:shadow-lg hover:scale-105 transform transition duration-300">
            <div className="img_box flex justify-center items-center overflow-hidden">
                <img src={image} className="object-cover h-48 w-96 rounded-t-md" />
            </div>

            {/* <div className="img_box w-[400px] h-[400px] flex justify-center items-center bg-gray-100 overflow-hidden mt-4">
                <img
                    src={image}
                    alt="Car"
                    className="rounded-md object-contain max-w-full max-h-full"
                />
            </div> */}
            <div className="w-full flex flex-col my-2 px-4">
                <Link href={`/cars/${slug}`} className="text-lg font-semibold uppercase">{title}</Link>
                <span>{model}</span>
            </div>

            <div className="bg-gray-200 flex flex-row sm:flex-row items-center justify-between py-1 px-3 mx-4 border-[.5px] border-gray-300">
                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">{languageData[langValue]["Daily"]}</span>
                    <span className="price_cat text-sm font-medium">{price_daily == 'On Request' ? null : 'AED'} {price_daily}</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">{languageData[langValue]["Weekly"]}</span>
                    <span className="price_cat text-sm font-medium">{price_weekly == 'On Request' ? null : 'AED'} {price_weekly}</span>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <span className="price_cat text-primary text-xs font-semibold">{languageData[langValue]["Monthly"]}</span>
                    <span className="price_cat text-sm font-medium">{price_monthly == 'On Request' ? null : 'AED'} {price_monthly}</span>
                </div>
            </div>

            <ul className="list-none grid grid-cols-2 mt-4 mx-4">
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

            <div className="px-4 lg:px-0">
                <Link href={`/cars/${slug}`}>
                    <button className="bg-secondary float-right lg:mx-4 my-4 hover:bg-[#c9281a] uppercase text-center w-full md:w-auto text-white font-medium py-2 px-6 rounded inline-flex items-center justify-center">{languageData[langValue]["Book Ride"]}</button>
                </Link>
                {/* onClick={handleBookingModal} */}
            </div>

            <Modal
                className="p-0 rounded-md"
                width={"80%"}
                height={"100vh"}
                open={isModalOpen}
                // onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className="flex flex-col lg:flex-row overflow-auto h-[100vh]">

                    <div className="lg:w-1/2 w-full bg-white p-4 sm:p-6 rounded-l-md">
                        <h2 className="uppercase text-[24px] sm:text-[30px] lg:text-[40px] font-light">{title}</h2>
                        <div className="flex flex-row gap-2">
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
                        </div>
                        {/* <p className="text-primary text-[16px] sm:text-[18px] mt-2">{languageData[lang]["Total Price"]}: AED {price_daily}</p> */}
                        <img
                            src={image}
                            alt="Car"
                            className="rounded-t-md object-contain mx-auto w-full lg:w-80 mt-4"
                        />
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
                                    <label htmlFor="number" className="block text-sm">{languageData[lang]["Number"]}</label>
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

        </div>
    )
}

export default CarSingleCard
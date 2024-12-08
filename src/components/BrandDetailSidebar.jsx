import { IoCheckmarkCircle } from "react-icons/io5";
import Button from "@/components/Button";
import { FaCheck } from "react-icons/fa6";

const BrandDetailSidebar = ({ lang, pricing, subscription, insurance, services, techDetails }) => {
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
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="daily_price">{lang === 'en' ? 'Daily' : 'يوميًا'}</label>
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
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="weekly_price">{lang === 'en' ? 'Weekly' : 'أسبوعي'}</label>
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
                            />
                            <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                <label htmlFor="monthly_price">{lang === 'en' ? 'Monthly' : 'شهريا'}</label>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Subscription Length */}
            <div className="space-y-4">
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
            </div>

            {/* Insurance */}
            <div className="space-y-4">
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
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 space-y-4">
                <span className="text-md text-black font-medium">{lang === 'en' ? 'Additional services' : 'خدمات إضافية'}</span>
                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer" htmlFor="service_1">
                        <input
                            name="additional_service"
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                            id="service_1"
                        />
                        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                            <IoCheckmarkCircle />
                        </span>
                    </label>
                    <label className="ml-2 text-[#707070] cursor-pointer text-sm" htmlFor="service_1">
                        {lang === 'en' ? 'Baby seat (AED 50)' : 'مقعد الطفل (50 درهم)'}
                    </label>
                </div>
                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer" htmlFor="service_2">
                        <input
                            name="additional_service"
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
                            id="service_2"
                        />
                        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
                            <IoCheckmarkCircle />
                        </span>
                    </label>
                    <label className="ml-2 text-[#707070] cursor-pointer text-sm" htmlFor="service_2">
                        {lang === 'en' ? 'Airport delivery and pick up (AED 100)' : 'التوصيل من وإلى المطار (100 درهم)'}
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
                            <span>{lang === 'en' ? 'Security Amount' : 'مبلغ التأمين'}</span>
                            <span className="font-medium">{lang === 'en' ? '150 AED' : '150 AED'}</span>
                        </div>
                    </li>
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{lang === 'en' ? 'Security Type' : 'نوع الأمان'}</span>
                            <span className="font-medium">{lang === 'en' ? 'Card Only' : 'البطاقة فقط'}</span>
                        </div>
                    </li>
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{lang === 'en' ? 'Payment Type' : 'نوع الدفع'}</span>
                            <span className="font-medium">{lang === 'en' ? 'Credit Card, Cash' : 'بطاقة الائتمان، نقدا'}</span>
                        </div>
                    </li>
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{lang === 'en' ? '24x7 Support' : 'دعم 24×7'}</span>
                            <span className="font-medium">{lang === 'en' ? 'Yes' : 'نعم'}</span>
                        </div>
                    </li>

                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{lang === 'en' ? 'Free Delivery' : 'التوصيل مجاني'}</span>
                            <span className="font-medium">{lang === 'en' ? 'Yes' : 'نعم'}</span>
                        </div>
                    </li>
                    <li className="flex items-center text-sm font-normal">
                        <span className="text-primary">
                            <FaCheck />
                        </span>
                        <div className="flex flex-row justify-between w-full ml-2">
                            <span>{lang === 'en' ? 'Free Cancellation' : 'إلغاء مجاني'}</span>
                            <span className="font-medium">{lang === 'en' ? 'Yes' : 'نعم'}</span>
                        </div>
                    </li>

                </ul>
            </div>

            {/* Checkout Button */}
            <Button
                text="Proceed to checkout"
                type="submit"
                style="inline-block float-right text-white text-sm px-2 py-2 bg-secondary hover:bg-primary rounded md:mx-auto sm:mx-auto"
            />
            {/* block bottom-4 md:bottom-8 md:right-0 lg:bottom-10 bg-secondary hover:bg-[#c9281a] text-white text-sm md:text-base lg:text-md py-2 px-4 md:px-6 rounded uppercase font-medium */}
        </div>
    )
}

export default BrandDetailSidebar
import { IoCheckmarkCircle } from "react-icons/io5";
import Button from "@/components/Button";
import { FaCheck } from "react-icons/fa6";

const BrandDetailSidebar = ({ pricing, subscription, insurance, services, techDetails }) => {
    return (
        <div className="space-y-4">
            {/* Pricing Mode */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-md text-black font-medium">Choose Pricing Mode</span>
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
                                <label htmlFor="daily_price">Daily</label>
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
                                <label htmlFor="weekly_price">Weekly</label>
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
                                <label htmlFor="monthly_price">Monthly</label>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Subscription Length */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-md text-black font-medium">Subscription Length</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    {['1 Week', '2 Weeks', '3 Weeks'].map((label, index) => (
                        <div key={index}>
                            <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                                <input
                                    type="radio"
                                    name="sub_length"
                                    className="hidden peer"
                                    id={`length_${index}`}
                                />
                                <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                    <label htmlFor={`length_${index}`}>{label}</label>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Insurance */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-md text-black font-medium">Insurance</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    {['Standard Cover', 'Full Insurance'].map((label, index) => (
                        <div key={index}>
                            <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg">
                                <input
                                    type="radio"
                                    name="insurance"
                                    className="hidden peer"
                                    id={`insurance_${index}`}
                                />
                                <div className="w-full h-full py-2 flex items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-secondary">
                                    <label htmlFor={`insurance_${index}`}>{label}</label>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 space-y-4">
                <span className="text-md text-black font-medium">Additional services</span>
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
                        Baby seat (AED 50)
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
                        Airport delivery and pick up (AED 100)
                    </label>
                </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-4">
                <span className="text-md text-black font-medium">Technical Details</span>
                <ul className="list-none space-y-3 mt-4">
                    {[
                        ['Security Amount', '150 AED'],
                        ['Security Type', 'Card Only'],
                        ['Payment Type', 'Credit Card, Cash'],
                        ['24x7 Support', 'Yes'],
                        ['Free Delivery', 'Yes'],
                        ['Free Cancellation', 'Yes'],
                    ].map(([key, value], index) => (
                        <li className="flex items-center text-sm font-normal" key={index}>
                            <span className="text-primary">
                                <FaCheck />
                            </span>
                            <div className="flex flex-row justify-between w-full ml-2">
                                <span>{key}</span>
                                <span className="font-medium">{value}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Checkout Button */}
            <Button
                text="Proceed to checkout"
                type="submit"
                style="block bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-10 lg:right-5 bg-secondary hover:bg-[#c9281a] text-white text-sm md:text-base lg:text-md py-2 px-4 md:px-6 rounded uppercase font-medium"
            />
        </div>
    )
}

export default BrandDetailSidebar
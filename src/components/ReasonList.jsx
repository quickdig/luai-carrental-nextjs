import Button from './Button'
import ReasonCard from './ReasonCard';
import { LuKey } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import { BsCalendar2Check } from "react-icons/bs";
import { RiAnchorLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";

const ReasonList = () => {
    return (
        <section className="reasonList_Card relative mt-16">
            <div className="flex flex-col max-w-screen-lg w-full mx-auto items-center px-4 lg:px-8">
                <h4 className="text-black text-center text-2xl md:text-3xl font-bold mb-5">
                    #1 for Some Genuine Reasons
                </h4>
                <p className="text-center text-sm md:text-md text-[#707070]">
                    We offer a wide range of unique rental vehicles for any occasion or destination. From economy cars to SUVs, we've
                    <br className="hidden md:block" /> got you covered. Take advantage of our exclusive loyalty program for money-saving rewards.
                    Choose from luxury, <br className="hidden md:block" /> mid-range, and cheap vehicles according to your budget. Get the best car rental in Dubai.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6 md:mt-10">
                    <div className="col-span-1">
                        <ReasonCard
                            icon={<LuKey />}
                            title="Timely Delivery"
                            desc="We send the expert drivers to your doorstep within minutes after booking online or via phone. This is great for many of you who wait hours to receive your car on rent."
                        />
                    </div>
                    <div className="col-span-1">
                        <ReasonCard
                            icon={<SlEnergy />}
                            title="Unbeatable Rates"
                            desc="We send the expert drivers to your doorstep within minutes after booking online or via phone. This is great for many of you who wait hours to receive your car on rent."
                        />
                    </div>
                    <div className="col-span-1">
                        <ReasonCard
                            icon={<GoShieldCheck />}
                            title="Flexible Return Policy"
                            desc="We send the expert drivers to your doorstep within minutes after booking online or via phone. This is great for many of you who wait hours to receive your car on rent."
                        />
                    </div>
                    <div className="col-span-1">
                        <ReasonCard
                            icon={<BsCalendar2Check />}
                            title="Online Reservation"
                            desc="We send the expert drivers to your doorstep within minutes after booking online or via phone. This is great for many of you who wait hours to receive your car on rent."
                        />
                    </div>
                    <div className="col-span-1">
                        <ReasonCard
                            icon={<RiAnchorLine />}
                            title="Fully Insured"
                            desc="We send the expert drivers to your doorstep within minutes after booking online or via phone. This is great for many of you who wait hours to receive your car on rent."
                        />
                    </div>
                    <div className="col-span-1">
                        <ReasonCard
                            icon={<IoBriefcaseOutline />}
                            title="Professional Staff"
                            desc="We send the expert drivers to your doorstep within minutes after booking online or via phone. This is great for many of you who wait hours to receive your car on rent."
                        />
                    </div>
                </div>

                <p className="text-center text-sm md:text-md text-[#707070] mt-8 md:mt-10">
                    Whether short-term or long-term rentals, there is something perfect for everyone here at Hala Drive.
                    Book now <br className="hidden md:block" /> and start taking advantage of these excellent benefits today!
                </p>

                <Button
                    text={"Book Ride"}
                    type={"submit"}
                    style="bg-primary hover:bg-secondary uppercase mt-6 md:mt-8 text-center text-white font-medium py-3 px-8 md:py-2 md:px-12 rounded inline-flex items-center"
                />
            </div>

        </section>
    )
}

export default ReasonList
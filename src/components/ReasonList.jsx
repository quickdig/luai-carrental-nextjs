import Button from './Button'
import ReasonCard from './ReasonCard';
import { LuKey } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import { BsCalendar2Check } from "react-icons/bs";
import { RiAnchorLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";

const ReasonList = ({ lang, reasonListData, reasonHeaderData }) => {
    return (
        <section className="reasonList_Card relative mt-16">
            <div className="flex flex-col max-w-screen-lg w-full mx-auto items-center px-4 lg:px-8">
                <h4 className="text-black text-center text-2xl md:text-3xl font-bold mb-5">
                    {reasonHeaderData?.header}
                </h4>
                <p className="text-center text-sm md:text-md leading-7 text-[#707070]">
                    {reasonHeaderData?.text_one}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6 md:mt-10">

                    {
                        Array.isArray(reasonListData) && reasonListData?.map((item, idx) => {
                            return (
                                <div className="col-span-1" key={idx}>
                                    <ReasonCard
                                        icon={item.image}
                                        title={item.header}
                                        desc={item.text}
                                    />
                                </div>
                            )
                        })
                    }


                </div>

                <p className="text-center text-sm md:text-md text-[#707070] mt-8 md:mt-10 leading-7">
                    {reasonHeaderData?.text_two}
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
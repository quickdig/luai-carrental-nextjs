import { FaCarRear, FaCalendarDays, FaClock } from "react-icons/fa6";
import Button from './Button';

const SearchBox = () => {
    return (
        <section className="searchform_Section relative bg-secondary py-6">
            <div className="flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center">
                <div className="md:w-1/6 mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-sm font-medium text-white">Fast and efficient car</p>
                    <p className="text-white font-light text-sm">search at your fingertips.</p>
                </div>

                <div className="md:w-5/6 w-full">
                    <form className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="relative flex items-center w-full md:w-auto">
                            <input
                                type="text"
                                placeholder="Pick a Brand"
                                className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full md:w-56 outline-[#333]"
                            />
                            <div className="absolute left-4 text-gray-400">
                                <FaCarRear />
                            </div>
                        </div>

                        <div className="relative flex items-center w-full md:w-auto">
                            <input
                                type="date"
                                placeholder="Select Date"
                                className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full md:w-56 outline-[#333]"
                            />
                            <div className="absolute left-4 text-gray-400">
                                <FaCalendarDays />
                            </div>
                        </div>

                        <div className="relative flex items-center w-full md:w-auto">
                            <input
                                type="time"
                                placeholder="Select Time"
                                className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full md:w-56 outline-[#333]"
                            />
                            <div className="absolute left-4 text-gray-400">
                                <FaClock />
                            </div>
                        </div>

                        <Button
                            text={"Search"}
                            type={"submit"}
                            style={
                                "bg-primary hover:bg-[#c9281a] uppercase text-center w-full md:w-auto text-white font-medium py-3 px-6 rounded inline-flex items-center justify-center"
                            }
                        />
                    </form>
                </div>
            </div>
        </section>


    )
}

export default SearchBox
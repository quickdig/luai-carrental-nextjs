"use client"

import Breadcrumb from "@/components/Breadcrumb"
import Image from "next/image";
// import carImage from "../../public/assets/car_img_1.png"
// import userImage from "../../public/assets/ecllipsTwo.png"
import Button from "@/components/Button";
import BlogLongCard from "@/components/BlogLongCard";
import Link from "next/link";

const page = () => {
    return (
        <div className="bg-[#F1F4F8]">
            <div className="relative aboutus__Back flex items-center justify-center bg-cover bg-no-repeat bg-center h-60 sm:h-80 md:h-96 lg:h-[15rem] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="relative z-10 flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center text-center md:text-left">
                    <div className="text-white space-y-4 sm:space-y-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Blogs
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-md font-medium">
                            Top-rated car rental in Dubai. Low prices, great deals, convenient pick-up, top-notch service!
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-10 mx-auto items-center">
                <Breadcrumb linkOne={"Home"} linkTwo={"Blogs"} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">Blogs</h2>
            </div>

            <div className="relative grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-screen-lg mx-auto sm:px-6 lg:px-0 mt-5">
                {/* Blog Card 1 */}
                <BlogLongCard />

                {/* Blog Card 2 */}
                <BlogLongCard />

                {/* Blog Card 3 */}
                <BlogLongCard />

                {/* Blog Card 4 */}
                <BlogLongCard />
            </div>
        </div>
    )
}

export default page
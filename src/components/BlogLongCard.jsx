"use client"

import Image from "next/image";
import carImage from "../public/assets/car_img_1.png"
import userImage from "../public/assets/ecllipsTwo.png"
import Button from "@/components/Button";
import Link from "next/link";


const BlogLongCard = () => {
    return (
        <div className="flex flex-col sm:flex-row bg-white p-2 gap-4 border border-gray-300 rounded-md">
            <div className="img_box flex relative w-full sm:w-2/5 h-48 sm:h-auto object-contain">
                <Image
                    src={carImage}
                    alt="Car"
                    className="rounded-md object-cover w-full h-full"
                />
            </div>
            <div className="contain_box flex flex-col justify-between w-full sm:w-2/3">
                <div className="mt-2">
                    <Link
                        href={"/blog/lotus-dubai"}
                        className="text-xl sm:text-2xl font-semibold text-gray-800 hover:underline"
                    >
                        Lotus Dubai
                    </Link>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                        <Image
                            src={userImage}
                            alt="Author"
                            width={25}
                            height={25}
                            className="rounded-full"
                        />
                        <span className="ml-2 font-semibold">Dasteen</span>
                    </div>
                    <div className="flex flex-row items-center mt-2 text-gray-400">
                        <span className="text-[10px]">Jan 10, 2024</span>
                        <span className="text-sm mx-2">•</span>
                        <span className="text-[10px]">3 Min Read</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-xs line-clamp-3">
                        Lorem Ipsum Dolor Sit Amet Consectetur. Consectetur Risus Quis Diam
                        Hendrerit. Interdum Mattis In Sed Diam Egestas Metus At Duis
                        Commodo. Cursus Quis Cursus.
                    </p>
                    <Link href="blog/lotus-dubai">
                        <Button
                            text="Read more →"
                            type="submit"
                            style="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-secondary mt-2 uppercase"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogLongCard
import Image from "next/image";
import carImage from "../public/assets/car_img_1.png"
import userImage from "../public/assets/ecllipsTwo.png"
import Button from "@/components/Button";
import Link from "next/link";


const BlogLongCard = ({ lang, image, title, slug, authorimage, authorname, date, readtime, description }) => {
    const basePath = lang === "en" ? '' : `${lang}/`;
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = date.getDate();
        const ordinalSuffix =
            day % 10 === 1 && day !== 11
                ? "st"
                : day % 10 === 2 && day !== 12
                    ? "nd"
                    : day % 10 === 3 && day !== 13
                        ? "rd"
                        : "th";

        const month = date.toLocaleString("default", { month: "long" });

        return `${day}${ordinalSuffix} ${month}`;
    }

    const getPlainText = (html) => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = html;
        return tempElement.textContent || tempElement.innerText || "";
    };

    return (
        <div className="flex flex-col sm:flex-row bg-white p-2 gap-4 border border-gray-300 rounded-md">
            <div className="img_box flex relative w-full sm:w-2/5 h-48 sm:h-auto object-contain">
                <img
                    src={image}
                    alt="Car"
                    className="rounded-md object-cover w-full h-full"
                />
            </div>
            <div className="contain_box flex flex-col justify-between w-full sm:w-2/3">
                <div className="mt-2">
                    <Link
                        href={`blog/${slug}`}
                        className="text-xl sm:text-2xl font-semibold text-gray-800 hover:underline line-clamp-1"
                    >
                        {title}
                    </Link>
                    {/* <div className="flex items-center text-gray-500 text-sm mt-2">
                        <Image
                            src={userImage}
                            alt="Author"
                            width={25}
                            height={25}
                            className="rounded-full"
                        />
                        <span className="ml-2 text-xs font-normal">{authorname}</span>
                    </div> */}
                    <div className="flex flex-row items-center mt-1 text-gray-400">
                        <span className="mx-2 text-xs font-normal">{authorname}</span>
                    </div>
                    <div className="flex flex-row items-center mt-2 text-gray-400">
                        <span className="text-[10px]">{formatDate(date)}</span>
                        <span className="text-sm mx-2">•</span>
                        <span className="text-[10px]">{readtime}</span>
                    </div>
                    <p className="text-gray-600 mt-1 text-xs text-justify line-clamp-3">
                        {getPlainText(description)}
                    </p>
                    <Link href={`/blog/${slug}`}>
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
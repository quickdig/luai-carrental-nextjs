import Image from "next/image"

const CategoryCard = ({ title, image, description }) => {
    return (
        <div className="flex flex-col items-center w-[45%] sm:w-[30%] lg:w-[20%] bg-[#F4F0F8] rounded-md space-y-2 p-4">
            <div className="flex w-[4rem] h-[4rem]">
                <Image
                    src={image}
                    alt="Category"
                    className="rounded-full object-cover"
                />
            </div>
            <h4 className="text-center text-sm font-bold">{title}</h4>
            <p className="text-center text-xs lg:text-sm sm:text-sm">
                Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.
            </p>
        </div>
    )
}

export default CategoryCard
"use client"
import Breadcrumb from "@/components/Breadcrumb"
import carImage from "@/public/assets/car_img_1.png"
import userImage from "@/public/assets/ecllipsTwo.png"
import Image from "next/image"
import Button from "@/components/Button";
import catImageOne from "@/public/assets/cat_img1.jpg";
import catImageTwo from "@/public/assets/cat_img2.jpg";
import catImageThree from "@/public/assets/cat_img3.jpg";
import catImageFour from "@/public/assets/cat_img4.jpg";
import catImageFive from "@/public/assets/cat_img5.jpg";
import CategoryCard from "@/components/CategoryCard";
import { useParams, usePathname } from "next/navigation";
import useFetch from "@/app/customHooks/useFetch"
import { getBreadcrumb } from "@/app/utils/getBreadcrumbs"
import PreLoader from "@/components/PreLoader"
import { useEffect, useState } from "react"

const BlogDetail = ({ lang }) => {

    const params = useParams()
    const pathname = usePathname();
    const breadcrumbs = getBreadcrumb(pathname)

    const { loading, data } = useFetch(`blog/single/${lang}/${params.slug}`);

    const [bannerData, setBannerData] = useState("");
    const dataBanner = useFetch(`banner_data/${lang}/blog`);
    useEffect(() => {
        if (dataBanner) {
            setBannerData(dataBanner?.data?.data)
        }
    }, [dataBanner]);

    if (loading) return <PreLoader />;
    const allData = data?.data;
    return (
        <div className="bg-[#F1F4F8] pb-10">
            <div className="relative aboutus__Back flex items-center justify-center bg-cover bg-no-repeat bg-center h-60 sm:h-80 md:h-96 lg:h-[15rem] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="relative z-10 flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center text-center md:text-left">
                    <div className="text-white space-y-4 sm:space-y-6 ar_banner">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            {bannerData?.header}
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-md font-medium">
                            {bannerData?.text}
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-10 mx-auto items-center">
                <Breadcrumb breadcrumbs={breadcrumbs} lang={lang} lastVal={allData.Title} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">{allData.Title}</h2>
            </div>

            <div className="relative flex flex-col lg:flex-col md:flex-col sm:flex-col max-w-screen-lg bg-white w-full mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                {/* Blog Content Section */}
                <div className="w-full">
                    <div className="img_box flex w-full h-[16rem] sm:h-[24rem] lg:h-[30rem] p-2 sm:p-4 lg:p-5">
                        <img
                            src={allData.image}
                            alt="Car"
                            className="rounded-md object-cover w-full h-full"
                        />
                    </div>

                    <div className="blog_details_content flex flex-col w-full space-y-4 px-4 sm:px-6 lg:px-10">
                        <div className="header_box">
                            <h2 className="text-left text-lg sm:text-2xl lg:text-3xl font-bold">
                                {allData.Title}
                            </h2>
                        </div>

                        <div className="author_box flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:gap-4 text-gray-500">
                            {/* <div className="flex items-center">
                                <Image
                                    src={userImage}
                                    alt="Author"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <span className="ml-2 font-semibold">Dasteen</span>
                            </div> */}
                            <div className="flex flex-row items-center text-gray-400">
                                <span className="text-xs">Jan 10, 2024</span>
                                <span className="text-sm mx-2">•</span>
                                <span className="text-xs">3 Min Read</span>
                            </div>
                        </div>

                        <div className="blog_content_box space-y-4" dangerouslySetInnerHTML={{ __html: allData.Description }}>

                        </div>

                        {/* <Button
                            text="Read more →"
                            type="button"
                            style="bg-primary w-full sm:w-[10rem] font-bold text-white text-sm px-4 py-2 rounded hover:bg-secondary mt-2 uppercase"
                        /> */}
                    </div>
                </div>

                {/* Blog Footer Section */}
                {/* <div className="blog_detail_footer space-y-6 mt-16 my-5 px-4 sm:px-6 lg:px-8"> */}
                {/* Category Section */}
                {/* <div className="category_section_blog w-full flex flex-row items-center gap-2">
                        <h4 className="text-left text-lg sm:text-xl font-semibold text-black">
                            All Category
                        </h4>
                        <span className="bg-black w-6 h-[1.5px]"></span>
                    </div> */}

                {/* Categories Grid */}
                {/* <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center gap-4"> */}
                {/* Single Category Card */}
                {/* <CategoryCard title={"Car Review"} image={catImageOne} />
                        <CategoryCard title={"Maintenance Tips"} image={catImageTwo} />
                        <CategoryCard title={"Car Modifications"} image={catImageThree} />
                        <CategoryCard title={"Driving Tips"} image={catImageFour} />
                        <CategoryCard title={"Car Review"} image={catImageFive} /> */}
                {/* </div> */}
                {/* </div> */}
            </div>

        </div>
    )
}

export default BlogDetail
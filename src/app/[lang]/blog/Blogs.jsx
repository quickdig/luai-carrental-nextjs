"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Image from "next/image";
// import carImage from "../../public/assets/car_img_1.png"
// import userImage from "../../public/assets/ecllipsTwo.png"
import Button from "@/components/Button";
import BlogLongCard from "@/components/BlogLongCard";
import useFetch from "@/app/customHooks/useFetch";
import { useEffect, useState } from "react";
import useGet from "@/app/customHooks/useGet";
import { Pagination } from "antd";
import { getBreadcrumb } from "@/app/utils/getBreadcrumbs";
import { usePathname } from "next/navigation";

const Blogs = ({ params, lang }) => {

    const { loading, data } = useFetch(`blog/${lang}/12?page=1`);
    const [blogData, setBlogData] = useState("");
    const [resget, apiMethodGet] = useGet()
    const [activePage, setActivePage] = useState(1);
    const pathname = usePathname();
    const breadcrumbs = getBreadcrumb(pathname)

    const [bannerData, setBannerData] = useState("");
    const dataBanner = useFetch(`banner_data/${lang}/blog`);
    useEffect(() => {
        if (dataBanner) {
            setBannerData(dataBanner?.data?.data)
        }
    }, [dataBanner]);

    useEffect(() => {
        if (data) {
            setBlogData(data?.data)
        }

    }, [data])

    useEffect(() => {
        if (resget.data) {
            setBlogData(resget?.data?.data)
        }
    }, [resget.data])

    console.log(blogData);
    const onChange = (current) => {
        setActivePage(current)
        apiMethodGet(`blog/${lang}/12?page=${current}`)
    }
    if (loading) return;
    return (
        <div className="bg-[#F1F4F8]">
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
                <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-5 mx-auto items-center">
                <h2 className="text-left text-xl font-bold">{bannerData?.header}</h2>
            </div>

            <div className="relative grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-screen-lg mx-auto sm:px-6 lg:px-0 mt-5">
                {
                    Array.isArray(blogData?.data) && blogData?.data.map((item, idx) => {
                        return (
                            <BlogLongCard key={idx} lang={lang} image={item.image} slug={item.slug} title={item.heading} authorimage={null}
                                authorname={"Test Author"} date={item.date} readtime={"3 min read"} description={item.description} />
                        )
                    })
                }
            </div>

            <div className="relative flex flex-row justify-center items-center my-10 ar_pagination">
                {/* <Pagination onChange={onChange} responsive={true} current={activePage} total={data?.pagination?.total} pageSize={12} /> */}
            </div>
        </div>
    )
}

export default Blogs
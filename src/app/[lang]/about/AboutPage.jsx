"use client"
import Image from "next/image"
import Button from "@/components/Button"
import ACommonCard from "@/components/ACommonCard"
import EcllipseFour from "../../../public/assets/ecllipsFour.png";
import EcllipseFive from "../../../public/assets/ecllipsFive.png";
import Brands from "@/components/Brands"
import bOne from "../../../public/assets/car-brands/chevrolet.png";
import bTwo from "../../../public/assets/car-brands/mazda.svg";
import bThree from "../../../public/assets/car-brands/honda.png";
import bFour from "../../../public/assets/car-brands/bmw.webp";
import bFive from "../../../public/assets/car-brands/mg.png";
import bSix from "../../../public/assets/car-brands/rr.png";
import bSeven from "../../../public/assets/car-brands/toyota.png";
import bEight from "../../../public/assets/car-brands/kia.svg";
import Breadcrumb from "@/components/Breadcrumb"
import useFetch from "@/app/customHooks/useFetch"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import useGet from "@/app/customHooks/useGet"
import { EcllipseOne, EcllipseThree, EcllipseTwo } from "@/ImagesImport/image"
import { getBreadcrumb } from "@/app/utils/getBreadcrumbs"
import PreLoader from "@/components/PreLoader"
import BrandCarousel from "@/components/BrandCarousel";

const AboutUs = ({ lang }) => {

    const params = usePathname();
    const { loading, data } = useFetch(`aboutus/${lang}`);
    const breadcrumbs = getBreadcrumb(params)

    const [bannerData, setBannerData] = useState("");
    const dataBanner = useFetch(`banner_data/${lang}/about-us`);
    useEffect(() => {
        if (dataBanner) {
            setBannerData(dataBanner?.data?.data)
        }

    }, [dataBanner]);

    if (loading) return <PreLoader />;
    const valueData = data?.aboutvalue
    return (
        <>
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
                <Breadcrumb breadcrumbs={breadcrumbs} lang={lang} lastVal={data?.name} />
            </div>
            <div className="relative z-10 flex flex-col max-w-screen-lg w-full mt-0 mx-auto items-center">
                <div className="flex flex-col lg:flex-row justify-between items-center sm:px-6 lg:px-0">

                    <div className="w-full lg:w-1/2 mt-6 lg:mt-10 sm:mx-2 md:mx-2 sm:px-2 md:px-2 px-2 lg:px-0 lg:mx-0">
                        <img
                            src={data?.data?.image}
                            className="rounded-md ml-0 h-[20rem] sm:h-[25rem] lg:h-[30rem] object-cover w-full max-w-[25rem] mx-auto ar_img"
                            alt="car_image"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 lg:mt-0 sm:mx-2 md:mx-2 sm:px-2 md:px-2 px-2 lg:mx-0 lg:px-0">
                        <div className="flex flex-col ml-0">
                            <h4 className="text-2xl sm:text-3xl font-semibold leading-tight text-center lg:text-left">
                                {data?.data?.header}
                            </h4>

                            <p className="text-[#707070] text-sm sm:text-md my-4 leading-7 text-justify">
                                {data?.data?.description}
                            </p>

                            <p className="italic text-sm sm:text-md mb-6 text-justify" dangerouslySetInnerHTML={{ __html: data?.data?.lower_text }}>

                            </p>
                        </div>

                        {/* <Button
                            text={"Start Your Journey"}
                            type={"submit"}
                            style={
                                "bg-secondary hover:bg-primary uppercase text-center text-white font-medium py-2 px-4 rounded inline-flex items-center mx-auto lg:mx-0"
                            }
                        /> */}
                    </div>
                </div>
            </div>


            <div className="flex flex-col bg-[#F1F4F8] mx-auto w-full px-4 sm:px-8 py-20 mt-10">
                <div className="flex flex-wrap items-center space-y-2 justify-between w-full mx-auto max-w-screen-lg">

                    <ACommonCard icon={valueData.image_one} title={valueData.header_one} desc={valueData.brief_one} />
                    <ACommonCard icon={valueData.image_two} title={valueData.header_two} desc={valueData.brief_two} />
                    <ACommonCard icon={valueData.image_three} title={valueData.header_three} desc={valueData.brief_three} />
                    <ACommonCard icon={valueData.image_four} title={valueData.header_four} desc={valueData.brief_four} />
                </div>
            </div>

            <div className="relative bottom-0 flex items-center justify-start bg-cover bg-no-repeat bg-center h-auto sm:h-[28rem] md:h-[28rem] mb-10 w-full footer__LowerBack">

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/60"></div>

                <div className="relative z-10 flex flex-col p-6 sm:p-8 md:p-10 max-w-screen-lg w-full mx-auto space-y-6">

                    <div className="text-white space-y-4">
                        <h1 className="text-1xl sm:text-3xl font-light leading-snug text-center sm:text-left" dangerouslySetInnerHTML={{ __html: data?.data?.banner_heading }}>
                            {/* <i className="font-bold">More Than 45,000</i> People Have <br /> Trusted Luaidrive */}
                        </h1>
                        <p className="text-sm sm:text-md lg:text-sm lg:leading-6 leading-6 font-light text-justify">
                            {data?.data?.banner_text}
                        </p>
                    </div>

                    <div className="image__boxLower flex justify-center sm:justify-start gap-2">
                        <Image src={EcllipseOne} className="rounded-full w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]" alt="ellipse1" />
                        <Image src={EcllipseTwo} className="rounded-full w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] -ml-2 sm:-ml-4" alt="ellipse2" />
                        <Image src={EcllipseThree} className="rounded-full w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] -ml-2 sm:-ml-4" alt="ellipse3" />
                        <Image src={EcllipseFour} className="rounded-full w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] -ml-2 sm:-ml-4" alt="ellipse4" />
                        <Image src={EcllipseFive} className="rounded-full w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] -ml-2 sm:-ml-4" alt="ellipse5" />
                    </div>
                </div>
            </div>


            <BrandCarousel lang={lang} />

        </>
    )
}

export default AboutUs
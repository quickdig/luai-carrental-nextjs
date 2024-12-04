import banner_car2 from "../public/assets/banner_back.png";
import banner_car from "../public/assets/banner_img.png";
import bgimg from "../../src/public/assets/bgimg.png"
import Image from "next/image";

const Banner = ({ bannerData, allData }) => {

    const { banner_back, banner_heading, banner_img, banner_text } = bannerData

    return (
        <section className="relative overflow-hidden banner_Section">
            <img src={banner_back} className="w-full object-cover blur-[2px] max-[1024px]:absolute max-[1024px]:h-full" alt="banner_img" />
            <Image src={bgimg} className="absolute h-full max-w-[60%] right-0 top-0 z-[9]" alt="poligon" />
            <div className="banner_SectionMain w-[90%] items-center grid grid-cols-[40%,60%] mx-auto  right-0 absolute z-10 top-[50%] transform translate-y-[-50%] max-[1024px]:top-0  max-[1024px]:translate-y-[0] max-[1024px]:mt-[2rem] max-[1024px]:block max-[1024px]:relative">
                <div className="banner_SectionMainl">
                    <div className="text-white max-w-lg space-y-6">
                        <h1 className="text-3xl lg:text-[50px] md:text-5xl font-bold leading-tight line-clamp-3">
                            {banner_heading}
                        </h1>
                        <p className="text-sm md:text-xl" dangerouslySetInnerHTML={{ __html: banner_text }}>
                            {/* {banner_text} */}
                            {/* Top-rated car rental in Dubai. Low prices, great deals, convenient pick-up, top-notch service! */}
                        </p>
                    </div>
                </div>
                <div className="banner_SectionMainr">
                    <img src={banner_img} className="w-full relative mt-[6rem] h-full max-[1024px]:mt-[3rem]" alt="car image" />
                </div>
            </div>
        </section>


    )
}

export default Banner
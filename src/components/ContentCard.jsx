
import { backdrop } from "@/commonExports/images";
import Image from "next/image";

const ContentCard = ({ bannerData, allData, lang }) => {

    const { sec_one_heading, sec_one_textone, sec_one_textthree, sec_one_texttwo } = bannerData;

    return (
        <section className="common_Card relative overflow-hidden">

            <Image className={`absolute -z-50 ${lang == 'en' ? '-right-44' : '-left-44'} top-10 w-[380px] opacity-5 backdrop_palms`} src={backdrop} alt="backdrop_" id="backdrop_palms" />

            <div className="flex flex-col md:flex-row pt-12 md:pt-28 max-w-screen-lg w-full mx-auto px-4">
                {/* Left Section */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <p className="text_LeftTop text-xl md:text-3xl font-normal md:mr-8" dangerouslySetInnerHTML={{ __html: sec_one_heading }}>

                    </p>
                    <p className="text_LeftBottom text-[12px] text-justify md:mr-8 pt-4 text-gray-400 leading-6 md:leading-7" dangerouslySetInnerHTML={{ __html: sec_one_texttwo }}>

                    </p>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2">
                    <p className="text_RightTop text-[12px] text-justify text-gray-400 leading-6 md:leading-7" dangerouslySetInnerHTML={{ __html: sec_one_textone }}>

                    </p>

                    <div className="right_BottomBox bg-[#F4F9FE] mt-4 p-5 rounded-md">
                        <p className="text_RightBottom text-[12px] text-justify text-secondary leading-7 italic font-medium md:leading-7" dangerouslySetInnerHTML={{ __html: sec_one_textthree }}>

                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContentCard
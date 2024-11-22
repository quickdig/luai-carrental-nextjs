import banner_car from "../../src/public/assets/banner_img.png";
import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative banner_Section">
            <div className="relative flex items-center justify-center bg-cover bg-center h-[30rem] w-full top__BannerBack">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-screen-lg p-4 sm:p-8">
                    {/* Text Section */}
                    <div className="text-white max-w-lg space-y-6">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Experience Dubai <br /> on four wheels <br /> with us!
                        </h1>
                        <p className="text-sm md:text-xl">
                            Top-rated car rental in Dubai. Low prices, great deals, convenient pick-up, top-notch service!
                        </p>
                    </div>

                    {/* Image Section with Red Triangle */}
                    <div className="relative flex-shrink-0 mt-8 sm:mt-0 sm:ml-8 lg:mr-0">
                        {/* Red Triangle Background */}
                        {/* <div className="absolute inset-0 right-0 -z-10 w-full h-full flex justify-center items-center">
                            <div
                                className="w-full -ml-[120px] h-[120%] md:w-[150%] md:h-[204%] 
                                bg-red-600 opacity-40 clip-triangle"
                            ></div>

                        </div>

                        <div className="absolute inset-0 -z-10 w-full h-full flex justify-center items-center">
                            <div
                                className="w-full -mr-[194px] h-[120%] md:w-[150%] md:h-[204%] 
                                bg-red-600 opacity-90 clip-triangle-2"
                            ></div>

                        </div> */}

                        {/* Car Image */}
                        <Image
                            src={banner_car}
                            alt="Car rental"
                            className="w-72 md:w-96 lg:w-[30rem] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Banner
"Use Client"
import Image from "next/image"
import carImage from "../../../src/public/assets/aboutus-img1.jpg"
import Button from "@/components/Button"
import ACommonCard from "@/components/ACommonCard"
import EcllipseOne from "../../../src/public/assets/ecllipsOne.png";
import EcllipseTwo from "../../../src/public/assets/ecllipsTwo.png";
import EcllipseThree from "../../../src/public/assets/ecllipsThree.png";
import EcllipseFour from "../../../src/public/assets/ecllipsFour.png";
import EcllipseFive from "../../../src/public/assets/ecllipsFive.png";
import Brands from "@/components/Brands"
import bOne from "../../../src/public/assets/car-brands/chevrolet.png";
import bTwo from "../../../src/public/assets/car-brands/mazda.svg";
import bThree from "../../../src/public/assets/car-brands/honda.png";
import bFour from "../../../src/public/assets/car-brands/bmw.webp";
import bFive from "../../../src/public/assets/car-brands/mg.png";
import bSix from "../../../src/public/assets/car-brands/rr.png";
import bSeven from "../../../src/public/assets/car-brands/toyota.png";
import bEight from "../../../src/public/assets/car-brands/kia.svg";
import Breadcrumb from "@/components/Breadcrumb"

const page = () => {
    return (
        <>
            <div className="relative aboutus__Back flex items-center justify-center bg-cover bg-no-repeat bg-center h-60 sm:h-80 md:h-96 lg:h-[15rem] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="relative z-10 flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center text-center md:text-left">
                    <div className="text-white space-y-4 sm:space-y-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            About Us
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-md font-medium">
                            Top-rated car rental in Dubai. Low prices, great deals, <br /> convenient pick-up, top-notch service!
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row max-w-screen-lg w-full mt-10 mx-auto items-center">
                <Breadcrumb linkOne={"Home"} linkTwo={"About Us"} />
            </div>
            <div className="relative z-10 flex flex-col max-w-screen-lg w-full mx-auto items-center">
                <div className="flex flex-col lg:flex-row justify-between items-center sm:px-6 lg:px-0">

                    <div className="w-full lg:w-1/2 mt-6 lg:mt-10 sm:mx-2 md:mx-2 sm:px-2 md:px-2 px-2 lg:px-0 lg:mx-0">
                        <Image
                            src={carImage}
                            className="rounded-md ml-0 h-[20rem] sm:h-[25rem] lg:h-[30rem] object-cover w-full max-w-[25rem] mx-auto"
                            alt="car_image"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 lg:mt-0 sm:mx-2 md:mx-2 sm:px-2 md:px-2 px-2 lg:mx-0 lg:px-0">
                        <div className="flex flex-col ml-0">
                            <h4 className="text-2xl sm:text-3xl font-semibold leading-tight text-center lg:text-left">
                                Experience the Best Car <i className="font-semibold">Rental Service</i> in{" "}
                                <span className="font-semibold">Dubai</span> with Luaidrive
                            </h4>

                            <p className="text-[#707070] text-sm sm:text-md my-4 text-justify">
                                Haladrive is a premier car rental service in Dubai that offers a wide range of rental vehicles for any occasion or destination. Our network of unique vehicles gives you access to everything from economy cars for daily commuting to SUVs for long journeys.
                            </p>

                            <p className="text-[#707070] text-sm sm:text-md mb-4 text-justify">
                                At Haladrive, we prioritize convenience, comfort, and safety. Our vehicles are maintained to the highest standards and undergo regular checks to ensure optimal performance. We also provide 24/7 customer support and roadside assistance to ensure a smooth and stress-free rental experience.
                            </p>

                            <p className="italic text-sm sm:text-md mb-6 text-justify">
                                Experience the best car rental service in Dubai with Haladrive. Contact us today to learn more and{" "}
                                <b>book your rental vehicle.</b>
                            </p>
                        </div>

                        <Button
                            text={"Start Your Journey"}
                            type={"submit"}
                            style={
                                "bg-secondary hover:bg-primary uppercase text-center text-white font-medium py-2 px-4 rounded inline-flex items-center mx-auto lg:mx-0"
                            }
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-col bg-[#F1F4F8] mx-auto w-full px-4 sm:px-8 py-20 mt-10">
                <div className="flex flex-wrap items-center justify-between w-full mx-auto max-w-screen-lg">
                    <ACommonCard />
                    <ACommonCard />
                    <ACommonCard />
                    <ACommonCard />
                </div>
            </div>

            <div className="relative bottom-0 flex items-center justify-start bg-cover bg-no-repeat bg-center h-auto sm:h-[28rem] md:h-[28rem] mb-10 w-full footer__LowerBack">

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/60"></div>

                <div className="relative z-10 flex flex-col p-6 sm:p-8 md:p-10 max-w-screen-lg w-full mx-auto space-y-6">

                    <div className="text-white space-y-4">
                        <h1 className="text-1xl sm:text-3xl font-light leading-snug text-center sm:text-left">
                            <i className="font-bold">More Than 45,000</i> People Have <br /> Trusted Luaidrive
                        </h1>
                        <p className="text-sm sm:text-md lg:text-sm lg:leading-6 leading-6 font-light text-justify">
                            We offer premier car rental services with the best high-end and inexpensive vehicles. Our service guarantees convenience, smooth journeys, and the best deals on rental vehicles and services. Enjoy a spectacular car hire experience in Dubai Marina.
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


            <div className="flex justify-center m-0 p-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 max-w-screen-lg lg:grid-cols-8 gap-5 p-5 mt-0 w-full">
                    <Brands icon={bOne} />
                    <Brands icon={bTwo} />
                    <Brands icon={bThree} />
                    <Brands icon={bFour} />
                    <Brands icon={bFive} />
                    <Brands icon={bSix} />
                    <Brands icon={bSeven} />
                    <Brands icon={bEight} />
                </div>
            </div>

        </>
    )
}

export default page
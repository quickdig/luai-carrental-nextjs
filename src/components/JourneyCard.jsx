import list_icon from "../../src/public/assets/tick-inside-circle.png";
import Button from './Button';
import journeyImage from "../../src/public/assets/journey_img1.png"
import Image from "next/image";
import { keywords } from "../../dataset";
import Link from "next/link";

const JourneyCard = ({ section, sectionData, lang }) => {

    const basePath = lang === "en" ? '' : `${lang}/`;

    return (
        <section className={`journey_${section} relative mt-16`}>
            <div className="flex flex-col lg:flex-row justify-between max-w-screen-lg w-full gap-6 mx-auto items-center lg:px-0" id={section}>
                {/* Left Section */}
                <div className="w-full lg:w-4/5">
                    <div className="px-0 space-y-2">
                        <h3 className="text-2xl lg:text-3xl text-center lg:text-left" dangerouslySetInnerHTML={{ __html: sectionData.Heading }}>
                            {/* <b>Money-Saving</b> Car Rental Deals Dubai to Begin an Exciting Journey */}
                        </h3>
                        <p className="text-[12px] leading-6 text-[#707070] text-justify my-2" dangerouslySetInnerHTML={{ __html: sectionData.Text }}>
                            {/* Our priority is to offer reasonably priced car rental deals in Dubai that provide comfort and safety. We provide fantastic deals for car rental services, each justifying its cost. Our monthly rates for car rental in Dubai are beyond expectations. */}
                        </p>

                        <ul className="list-none flex-row space-y-3 list-inside pb-10">
                            {
                                sectionData.Points?.map((item, idx) => {
                                    return (
                                        <li className="flex items-center text-xs gap-2 font-semibold" key={idx}>
                                            <Image src={list_icon} alt="list_item" width={15} />
                                            {item}
                                        </li>
                                    )
                                })
                            }
                            {/* <li className="flex items-center text-xs gap-2 font-semibold">
                                <Image src={list_icon} alt="list_item" width={15} />
                                Our company offers reasonably priced car rental deals in Dubai prioritizing comfort and safety.
                            </li>

                            <li className="flex items-center text-xs gap-2 font-semibold">
                                <Image src={list_icon} alt="list_item" width={15} />
                                We provide fantastic deals that justify their cost and are light on the pocket.
                            </li>

                            <li className="flex items-center text-xs gap-2 font-semibold">
                                <Image src={list_icon} alt="list_item" width={15} />
                                Our car rental Dubai monthly rates exceed expectations.
                            </li> */}
                        </ul>

                        <Link href={`${basePath}cars`} className="bg-secondary hover:bg-primary uppercase text-center text-white font-medium rounded inline-flex items-center">
                            <Button
                                text={lang == 'en' ? keywords.buttonText.start_journey.en : keywords.buttonText.start_journey.ar}
                                type={"submit"}
                                style={
                                    "bg-secondary hover:bg-primary block uppercase text-center text-white font-medium py-2 px-4 rounded inline-flex items-center"
                                }
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-3/6 mb-8 lg:mb-0 sm:mt-5 xs:mt-5">
                    <div className="relative w-full overflow-hidden group rounded-md">
                        <img
                            src={sectionData.image}
                            className="w-full h-[18rem] lg:h-[22rem] object-cover"
                            alt="journey_image"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default JourneyCard
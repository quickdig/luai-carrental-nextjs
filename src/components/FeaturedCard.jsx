
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import { languageData } from "../../dataset";
import Button from "./Button";
import CarCard from "./CarCard";
import { useContext } from "react";

const FeaturedCard = ({ featuredData, lang }) => {
    const { langValue } = useContext(MainLanguageValueContext);
    return (
        <section className="featured_Card relative">
            <div className="flex flex-col justify-center max-w-screen-lg mt-20 w-full mx-auto bg-[#F2F2F2]">
                <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center lg:justify-between md:justify-center px-16 mt-5">
                    <span className="text-xl font-semibold text-left">{languageData[langValue]["Explore the Car Range"]}</span>
                    {/* <Button
                        text={languageData[langValue]["Search"]}
                        type={"submit"}
                        style={
                            "bg-secondary hover:bg-primary text-center text-white font-medium py-2 px-4 rounded inline-flex items-center"
                        }
                    /> */}
                </div>

                <div className="flex flex-wrap lg:flex-wrap justify-center gap-2 my-4">
                    {
                        featuredData?.map((item, idx) => {
                            const { id, slug, image, name, price_daily, price_weekly, price_monthly, model } = item
                            return (
                                <CarCard lang={lang} key={idx} id={id} slug={slug} image={image} rating={5} title={name} daily={price_daily} weekly={price_weekly} monthly={price_monthly} btnText={languageData[langValue]["Book Ride"]} model={model} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedCard;

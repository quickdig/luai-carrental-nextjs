
import { keywords } from "../../dataset";
import Button from "./Button";
import CarCard from "./CarCard";

const FeaturedCard = ({ featuredData, lang }) => {
    return (
        <section className="featured_Card relative">
            <div className="flex flex-col justify-center max-w-screen-lg mt-20 w-full mx-auto bg-[#F2F2F2]">
                <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center lg:justify-between md:justify-center px-16 mt-5">
                    <span className="text-xl font-semibold text-left">{lang == 'en' ? keywords.commonText.feature_card.header.en : keywords.commonText.feature_card.header.ar}</span>
                    <Button
                        text={lang == 'en' ? keywords.buttonText.search.en : keywords.buttonText.search.ar}
                        type={"submit"}
                        style={
                            "bg-secondary hover:bg-primary text-center text-white font-medium py-2 px-4 rounded inline-flex items-center"
                        }
                    />
                </div>

                <div className="flex flex-wrap lg:flex-wrap justify-center gap-2 my-4">
                    {
                        featuredData?.map((item, idx) => {
                            return (
                                <CarCard lang={lang} key={idx} id={item.id} slug={item.slug} image={item.image} rating={5}
                                    title={item.name} daily={item.price_daily} weekly={item.price_weekly} monthly={item.price_monthly} btnText={lang == 'en' ? keywords.buttonText.book_ride.en : keywords.buttonText.book_ride.ar} />
                            )
                        })
                    }
                    {/* <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard /> */}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCard;

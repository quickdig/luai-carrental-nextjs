
import Button from "./Button";
import CarCard from "./CarCard";

const FeaturedCard = () => {
    return (
        <section className="featured_Card relative">
            <div className="flex flex-col justify-center max-w-screen-lg mt-20 w-full mx-auto bg-[#F2F2F2]">
                <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center lg:justify-between md:justify-center px-16 mt-5">
                    <span className="text-xl font-semibold text-left">Explore the Car Range</span>
                    <Button
                        text={"Search"}
                        type={"submit"}
                        style={
                            "bg-secondary hover:bg-primary text-center text-white font-medium py-2 px-4 rounded inline-flex items-center"
                        }
                    />
                </div>

                <div className="flex flex-wrap lg:flex-wrap justify-center gap-2 my-4">
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                </div>
            </div>
        </section>
    );
};

export default FeaturedCard;

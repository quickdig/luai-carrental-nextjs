
import Button from "./Button";
import CarCard from "./CarCard";

const FeaturedCard = () => {
    return (
        <section className="featured_Card relative">
            <div className="flex flex-col justify-center max-w-screen-lg mt-20 w-full mx-auto bg-[#F2F2F2]">
                <div className="flex flex-col justify-between md:flex-row px-5 md:pt-5 max-w-screen-lg w-full mx-auto">
                    <span>Explore the Car Range</span>
                    <Button
                        text={"Search"}
                        type={"submit"}
                        style={
                            "bg-secondary hover:bg-primary text-center text-white font-medium py-2 px-4 rounded inline-flex items-center"
                        }
                    />
                </div>

                <div className="flex flex-col md:flex-row p-4 max-w-screen-lg w-full mx-auto items-center">
                    <div className="md:w-1/3 w-full mr-5">
                        <CarCard />
                    </div>
                    <div className="md:w-1/3 w-full mr-5">
                        <CarCard />
                    </div>

                    <div className="md:w-1/3 w-full">
                        <CarCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCard;

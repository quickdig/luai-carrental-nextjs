

const ContentCard = () => {
    return (
        <section className="common_Card relative">
            <div className="flex flex-col md:flex-row pt-12 md:pt-28 max-w-screen-lg w-full mx-auto px-4">
                {/* Left Section */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <p className="text_LeftTop text-xl md:text-3xl font-normal md:mr-8">
                        Unlock Your Next Adventure with Trusted <b>Car Rental Services</b> in Dubai
                    </p>
                    <p className="text_LeftBottom text-sm text-justify md:mr-8 pt-4 text-gray-400 leading-6 md:leading-7">
                        If you are searching for a reasonable and highly convenient service for car rental Dubai, find no more! The best company for car rental service offers reliable vehicles for your transport requirements. Based on a variety of cars, from opulent to brands like BMW, Mercedes, Audi and more, we are sure to give you the perfect vehicle to cater to your criteria. Our company is offering many special deals on our vehicles, and you will benefit a lot from the experience of travel. Whether you are heading to the city for work or pleasure; our company has plenty of options to turn your trip great for all the right reasons.
                    </p>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2">
                    <p className="text_RightTop text-sm text-justify text-gray-400 leading-6 md:leading-7">
                        We are focused on giving you the best journey precisely the way you want. The diligent and friendly team is highly professional, ensuring you an unforgettable time exploring the city. Additionally, the car rentals rent rates are highly competitive to let you get the most from your money. So, why wait? Reach us now and be prepared to collect memories!
                    </p>

                    <div className="right_BottomBox bg-[#F4F9FE] mt-4 p-4 rounded-md">
                        <p className="text_RightBottom text-justify text-secondary italic font-semibold leading-6 md:leading-7">
                            We understand that finding a car rental Dubai cheap and become confusing and complicated in case one is unaware things to search for how this process works. This is why our diligent team is always giving answers to numerous queries and guiding through the entire process. From selecting the wanted car to providing tips on insurance policies, the team try their best to provide you excellent car hire Dubai experience which is free from stress..
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContentCard
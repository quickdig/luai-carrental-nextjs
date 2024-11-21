import Image from 'next/image'
import React from 'react'

const FaqCard = ({ idx, question, answer }) => {
    return (
        <div className="w-full mx-auto">

            <div className="w-full px-4 sm:px-6 md:px-6">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <h4 className="flex items-center font-bold text-lg lg:text-xl sm:text-xl md:text-2xl text-secondary leading-6">
                            <span className="mr-4 text-lg sm:text-xl md:text-2xl font-bold text-[#3C3C4380]">
                                {idx}
                            </span>
                            {question}
                        </h4>
                    </div>
                    <button
                        aria-label="toggler"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        data-menu=""
                    >
                        <Image
                            className="transform"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                            width={30}
                            height={30}
                            alt="toggler"
                        />
                        <Image
                            className="transform hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                            width={30}
                            height={30}
                            alt="toggler"
                        />
                    </button>
                </div>
                <div id="menu" className="hidden mt-3 w-full px-4 sm:px-8 md:px-12">
                    <p className="text-sm sm:text-base leading-6 text-gray-600 font-normal">
                        Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum
                        quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est
                        a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum
                        quis eu. Ut commodo, eget lorem venenatis urna.
                    </p>
                </div>
            </div>
            <hr className="w-full my-6 sm:my-8 lg:mt-10" />
        </div>
    )
}

export default FaqCard
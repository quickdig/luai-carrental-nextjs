"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";


const FaqCard = ({ idx, question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen)


    return (
        <div className="w-full mx-auto">

            <div className="w-full px-4 sm:px-6 md:px-6">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <h4 className="flex items-center font-bold text-lg lg:text-xl sm:text-xl md:text-2xl text-secondary leading-6">
                            <span className="mr-4 text-lg sm:text-xl md:text-2xl font-bold text-[#3C3C4380]">
                                {idx < 10 ? '0' + idx : idx}&nbsp;
                            </span>
                            {question}
                        </h4>
                    </div>
                    <button
                        aria-label="toggler"
                        onClick={handleOpen}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        data-menu=""
                    >
                        {
                            isOpen ? (
                                <BsChevronUp
                                    size={25}
                                />
                            ) :
                                (
                                    <BsChevronDown
                                        size={25}
                                    />
                                )
                        }

                    </button>
                </div>
                {
                    isOpen && (
                        <div id="menu" className="block mt-3 w-full px-4 sm:px-8 md:px-12">
                            <p className="text-sm sm:text-base leading-6 text-gray-600 font-normal">
                                {answer}
                            </p>
                        </div>
                    )
                }

            </div>
            <hr className="w-full my-6 sm:my-8 lg:mt-10" />
        </div>
    )
}

export default FaqCard
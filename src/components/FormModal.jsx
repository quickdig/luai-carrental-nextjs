"use client"

import React, { useEffect, useState } from "react";
import Button from "./Button";

const FormModal = ({ setOpenTrue }) => {

    // Modal Form Open
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div
                className="bg-white p-6 rounded shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl mx-4"
            >
                <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
                    Book Ride
                </h2>

                <form action="#" className="w-full">
                    <div className="grid gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="number"
                                placeholder="Your Number"
                                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="date"
                                name="date_from"
                                placeholder="From"
                                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                            />
                            <input
                                type="date"
                                name="date_to"
                                placeholder="To"
                                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                        ></textarea>
                    </div>
                    <div className="mt-6 text-right">
                        <Button
                            text="Submit"
                            type="submit"
                            style="bg-secondary hover:bg-[#c9281a] text-white text-sm md:text-base lg:text-md py-1 px-4 md:px-6 rounded uppercase font-medium"
                        />
                    </div>
                </form>

                <div className="mt-4 flex justify-start">
                    <button
                        onClick={() => setOpenTrue(false)}
                        className="bg-red-500 text-white px-4 py-1 text-sm rounded w-full sm:w-auto"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>


    )
}

export default FormModal
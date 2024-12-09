"use client"
import React, { useEffect, useState } from 'react'
import Brands from './Brands'
import useFetch from '@/app/customHooks/useFetch';

const BrandCarousel = ({ lang }) => {

    const [brandI, setBrandI] = useState("");
    const brandImages = useFetch(`brands/all/${lang}`);

    useEffect(() => {
        if (brandImages) {
            setBrandI(brandImages?.data?.data)
        }
    }, [brandImages]);

    return (

        <div className="brand_logo_container flex justify-center m-0 p-0 w-full overflow-hidden">
            <div
                className="brand_logo_slider flex flex-row animate-slide p-5 mt-0"
                style={{ animation: "scroll 20s linear infinite" }}
            >
                {
                    Array.isArray(brandI) &&
                    brandI.map((item, idx) => (
                        <Brands key={idx} icon={item.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default BrandCarousel
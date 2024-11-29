import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ date, image, title, style, headerStyle, dateStyle, slug }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = date.getDate();
        const ordinalSuffix =
            day % 10 === 1 && day !== 11
                ? "st"
                : day % 10 === 2 && day !== 12
                    ? "nd"
                    : day % 10 === 3 && day !== 13
                        ? "rd"
                        : "th";

        const month = date.toLocaleString("default", { month: "long" });

        return `${day}${ordinalSuffix} ${month}`;
    }

    return (
        <div>
            <div
                className={`${style}`}
                style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
                <img
                    src={image}
                    alt="Car"
                    className="rounded-md object-cover"
                />
                <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

                <span className={`${dateStyle}`}>{formatDate(date)}</span>
                <Link href={`/blog/${slug}`} className={`${headerStyle}`}>{title}</Link>
            </div>
        </div>
    )
}

export default BlogCard
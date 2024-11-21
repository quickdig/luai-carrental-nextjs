import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ date, image, title, style, headerStyle, dateStyle }) => {
    return (
        <div>
            <div
                className={`${style}`}
                style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
                <Image
                    src={image}
                    alt="Car"
                    className="rounded-md object-cover"
                />
                <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

                <span className={`${dateStyle}`}>{date}</span>
                <Link href="#" className={`${headerStyle}`}>{title}</Link>
            </div>
        </div>
    )
}

export default BlogCard
import BlogCard from './BlogCard'
import img1 from "../../src/public/assets/bImageOne.jpg"
import img2 from "../../src/public/assets/bImageTwo.jpg"
import img3 from "../../src/public/assets/bImageThree.jpg"
import img4 from "../../src/public/assets/bImageFour.jpg"
import img5 from "../../src/public/assets/bImageFive.jpg"
import Button from './Button'
import { keywords } from '../../dataset'

const BlogContainer = ({ blogData, lang }) => {
    return (
        <section className="blog_Container relative mt-10">
            <div className="main__container h-[50rem] md:h-[35rem] lg:h-[33rem] sm:h-[55rem] bg-gradient-to-r from-[#BABBBD]/80 to-[#A7A9AB]/20">
                {/* Corner Triangles */}
                <div className="group">
                    <div className="absolute top-0 right-0 w-0 h-0 z-10 border-solid border-t-0 border-r-[110px] border-b-[60px] border-l-0 border-transparent border-r-[#FF4532]"></div>
                    <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-0 border-r-[128px] border-b-[70px] border-l-0 border-transparent border-r-[#ffffff]"></div>
                </div>

                <div className="group">
                    <div className="absolute bottom-0 left-0 w-0 h-0 z-10 border-solid border-t-0 border-r-[110px] border-b-[60px] border-l-0 border-transparent border-r-[#FF4532] rotate-180"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-solid border-t-0 border-r-[128px] border-b-[70px] border-l-0 border-transparent border-r-[#ffffff] rotate-180"></div>
                </div>

                {/* Header Section */}
                <div className="text_area">
                    <div className="flex flex-col justify-center max-w-screen-lg w-full mx-auto px-4">
                        <h4 className="text-left text-2xl md:text-3xl mt-8" dangerouslySetInnerHTML={{ __html: lang == 'en' ? keywords.commonText.blogs.header.en : keywords.commonText.blogs.header.ar }}>
                            {/* Our <b>Blogs</b> */}
                            {/* {lang == 'en' ? keywords.commonText.blogs.header.en : keywords.commonText.blogs.header.ar} */}
                        </h4>
                    </div>
                </div>

                {/* Blog Cards Section */}
                <div className="blog_cardArea mt-0 md:mt-5">
                    <div className="flex flex-col justify-center items-center max-w-screen-lg w-full mx-auto px-4">
                        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6 mt-8 w-full">

                            {/* First Column */}
                            <div className="first_col col-span-1 lg:col-span-1 rounded-md">
                                <div className="first_card relative">
                                    <BlogCard
                                        dateStyle="bg-white text-sm px-2 py-1 absolute top-3 left-3 rounded-full"
                                        headerStyle="absolute bottom-4 text-xl text-white text-justify px-5 font-medium line-clamp-2 hover:underline"
                                        style="w-full h-[18rem] bg-cover object-contain bg-center rounded-md flex relative"
                                        image={blogData[0].image}
                                        date={blogData[0].created_at}
                                        title={blogData[0].Title}
                                        slug={blogData[0].slug}
                                    />
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="sec_col col-span-1 lg:col-span-1 rounded-md">
                                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                                    {/* Smaller Blog Cards */}
                                    <div className="sec_card col-span-2 rounded-md relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-md text-white text-justify px-5 font-medium line-clamp-2 hover:underline"
                                            style="w-full h-[8.5rem] bg-cover object-contain bg-center rounded-md flex relative"
                                            image={blogData[1].image}
                                            date={blogData[1].created_at}
                                            title={blogData[1].Title}
                                            slug={blogData[1].slug}
                                        />
                                    </div>

                                    <div className="third_card col-span-1 rounded-md relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-xs text-white text-left px-5 font-medium line-clamp-2 hover:underline"
                                            style="w-full h-[8.5rem] bg-cover object-contain bg-center rounded-md flex relative"
                                            image={blogData[2].image}
                                            date={blogData[2].created_at}
                                            title={blogData[2].Title}
                                            slug={blogData[2].slug}
                                        />
                                    </div>

                                    <div className="forth_card col-span-1 rounded-md mt-5 lg:mt-0 relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-xs text-white text-left px-5 font-medium line-clamp-2 hover:underline"
                                            style="w-full h-[8.5rem] bg-cover object-contain bg-center rounded-md flex relative"
                                            image={blogData[3].image}
                                            date={blogData[3].created_at}
                                            title={blogData[3].Title}
                                            slug={blogData[3].slug}
                                        />
                                    </div>

                                    <div className="five_card col-span-2 rounded-md mt-5 lg:mt-0 relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-md text-white text-justify px-5 font-medium line-clamp-2 hover:underline"
                                            style="w-full h-[8.5rem] bg-cover object-contain bg-center rounded-md flex relative"
                                            image={blogData[4].image}
                                            date={blogData[4].created_at}
                                            title={blogData[4].Title}
                                            slug={blogData[4].slug}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Button
                    text={"Blogs"}
                    type={"submit"}
                    style={
                        "bg-black hover:bg-primary uppercase mt-6 lg:mt-10 text-center text-white font-medium py-3 px-6 rounded inline-flex items-center"
                    }
                /> */}
            </div>
        </section>

    )
}


export default BlogContainer
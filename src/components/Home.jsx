"use client"
import React, { useEffect } from 'react'
import Banner from './Banner'
import SearchBox from './SearchBox'
import ContentCard from './ContentCard'
import FeaturedCard from './FeaturedCard'
import JourneyCard from './JourneyCard'
import JourneyBanner from './JourneyBanner'
import BlogContainer from './BlogContainer'
import ReasonList from './ReasonList'
import useFetch from '@/app/customHooks/useFetch'
import PreLoader from './PreLoader'

const Home = ({ param, lang }) => {

    const { loading, data } = useFetch(`home_content/${lang}`);

    useEffect(() => {
        console.log(param)
    }, [])

    if (loading) return <PreLoader />;
    const alldata = data?.data
    const { bannerContent, featuredContent, sectionContent, blogContent } = data?.data
    return (
        <div>
            <Banner bannerData={bannerContent} allData={alldata} />
            <SearchBox lang={lang} />
            <ContentCard bannerData={bannerContent} allData={alldata} />
            <FeaturedCard lang={lang} featuredData={featuredContent} />
            <JourneyCard lang={lang} sectionData={sectionContent.section_one} section={"CardOne"} />
            <JourneyCard lang={lang} sectionData={sectionContent.section_two} section={"CardTwo"} />
            <JourneyBanner lang={lang} sectionData={sectionContent.section_three} />
            <JourneyCard lang={lang} sectionData={sectionContent.section_four} section={"CardThree"} />
            <BlogContainer lang={lang} blogData={blogContent} />
            <ReasonList lang={lang} />
        </div>
    )
}

export default Home
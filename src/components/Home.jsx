import React from 'react'
import Banner from './Banner'
import SearchBox from './SearchBox'
import ContentCard from './ContentCard'
import FeaturedCard from './FeaturedCard'
import JourneyCard from './JourneyCard'
import JourneyBanner from './JourneyBanner'
import BlogContainer from './BlogContainer'
import ReasonList from './ReasonList'

const Home = ({ param, lang }) => {
    return (
        <div>
            <Banner />
            <SearchBox />
            <ContentCard />
            <FeaturedCard />
            <JourneyCard section={"CardOne"} />
            <JourneyCard section={"CardTwo"} />
            <JourneyBanner />
            <JourneyCard section={"CardThree"} />
            <BlogContainer />
            <ReasonList />
        </div>
    )
}

export default Home
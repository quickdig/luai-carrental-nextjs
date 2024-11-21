import Banner from "@/components/Banner";
import BlogContainer from "@/components/BlogContainer";
import ContentCard from "@/components/ContentCard";
import FeaturedCard from "@/components/FeaturedCard";
import JourneyBanner from "@/components/JourneyBanner";
import JourneyCard from "@/components/JourneyCard";
import ReasonList from "@/components/ReasonList";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";

export default function Home() {
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
  );
}

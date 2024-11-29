import Banner from "@/components/Banner";
import BlogContainer from "@/components/BlogContainer";
import ContentCard from "@/components/ContentCard";
import FeaturedCard from "@/components/FeaturedCard";
import Home from "@/components/Home";
import JourneyBanner from "@/components/JourneyBanner";
import JourneyCard from "@/components/JourneyCard";
import ReasonList from "@/components/ReasonList";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";

export async function generateMetaData({ params }) {
  const { lang } = params;
}

export default function page({ params }) {

  const { lang } = params;
  return (
    <div>
      <Home lang={lang} />
    </div>
  );
}

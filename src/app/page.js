
import Home from "@/components/Home";
import axios from "axios";
import config from "../app/services/config.json";

export async function generateMetaData({ params }) {
  const { lang } = params;
}

export async function generateStaticParams() {
  // Define all possible language codes
  const languages = ['en', 'ar'];

  // Generate the paths for each language
  const paths = languages.map((lang) => ({ lang }));

  console.log(paths);
  return paths;
}

const page = ({ params }) => {
  const { lang } = params;



  return (
    <>
      <Home lang={lang ?? 'en'} />
    </>
  );
};

export default page;

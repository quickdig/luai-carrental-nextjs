
import Home from "@/components/Home";




export async function generateMetadata({ params }) {
  const { lang } = params; // Default to 'en' if lang is missing

  try {
    // const response = await axios.get(`${config.apiEndPoint}home_content/${lang}`);
    // const data = response.data?.data;

    // return {
    //   title: data?.meta_tag || "luai",
    //   description: data?.meta_description || "luai",
    // };
  } catch (error) {
    // console.error('Error fetching product data:', {
    //   message: error.message,
    //   status: error.response?.status,
    //   data: error.response?.data,
    // });
    // return {
    //   title: 'luai',
    //   description: 'Default description for luai',
    // };
  }
}

export async function generateStaticParams() {
  const languages = ['en', 'ar'];
  const paths = languages.map((lang) => ({ lang }));
  console.log("Static Params:", paths);
  return paths;
}

export default function page({ params }) {
  const { lang } = params;
  return (
    <div>
      <Home lang={lang} />
    </div>
  );
}

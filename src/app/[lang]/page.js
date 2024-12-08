import Home from "@/components/Home";
import config from "../services/config.json"
import axios from "axios";

export async function generateMetaData({ params }) {
  const { lang } = params;

  try {

    const response = await axios.get(`${config.apiEndPoint}meta_content/${lang}`);
    const data = response?.data?.data;

    console.log(response);

    return {
      title: data?.home?.seo_title || "Excellent automobile rental in Dubai | Rent or Hire an automobile for AED 70 | Best Car Leasing",
      description: data?.home?.seo_brief || "One of the top automobile rental firms in Dubai offers cars for AED 70. Renting a car in Dubai with LUAI Drive allows you to benefit from amazing deals and affordable rental car costs. Well-located pick-up points and first-rate customer support will make your rental experience simple and relaxing."
    }

  } catch (error) {
    console.error('Error fetching', error);
    return {
      title: 'Excellent automobile rental in Dubai | Rent or Hire an automobile for AED 70 | Best Car Leasing',
    };
  }
}

export default function page({ params }) {

  const { lang } = params;
  return (
    <div>
      <Home lang={lang} />
    </div>
  );
}

import Image from "next/image"

const Brands = ({ icon }) => {
    return <Image src={icon} className="w-auto h-[40px] block mx-auto" alt="ss" />
}

export default Brands
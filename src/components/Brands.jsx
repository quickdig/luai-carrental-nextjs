import Image from "next/image"

const Brands = ({ icon }) => {
    return (
        <div className="w-full h-full bg-cover bg-center cursor-pointer rounded-lg relative">
            <img
                src={icon}
                alt="brand_icon"
                className="rounded-lg p-2 object-contain object-center w-full h-full mx-2"
            />
        </div>
    )
    // return <img src={icon} className="w-auto h-[40px] block mx-auto" alt="brand_icon" />
}

export default Brands
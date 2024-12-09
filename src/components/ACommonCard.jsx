
const ACommonCard = ({ icon, title, desc }) => {
    return (
        <div className='flex flex-col justify-center items-center py-5 px-3 w-full sm:w-[13rem] border-[.5px] bg-white border-gray-300 rounded-md'>
            <img src={icon} alt="icon_img" className="inline-block w-[30px] object-contain" />
            <p className="font-semibold text-sm mb-2 mt-2 text-center">{title}</p>
            <p className='text-sm sm:text-md text-center leading-6 text-[#707070] ar_text_center'>
                {desc}
            </p>
        </div>
    )
}

export default ACommonCard
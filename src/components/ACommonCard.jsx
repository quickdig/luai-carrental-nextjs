

const ACommonCard = ({ icon, title, desc }) => {
    return (
        <div className='flex flex-col justify-center items-center py-10 px-3 w-full sm:w-[13rem] border-[.5px] bg-white border-gray-300 rounded-md'>
            <img src={icon} alt="icon_img" className="inline-block mb-2 w-[40px] object-contain" />
            <p className="font-semibold text-[18px] mb-2 px-3 text-center">{title}</p>
            <p className='text-[14px] sm:text-sm text-center text-[#707070]'>
                <img src={icon} alt="icon_img" className="inline-block w-[100px] object-contain" />
                <p className="font-semibold text-lg sm:text-xl mb-2 px-3 text-center">{title}</p>
                <p className='text-sm sm:text-md text-center text-[#707070] ar_text_center'>
                    {desc}
                </p>
            </p>
        </div>
    )
}

export default ACommonCard
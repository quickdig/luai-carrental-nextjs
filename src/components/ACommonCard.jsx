

const ACommonCard = ({ icon, title, desc }) => {
    return (
        <div className='flex flex-col justify-center items-center py-10 px-3 w-full sm:w-[13rem] border-[.5px] bg-white border-gray-300 rounded-md'>
            <img src={icon} alt="icon_img" className="inline-block w-[100px] object-contain" />
            <p className="font-semibold text-lg sm:text-xl mb-2 px-3 text-center">{title}</p>
            <p className='text-sm sm:text-md text-center text-[#707070]'>
                {desc}
            </p>
        </div>
    )
}

export default ACommonCard
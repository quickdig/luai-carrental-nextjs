const ReasonCard = ({ icon, title, desc }) => {
    return (
        <div className='flex flex-col justify-center items-center p-3'>
            <span className="p-2 rounded-md text-primary mb-3 shadow shadow-[#fbc6c9]">
                <img src={icon} alt="reason_icon" width={25} height={25} />
            </span>
            <p className="font-medium mb-2">{title}</p>
            <p className='text-[12px] text-center text-[#707070] leading-6'>{desc}</p>
        </div>
    )
}

export default ReasonCard
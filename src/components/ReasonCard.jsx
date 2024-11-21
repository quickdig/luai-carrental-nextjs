import { SlKey } from "react-icons/sl";

const ReasonCard = ({ icon, title, desc }) => {
    return (
        <div className='flex flex-col justify-center items-center p-3'>
            <span className="p-3 rounded-md text-primary mb-3 shadow shadow-[#FFE4E6]">{icon}</span>
            <p className="font-medium mb-2">{title}</p>
            <p className='text-sm text-center text-[#707070]'>{desc}</p>
        </div>
    )
}

export default ReasonCard
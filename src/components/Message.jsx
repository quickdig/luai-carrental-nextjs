
const Message = ({ message }) => {
    return (
        <div className="flex flex-row justify-center items-center p-2 mt-5 bg-[#02990ad3] rounded-md border-[#1aff00d3]">
            <p className="text-white tracking-wide font-light">{message}</p>
        </div>
    )
}

export default Message
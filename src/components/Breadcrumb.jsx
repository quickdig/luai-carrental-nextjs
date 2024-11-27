import Link from "next/link"

const Breadcrumb = ({ linkOne, linkTwo, linkThree, linkFour }) => {
    return (
        <div className="flex flex-row text-[12px] lg:mx-auto md:ml-5 sm:ml-5 lg:flex-row justify-start max-w-screen-lg w-full mt-5 items-center ml-5">
            <span className="text-[#92AACB]"><Link href={"#"}>{linkOne}</Link>&nbsp; &gt; </span>
            <span className="text-primary">&nbsp;<Link href={"#"}>{linkTwo}</Link>&nbsp; &gt;</span>
            <span className="text-primary">&nbsp;<Link href={"#"}>{linkThree}</Link>&nbsp; &gt;</span>
            <span className="text-primary">&nbsp;<Link href={"#"}>{linkFour}</Link>&nbsp;</span>
        </div>
    )
}

export default Breadcrumb
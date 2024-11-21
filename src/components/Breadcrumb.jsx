import Link from "next/link"

const Breadcrumb = ({ linkOne, linkTwo, linkThree, linkFour }) => {
    return (
        <>
            <span className="text-[#92AACB]"><Link href={"#"}>{linkOne}</Link>&nbsp;-</span>
            <span className="text-primary">&nbsp;<Link href={"#"}>{linkTwo}</Link>&nbsp;-</span>
            <span className="text-primary">&nbsp;<Link href={"#"}>{linkThree}</Link>&nbsp;-</span>
            <span className="text-primary">&nbsp;<Link href={"#"}>{linkFour}</Link>&nbsp;</span>
        </>
    )
}

export default Breadcrumb
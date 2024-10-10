import Navbar2 from "@/components/Navbar2/index"
import Accordion from "@/components/ProdukCloud/Accordion/accproduk"
import ContentCard from "@/components/ProdukCloud/Content/contentcard"
const Page = () => {
    return (
        <>
        <Navbar2/>
        < div className="flex">
        <div className="w-1/4">
            <Accordion />
          </div>
<ContentCard/>
        </div>
        </>
    )
}

export default Page;
import Navbar from "@/components/Navbar"
import ProdukCloud from "@/components/Beranda/produkcloud"
import PortalCloud from "@/components/Beranda/portalcloud"
import Information from "@/components/Beranda/information"
import Questions from "@/components/Beranda/Questions/questions"
const Page = () => {
    return(
        <>
        <Navbar/>
        <ProdukCloud/>
        <PortalCloud/>
        <Information/>
        <Questions/>

        </>
    )
}

export default Page;
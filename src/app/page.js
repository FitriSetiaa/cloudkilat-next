import Navbar from "@/components/Navbar";
import ProdukCloud from "@/components/ProdukCloud";
import PortalCloud from "@/components/PortalCloud"
import Information from "@/components/Information";
import Questions from "@/components/Questions"
import Footer from "@/components/Footer"

const Page = () => {
    return (
        <>
            <Navbar />
            <PortalCloud/>
            <Information/> 
            <Questions/>
            <Footer/>
            
        </>
       
    );
};

export default Page;

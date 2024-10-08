import Navbar from "@/components/Navbar";
import ProdukCloud from "@/components/ProdukCloud";
import PortalCloud from "@/components/PortalCloud"
import Information from "@/components/Information";
import Questions from "@/components/Ques"
import Footer from "@/components/Footer"

const Page = () => {
    return (
        <>
            <Navbar />
            <ProdukCloud/>
            <PortalCloud/>
            <Information/> 
            <Questions/>
            <Footer/>
            
        </>
       
    );
};

export default Page;

import Navbar from "@/components/Navbar";
import ProdukCloud from "@/components/ProdukCloud";
import PortalCloud from "@/components/PortalCloud"
import Information from "@/components/Information";
import Questions from "@/components/Questions"


const Page = () => {
    return (
        <>
            <Navbar />
            <ProdukCloud/>
            <PortalCloud/>
            <Information/> 
            <Questions/>
           
            
        </>
       
    );
};

export default Page;

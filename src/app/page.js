import Navbar from "@/components/Navbar";
import PortalCloud from "@/components/PortalCloud";
import Information from "@/components/Information";
import Questions from "@/components/Questions";
import ProdukCloud from "@/components/ProdukCloud"

const Page = () => {
    return (
        <>
            <Navbar />
            <PortalCloud/>
            <Information/> 
            <Questions/>
            
        </>
       
    );
};

export default Page;

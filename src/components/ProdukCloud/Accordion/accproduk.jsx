import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  import Image from 'next/image';
  import AccordionPortal from "@/components/ProdukCloud/Accordion/accportal"
  
  const Sidebar = () => {
    return (
      <div className="w-64 p-8 border-x border-gray-200">
        <h2 className="text-md nunito mb-4 nunito font-semibold text-gray-500">PRODUK</h2>
  
        <Accordion type="single" collapsible>
          <AccordionItem value="kilat-vm">
            <AccordionTrigger className=" hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left ">
              <Image
                src="/images/kilatvm-logo.png"
                alt="Kilat VM 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-bold text-gray-500 border-0 hover:text-blue-600">Kilat VM 2.0</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
            
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="kilat-hosting">
            <AccordionTrigger className="hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/kilathosting-logo.png"
                alt="Kilat Hosting 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">Kilat Hosting 2.0</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
            
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="kilat-storage">
            <AccordionTrigger className="hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/kilatstorage-logo.png"
                alt="Kilat Storage"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">Kilat Storage</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Memulai Kilat Storage</p>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="kilat-protect">
            <AccordionTrigger className="hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/kilatprotect-logo.png"
                alt="Kilat Protect"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">Kilat Protect</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
            
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-5 pt-4  flex justify-between  border-t border-gray-200 items-center text-sm">
         
         </div>
  
      {/* KOMPONEN ACCORDION PORTAL */}
        <AccordionPortal/>
      </div>
    );
  };
  
  export default Sidebar;
  
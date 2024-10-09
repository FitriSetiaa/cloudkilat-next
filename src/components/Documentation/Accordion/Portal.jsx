import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  import Image from 'next/image';
  
  const Sidebar = () => {
    return (
      <>
        <h2 className="text-md nunito mb-4">PORTAL</h2>
  
        <Accordion type="single" collapsible>
          <AccordionItem value="kilat-vm">
            <AccordionTrigger className=" hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left ">
              <Image
                src="/images/documentation/accordion/pemesanan-icon.png"
                alt="Kilat VM 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 ">Kilat VM 2.0</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
              <p>Submenu 2</p>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="kilat-hosting">
            <AccordionTrigger className="hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/documentation/accordion/akun-icon.png"
                alt="Kilat Hosting 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1">Kilat Hosting 2.0</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
              <p>Submenu 2</p>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="kilat-storage">
            <AccordionTrigger className="hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/documentation/accordion/pembayaran-icon.png"
                alt="Kilat Storage"
                width={20}
                height={20}
              />
              <span className="flex-1">Kilat Storage</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Memulai Kilat Storage</p>
              <p>Cara Penggunaan</p>
              <p>Akses Kilat Storage</p>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="kilat-protect">
            <AccordionTrigger className="hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/documentation/accordion/tiket-icon.png"
                alt="Kilat Protect"
                width={20}
                height={20}
              />
              <span className="flex-1">Kilat Protect</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
              <p>Submenu 2</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-8 pt-4  flex justify-between items-center text-sm">
        {/* border-t border-black */}
        </div>
        </>
    );
  };
  
  export default Sidebar;
  
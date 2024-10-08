import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from 'next/image';
import AccordionPortal from "@/components/Documentation/AccordionPortal"

const Sidebar = () => {
  return (
    <div className="w-64 p-8">
      <h2 className="text-md nunito mb-4">PRODUK</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="kilat-vm">
          <AccordionTrigger className="flex items-center gap-3 text-left ">
            <Image
              src="/images/kilatvm-logo.png"
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
          <AccordionTrigger className="flex items-center gap-3 text-left">
            <Image
              src="/images/kilathosting-logo.png"
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
          <AccordionTrigger className="flex items-center gap-3 text-left">
            <Image
              src="/images/kilatstorage-logo.png"
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
          <AccordionTrigger className="flex items-center gap-3 text-left">
            <Image
              src="/images/kilatprotect-logo.png"
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
      <div className="mt-8 pt-4 border-t border-black flex justify-between items-center text-sm">
      </div>

    {/* KOMPONEN ACCORDION PORTAL */}
      <AccordionPortal/>
    </div>
  );
};

export default Sidebar;

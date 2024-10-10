import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ArticleTag from "@/components/Questions/articletag";

const Page = () => {
  return (
    <>
      <div className="bg-skyblue lg:p-[50px] md:p-[50px] mb:py-[50px] mb:px-0 mb:pr-[30px]">
        <h1 className="nunito font-bold text-2xl text-blue-800 mb-10 ml-10">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="flex flex-col lg:flex-row md:p-0 md:justify-center justify-between">
          <div className="lg:hidden mb-10 lg:w-1/3 md:w-full sm:w-[95%] mb:pl-8 mb:w-full justify-items-center">
            <ArticleTag />
          </div>

          <div className="lg:w-2/3 md:w-[100%] sm:w-[95%] text-left">
            <Accordion type="single" collapsible className="ml-10">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Bagaimana cara saya melakukan renewal domain yang telah
                  Expired?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Bagaimana Cara Memindahkan Layanan Antar Sesama Akun
                  CloudKilat?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-6">
                    Untuk melakukan perpindahan layanan antar akun CloudKilat,
                    Anda dapat melakukan request melalui tiket ataupun
                    mengirimkan email ke info@cloudkilat.com. Adapun beberapa
                    syarat yang perlu dipenuhi agar layanan dapat dipindahkan,
                    diantaranya:
                  </p>
                  <ul className="mt-8 leading-6">
                    <li>
                      - Tidak terdapat invoice yang Unpaid pada layanan/domain
                      yang ingin dipindahkan
                    </li>
                    <li>
                      - Melakukan request pemindahan melalui tiket dan yang
                      me-request adalah pemilik asli layanan/domain tersebut.
                    </li>
                    <li>
                      - Menginformasikan email tujuan dan pastikan email
                      tersebut sudah terdaftar sebagai akun Portal Client
                      CloudKilat.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Bagaimana cara meningkatkan limit akun saya?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Bagaimana saya dapat mengklaim pembebasan pajak?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Di zona waktu apa waktu mulai dan berakhir pada faktur saya?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Bagaimana cara mengatur pembayaran melalui ACH atau Wire?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Bagaimana saya ditagih untuk penyimpanan objek?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="hidden lg:block lg:w-1/3 md:w-full sm:w-[95%] sm:p-20 mb:p-8 lg:p-0 ml-10">
            <ArticleTag />
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;

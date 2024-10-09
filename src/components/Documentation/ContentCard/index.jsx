import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Accordion from "@/components/Documentation/AccordionProduct"
import LinkContent from "@/components/Documentation/LinkContent"

const Page = () => {
    return(
        <>
        <div className="flex">
           
            <div className="w-1/4">
            <Accordion/>
            </div>

            {/* Konten Utama */}
            <div className="px-8 p-8 mt-8">
                <h1 className="font-serif font-semibold text-4xl mb-6">Kilat Storage</h1>

                <p className="text-md mb-8 font-serif text-gray-500 ">
                    Layanan penyimpanan berkas berbasis obyek yang mendukung penuh protokol S3 yang dapat diakses dari berbagai macam aplikasi klien yang mendukung protokol S3. Mendukung integrasi penuh dengan berbagai macam kerangka bahasa pemrograman sebagai distribusi berkas statis untuk situs maupun aplikasi web.
                </p>
                
                <p className="border-t border-gray-200"></p>
                <div className="space-y-6 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <Card className="shadow-xl w-full p-6">
                        <CardHeader>
                            <CardTitle className="text-xl">Memulai Kilat Storage</CardTitle>
                            <CardDescription><a href="#" className="underline">Tutorial umum untuk memulai kilat storage</a>
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="shadow-xl w-full p-6">
                        <CardHeader>
                            <CardTitle className="text-xl">Memulai Kilat Storage</CardTitle>
                            <CardDescription><a href="#" className="underline">Tutorial umum untuk memulai kilat storage</a>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    
                    <Card className="shadow-xl w-full p-6">
                        <CardHeader>
                            <CardTitle className="text-xl">Memulai Kilat Storage</CardTitle>
                            <CardDescription><a href="#" className="underline">Tutorial umum untuk memulai kilat storage</a>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                
                 {/* LINK CONTENT */}
                 <div className="mt-8 border-t border-gray-200">
                    <div className="mt-8">
                    <LinkContent/>
                    </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Page;

import Image from 'next/image';
import Search from '@/components/Navbar/search'
const Page = () => {
    return (
        <>
            <div className="bg-primary-blue text-white px-20 py-16 h-80 relative overflow-hidden">
                <div className="flex flex-col">

                    <div>
                        <h1 className="font-bold nunito text-[30px] flex items-center justify-center">
                            Cari Dokumentasi
                        </h1>

                        <div className="mt-8 flex items-center justify-center">
                            <Search />
                        </div>
                    </div>


                    <div className="absolute right-0 top-0 w-full h-full flex justify-end items-center">
                        <Image
                            className="absolute right-0 mt-10 z-10"
                            src="/images/documentation/cloud-logo.png"
                            alt="Cloud Logo"
                            width={310}
                            height={310}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Page;
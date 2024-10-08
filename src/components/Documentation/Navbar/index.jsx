import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Image from 'next/image';
import Search from '@/components/Navbar/search'
import '@/style-css/navbar.css'

const Page = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="bg-white  h-20 px-10 py-4">
                <div className="flex justify-between items-center text-white">

                    {/* Bagian Logo */}
                    <div className="flex items-center px-10">
                        <Image
                            src="/images/documentation/logo-kilat.png"
                            alt="Cloudkilat Logo"
                            width={170}
                            height={50}
                        />
                    </div>

                    {/* Bagian Navigation */}
                    <div className="hidden md:flex items-center gap-2 space-x-5">
                        {/* Menu Dropdown */}
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='text-blue-600'>Produk</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink href="#">Kilat VM.2.0</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuViewport />
                        </NavigationMenu>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='text-blue-800'>Portal</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink href="#">Kilat VM.2.0</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuViewport />
                        </NavigationMenu>

                        {/* Links */}
                        <div className='flex gap-4 space-x-5'>
                            <a href="" className='text-blue-800'>Blog</a>
                            <a href="" className='text-blue-800'>Promosi</a>
                        </div>

                        {/* Tombol Login */}
                        <button className="w-full md:w-auto px-4 py-2 border border-blue-800 text-blue-800 rounded-md transition-colors duration-300 text-sm md:text-base">
                            Masuk
                        </button>

                        <button className="w-full md:w-auto px-4 py-2 border border-blue-800 text-blue-800 rounded-md transition-colors duration-300 text-sm md:text-base">
                            Kontak
                        </button>
                    </div>
                </div>
            </div>

            {/* Panduan Lengkap Section */}
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
        </div>
    );
};

export default Page;

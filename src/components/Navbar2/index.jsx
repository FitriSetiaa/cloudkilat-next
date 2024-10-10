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
import Search from "@/components/Navbar/search"
import '@/style-css/navbar.css'
import DetailNav from "@/components/Navbar2/detail-nav"

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
           <DetailNav/>
        </div>
    );
};

export default Page;

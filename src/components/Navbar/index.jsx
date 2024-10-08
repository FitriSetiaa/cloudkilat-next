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
      <div className="bg-primary-blue h-20 px-10 py-4">
        <div className="flex justify-between items-center text-white">
          {/* Bagian Logo */}
          <div className="flex items-center px-10">
            <Image
              src="/images/kilat-logo.png"
              alt="Cloudkilat Logo"
              width={150}
              height={50}
            />
          </div>

          {/* Bagian Navigation */}
          <div className="hidden md:flex items-center gap-2 space-x-5">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='hover:text-blue-600'>Produk</NavigationMenuTrigger>
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
                  <NavigationMenuTrigger className='hover:text-blue-600'>Portal</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="#">Kilat VM.2.0</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>

            {/* Links */}
            <div className='flex gap-4 space-x-5'>
              <a href="" className='hover:text-blue-600'>Blog</a>
              <a href="" className='hover:text-blue-600'>Promosi</a>
            </div>

            {/* Tombol Login */}
            <button className="w-full md:w-auto px-4 py-2 border border-white rounded-md transition-colors duration-300 text-sm md:text-base">
              Masuk
            </button>

            <button className="w-full md:w-auto px-4 py-2 border border-white rounded-md transition-colors duration-300 text-sm md:text-base">
              Kontak
            </button>
          </div>
        </div>
      </div>

      {/* Panduan Lengkap Section */}
      <div className="bg-primary-blue text-white px-6 md:px-20 py-16 md:h-96 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
          {/* Teks di bagian atas */}
          <div className="z-10 max-w-[35rem]">
            <h1 className="text-lg md:text-xl nunito word-spacing leading-8">
              Panduan Lengkap <b>Penggunaan Produk</b> dan <b>Platform CloudKilat,</b> serta informasi umum yang relevan dan bermanfaat
            </h1>

            <div className="mt-5">
              <Search />
            </div>
          </div>

          {/* Gambar bulat dan laptop */}
          <div className="absolute right-0 top-0 md:w-2/3 h-full z-0">
            {/* Gambar bulat-bg di sebelah kanan */}
            <Image
              className="absolute right-0 top-0 md:mt-[100px] object-cover"
              src="/images/bulat-bg.png"
              alt="Background"
              width={800}
              height={800}
            />
            {/* Gambar laptop yang menimpa bulat-bg */}
            <Image
              className="absolute right-16 top-10 md:right-16 md:top-10 md:mt-9 z-10"
              src="/images/laptop-cloud.png"
              alt="Cloudkilat Laptop"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

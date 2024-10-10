"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from 'next/image';
import Search from '@/components/Navbar/search'
import '@/style-css/navbar.css'
import { useState } from 'react';
import { Menu } from 'lucide-react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <div className="bg-primary-blue px-4 sm:px-6 md:px-10 py-4">
        <div className="flex justify-between items-center text-white">
          {/* Logo */}
          <div className="flex items-center w-[100px] h-[33px] sm:w-[120px] sm:h-[40px] md:w-[150px] md:h-[50px]">
            <Image
              src="/images/kilat-logo.png"
              alt="Cloudkilat Logo"
              layout="responsive"
              width={150}
              height={50}
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
 
          {/* Navigation for larger screens */}
          <div className="hidden lg:flex items-center gap-2 space-x-5">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='hover:text-blue-600'>Produk</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="#">Kilat VM.2.0</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
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

            {/* Buttons */}
            <button className="px-4 py-2 border border-white rounded-md transition-colors duration-300 text-sm">
              Masuk
            </button>
            <button className="px-4 py-2 border border-white rounded-md transition-colors duration-300 text-sm">
              Kontak
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-600">Produk</a>
            <a href="#" className="text-white hover:text-blue-600">Portal</a>
            <a href="#" className="text-white hover:text-blue-600">Blog</a>
            <a href="#" className="text-white hover:text-blue-600">Promosi</a>
            <button className="w-full py-2 border border-white rounded-md transition-colors duration-300 text-sm">
              Masuk
            </button>
            <button className="w-full py-2 border border-white rounded-md transition-colors duration-300 text-sm">
              Kontak
            </button>
          </div>
        )}
      </div>

       <div className="bg-primary-blue text-white px-4 sm:px-6 md:px-20 py-8 md:py-16 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        {/* Text content */}
        <div className="z-10 w-full md:max-w-[35rem] mb-8 md:mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl nunito leading-tight mb-4">
            Panduan Lengkap <b>Penggunaan Produk</b> dan <b>Platform CloudKilat,</b> serta informasi umum yang relevan dan bermanfaat
          </h1>
          <div className="mt-4 md:mt-6">
            <Search />
          </div>
        </div>

        {/* Images */}
        <div className="absolute right-0 top-0 lg:w-2/3 h-full z-0">
            {/* Gambar bulat-bg di sebelah kanan */}
            <Image
              className="absolute right-0 top-0 md:mt-[80px] object-cover"
              src="/images/bulat-bg.png"
              alt="Background"
              width={800}
              height={800}
            />
            {/* Gambar laptop yang menimpa bulat-bg */}
            <Image
              className="absolute right-16 top-8 md:right-16 md:top-0 md:mt-6 z-10"
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
import Image from "next/image";

const Information = () => {
  return (
<<<<<<< HEAD:src/components/Information/index.jsx
    <div className="relative  md:p-[50px] nunito sm:p-6 mb:p-6 overflow-hidden">
=======
<<<<<<< HEAD:src/components/Information/index.jsx
    <div className="relative  md:p-[50px] nunito sm:p-6 mb:p-6 overflow-hidden">
=======
    <div className="relative p-5 sm:p-10 nunito">
>>>>>>> 02c983e4ba7770b0ebeab2cedc556b500fbcf363:src/components/Beranda/information.jsx
>>>>>>> 38986531674b5fd77c453d44e2594ec22758223f:src/components/Beranda/information.jsx
      <div className="flex justify-between items-center mb-10">
        <strong>
          <h1 className="text-[#136AAD] text-2xl sm:text-3xl">INFORMASI UMUM</h1>
        </strong>
        <a href="">
          <div className="flex items-center gap-2">
            <p className="hidden sm:block text-sm sm:text-base">Tampilkan Semua</p>
            <Image
              className="cursor-pointer"
              src="/images/arrow.png"
              alt="Arrow"
              width={20}
              height={16}
            />
          </div>
        </a>
      </div>
      <div className="nunito">
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <p className="flex-1 truncate">Mengenal FileZilla dan Cara Instalasinya dengan Mudah</p>
          </div>
        </a>
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <p className="flex-1 truncate">Upgrade In-Place CentOS 7 ke AlmaLinux 8 dengan ELevate</p>
          </div>
        </a>
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <h2 className="flex-1 truncate">Panduan Lengkap: Cara Instal LEMP Stack (Nginx, MySQL, PHP) di KILAT VM 2.0 dengan OneinStack</h2>
          </div>
        </a>
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <h2 className="flex-1 truncate">Cara Menginstall Plesk di AlmaLinux 8 dengan One-Click Installer</h2>
          </div>
        </a>
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <h2 className="flex-1 truncate">Cara Menginstal Control Panel HestiaCP pada Ubuntu'22.04</h2>
          </div>
        </a>
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <h2 className="flex-1 truncate">Mengatasi Kendala apt-get update “the following signatures couldn't be verified because the public key is not available” di Ubuntu</h2>
          </div>
        </a>
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <h2 className="flex-1 truncate">Upgrade Ubuntu 20.04 ke Ubuntu 22.04 pada VPS Plesk</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Information;

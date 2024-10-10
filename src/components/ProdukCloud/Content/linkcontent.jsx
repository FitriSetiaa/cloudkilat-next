import Image from "next/image";
const Page = () => {
    return (
       <>
       <div className="nunito">
        <a href="">
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-8">
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
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-8">
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
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline mb-8">
            <Image 
              src="/images/logo_cloudkilat.png"
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <h2 className="flex-1 truncate">Cara Menginstall Plesk di AlmaLinux 8 dengan One-Click Installer</h2>
          </div>
        </a>

      </div>
       </>
    )
}

export default Page;
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';


const Produk = () => {
  return (
  <>
   <div className="relative">
        <div className="p-[50px]">
          <h1 className="nunito font-bold text-2xl text-blue-800 ml-10 mb-14">
            PRODUK CLUDKILAT
          </h1>
          <div className="absolute left-0 bottom-0 translate-x-[0px] translate-y-[0px]">
            {" "}
            <Image
              src="/images/bulat2-bg.png"
              alt="Elips"
              width={530}
              height={530}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {/* Kartu 1 */}
            <Card className="max-w-[595px] bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 hover:bg-[#136AAD] mx-auto group">

              <CardHeader>
                <Image
                  src="/images/kilatvm-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="text-lg nunito font-semibold group-hover:text-white">
                  Kilat VM 2.0
                </CardTitle>
                <CardDescription className="max-w-[30rem] leading-5 text-gray-700 group-hover:text-white">
                  Kelola VM dengan berbagai fitur seperti ganti password,
                  install ulang, akses konsol, dan pemantauan performa untuk
                  mengoptimalkan pengelolaan server Anda.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Kartu 2 */}
            <Card className="max-w-[595px] bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 hover:bg-[#136AAD] mx-auto group">
              <CardHeader>
                <Image
                  src="/images/kilathosting-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="text-lg nunito font-semibold group-hover:text-white">
                  Kilat Hosting 2.0
                </CardTitle>
                <CardDescription className="max-w-[30rem] leading-5 text-gray-700 group-hover:text-white">
                  Kelola layanan Hosting dengan mudah menggunakan fitur-fitur
                  lengkap seperti pengaturan konfigurasi, manajemen database,
                  akses file manager, dan pemantauan performa.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Kartu 3*/}
            
            <Card className="max-w-[595px] bg-white text-white shadow-lg rounded-lg transition-all transform hover:scale-105 hover:bg-[#136AAD] mx-auto group">
                
              <CardHeader>
                <Image
                  src="/images/kilatstorage-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="max-w-[595px] text-lg nunito font-semibold group-hover:text-white">
                  Kilat Storage
                </CardTitle>
                <CardDescription className="max-w-[30rem] leading-5 text-gray-700 group-hover:text-white">
                  Didesain untuk menyimpan data secara aman dan efisien, layanan
                  ini memastikan kemudahan akses dan fleksibilitas untuk
                  kebutuhan penyimpanan Anda.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Kartu 4 */}
            <Card className="max-w-[595px] bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 hover:bg-[#136AAD] mx-auto group">
              <CardHeader>
                <Image
                  src="/images/kilatprotect-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="text-lg nunito font-semibold group-hover:text-white">
                  Kilat Protect
                </CardTitle>
                <CardDescription className="max-w-[30rem] leading-5 text-gray-700 group-hover:text-white">
                  Didesain untuk melindungi data dan sistem Anda dengan fitur
                  keamanan yang komprehensif.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
  </>
  );
};

export default Produk;
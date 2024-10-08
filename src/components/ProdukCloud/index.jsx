import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
const Page = () => {
  return (
    <>
      <div className="p-10 bg-[#F2FAFF] nunito">
        <strong>
          <h1 className="text-3xl mb-10 text-[#136AAD]">PORTAL CLOUDKILAT</h1>
        </strong>
        <Image
          className="absolute right-0 lg:mt-0 sm:mt-[250px]"
          src="/images/elips1.png"
          alt="people"
          width={440}
          height={440}
        />
        <Image
          className="absolute right-0 lg:mt-[70px] sm:mt-[320px]"
          src="/images/elips2.png"
          alt="people"
          width={320}
          height={320}
        />
        <Image
          className="absolute right-0 lg:mt-[140px] sm:mt-[390px]"
          src="/images/elips2.png"
          alt="people"
          width={210}
          height={210}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center relative overflow-hidden">
          <Card className="w-[281px] h-[221px] flex flex-col justify-center bg-transparent border border-blue-500 hover:bg-[#136AAD] hover:text-white transition-colors duration-300">
            <a href="">
              <CardContent className="flex items-center space-x-5">
                <Image
                  className=""
                  src="/images/people.png"
                  alt="people"
                  width={50}
                  height={50}
                />
                {/* White Version */}
                {/* <Image 
                className="hidden hover:block"
                src="/images/people-white.png"
                alt="people white"
                width={50}
                height={50}
            /> */}
                <strong>
                  <h2 className="text-lg">Akun</h2>
                </strong>
              </CardContent>
              <CardFooter className="">
                <p>
                  Mengelola informasi pribadi seperti kredensial, profil dan
                  preferensi.
                </p>
              </CardFooter>
            </a>
          </Card>

          <Card className="w-[281px] h-[221px] flex flex-col justify-center bg-transparent hover:bg-[#136AAD] hover:text-white transition-colors duration-300">
            <a href="">
              <CardContent className="flex items-center space-x-5">
                <Image
                  className=""
                  src="/images/bag.png"
                  alt="people"
                  width={50}
                  height={50}
                />
                {/* White Version */}
                {/* <Image 
                className="hidden hover:block"
                src="/images/people-white.png"
                alt="people white"
                width={50}
                height={50}
            /> */}
                <strong>
                  <h2 className="text-lg">Pemesanan</h2>
                </strong>
              </CardContent>
              <CardFooter className="">
                <p>
                  Memilih layanan, menentukan spesifikasi, dan mengaktifkan
                  paket dengan cepat.
                </p>
              </CardFooter>
            </a>
          </Card>

          <Card className="w-[281px] h-[221px] flex flex-col justify-center bg-transparent border border-blue-500 hover:bg-[#136AAD] hover:text-white transition-colors duration-300">
            <a href="">
              <CardContent className="flex items-center space-x-5">
                <Image
                  className=""
                  src="/images/wallet.png"
                  alt="people"
                  width={50}
                  height={50}
                />
                {/* White Version */}
                {/* <Image 
                className="hidden hover:block"
                src="/images/people-white.png"
                alt="people white"
                width={50}
                height={50}
            /> */}
                <strong>
                  <h2 className="text-lg">Pembayaran</h2>
                </strong>
              </CardContent>
              <CardFooter className="">
                <p>
                  Memilih opsi pembayaran yang sesuai, CloudKilat mendukung
                  berbagai metode transaksi yang aman dan cepat.
                </p>
              </CardFooter>
            </a>
          </Card>

          <Card className="w-[281px] h-[221px] flex flex-col justify-center bg-transparent border border-blue-500 hover:bg-[#136AAD] hover:text-white transition-colors duration-300">
            <a href="">
              <CardContent className="flex items-center space-x-5">
                <Image
                  className=""
                  src="/images/check_list.png"
                  alt="people"
                  width={50}
                  height={50}
                />
                {/* White Version */}
                {/* <Image 
                className="hidden hover:block"
                src="/images/people-white.png"
                alt="people white"
                width={50}
                height={50}
            /> */}
                <strong>
                  <h2 className="text-lg">Tiket</h2>
                </strong>
              </CardContent>
              <CardFooter className="">
                <p>
                  Mengelola permintaan bantuan terkait kendala teknis atau
                  informasi lainnya.
                </p>
              </CardFooter>
            </a>
          </Card>
        </div>
      </div>
    </>
  );
};
    return (
        <>
            <div className="">
               
                <div className="relative">
                    <div className="mt-8 absolute inset-0 z-0"> {/* Mengurangi margin-top */}
                        <Image
                            src="/images/bulat2-bg.png"
                            alt="Cloudkilat Laptop"
                            width={530}
                            height={530}
                        />
                    </div>
                </div>
                
                <div className="p-[50px]"> 
                    <h1 className="nunito font-bold text-2xl text-blue-800 ml-10 mb-16">PRODUKKKKKKK</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]"> 

                        {/* Kartu 1 */}
                        <Card className='max-w-xl bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto'>
                            <CardHeader>
                                <Image
                                    src="/images/kilatvm-logo.png"
                                    alt="Cloudkilat Laptop"
                                    width={50}
                                    height={50}
                                />
                                <CardTitle className="text-black text-lg nunito font-semibold">Kilat VM 2.0</CardTitle>
                                <CardDescription className="text-gray-500 max-w-[30rem] leading-5">Kelola VM dengan berbagai fitur seperti ganti password, install ulang, akses konsol, dan pemantauan performa untuk mengoptimalkan pengelolaan server Anda.</CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Kartu 2 */}
                        <Card className='max-w-xl bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto'>
                            <CardHeader>
                                <Image
                                    src="/images/kilathosting-logo.png"
                                    alt="Cloudkilat Laptop"
                                    width={50}
                                    height={50}
                                />
                                <CardTitle className="text-black text-lg nunito font-semibold">Kilat Hosting 2.0</CardTitle>
                                <CardDescription className="text-gray-500 max-w-[30rem] leading-5">Kelola layanan Hosting dengan mudah menggunakan fitur-fitur lengkap seperti pengaturan konfigurasi, manajemen database, akses file manager, dan pemantauan performa.</CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Kartu 3 dengan Background Biru */}
                        <Card className='max-w-xl bg-primary-blue text-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto'>
                            <CardHeader>
                                <Image
                                    src="/images/kilatstorage-logo.png"
                                    alt="Cloudkilat Laptop"
                                    width={50}
                                    height={50}
                                />
                                <CardTitle className="text-white text-lg nunito font-semibold">Kilat Storage</CardTitle>
                                <CardDescription className="text-gray-100 max-w-[30rem] leading-5">Didesain untuk menyimpan data secara aman dan efisien, layanan ini memastikan kemudahan akses dan fleksibilitas untuk kebutuhan penyimpanan Anda.</CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Kartu 4 */}
                        <Card className='max-w-xl bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto'>
                            <CardHeader>
                                <Image
                                    src="/images/kilatprotect-logo.png"
                                    alt="Cloudkilat Laptop"
                                    width={50}
                                    height={50}
                                />
                                <CardTitle className="text-black text-lg nunito font-semibold">Kilat Protect</CardTitle>
                                <CardDescription className="text-gray-500 max-w-[30rem] leading-5">Didesain untuk melindungi data dan sistem Anda dengan fitur keamanan yang komprehensif.</CardDescription>
                            </CardHeader>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;


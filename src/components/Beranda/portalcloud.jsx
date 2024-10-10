import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Page = () => {
  return (
    <>

      <div className="p-[40px] pr-[10px] bg-[#F2FAFF] nunito relative">
        <strong>
          <h1 className="nunito font-bold text-2xl text-blue-800 ml-10 mb-16">
            PORTAL CLOUDKILAT
          </h1>
        </strong>
        <Image
          className="absolute right-0 bottom-0 translate-x-[0px] translate-y-[0px]"
          src="/images/elips4.png"
          alt="Elips"
          width={440}
          height={440}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-10 justify-items-center relative overflow-hidden px-4 sm:px-6 lg:px-[50px]">
          <Card className="w-full max-w-[300px] h-auto flex flex-col justify-between bg-transparent border border-blue-500 hover:bg-[#136AAD] hover:text-white transition-colors duration-300">
            <a href="" className="flex flex-col h-full">
              <CardContent className="flex items-center space-x-5 py-4">
                <Image
                  className=""
                  src="/images/people.png"
                  alt="people"
                  width={50}
                  height={50}
                />
                <strong>
                  <h2 className="text-lg">Akun</h2>
                </strong>
              </CardContent>
              <CardFooter className="mt-4">
                <p>
                  Mengelola informasi pribadi seperti kredensial, profil, dan
                  preferensi. Mengelola informasi pribadi seperti kredensial, profil, dan
                  preferensi.
                </p>
              </CardFooter>
            </a>
          </Card>

          <Card className="w-full max-w-[300px] h-auto flex flex-col justify-center bg-transparent border border-blue-500 hover:bg-[#136AAD] hover:text-white transition-colors duration-300 ">
            <a href="" className="flex flex-col h-full">
              <CardContent className="flex items-center space-x-5 py-4">
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
              <CardFooter className="mt-4">
                <p>
                  Memilih layanan, menentukan spesifikasi, dan mengaktifkan
                  paket dengan cepat.
                </p>
              </CardFooter>
            </a>
          </Card>

          <Card className="w-full max-w-[300px] h-auto flex flex-col justify-center bg-transparent border border-blue-500 hover:bg-[#136AAD] hover:text-white transition-colors duration-300">
            <a href="" className="flex flex-col h-full">
              <CardContent className="flex items-center space-x-5 py-4">
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
              <CardFooter className="mt-4">
                <p>
                  Memilih opsi pembayaran yang sesuai, CloudKilat mendukung
                  berbagai metode transaksi yang aman dan cepat.
                </p>
              </CardFooter>
            </a>
          </Card>

          <Card className="w-full max-w-[300px] h-auto flex flex-col justify-center bg-transparent border border-blue-500 hover:bg-[#136AAD] hover:text-white transition-colors duration-300">
            <a href="" className="flex flex-col h-full">
              <CardContent className="flex items-center space-x-5 py-4">
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
              <CardFooter className="mt-4">
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

export default Page;

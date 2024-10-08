import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Produk = () => {
  return (
  <>
    <div className="">
        <div className="relative">
          <div className="mt-8 absolute inset-0 z-0">
            {" "}
            {/* Mengurangi margin-top */}
            <Image
              src="/images/bulat2-bg.png"
              alt="Cloudkilat Laptop"
              width={530}
              height={530}
            />
          </div>
        </div>

        <div className="p-[50px]">
          <h1 className="nunito font-bold text-2xl text-blue-800 ml-10 mb-16">
            PRODUK CLUDKILAT
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
            {/* Kartu 1 */}
            <Card className="max-w-xl bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto">
              <CardHeader>
                <Image
                  src="/images/kilatvm-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="text-black text-lg nunito font-semibold">
                  Kilat VM 2.0
                </CardTitle>
                <CardDescription className="text-gray-500 max-w-[30rem] leading-5">
                  Kelola VM dengan berbagai fitur seperti ganti password,
                  install ulang, akses konsol, dan pemantauan performa untuk
                  mengoptimalkan pengelolaan server Anda.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Kartu 2 */}
            <Card className="max-w-xl bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto">
              <CardHeader>
                <Image
                  src="/images/kilathosting-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="text-black text-lg nunito font-semibold">
                  Kilat Hosting 2.0
                </CardTitle>
                <CardDescription className="text-gray-500 max-w-[30rem] leading-5">
                  Kelola layanan Hosting dengan mudah menggunakan fitur-fitur
                  lengkap seperti pengaturan konfigurasi, manajemen database,
                  akses file manager, dan pemantauan performa.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Kartu 3 dengan Background Biru */}
            <Card className="max-w-xl bg-primary-blue text-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto">
              <CardHeader>
                <Image
                  src="/images/kilatstorage-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="text-white text-lg nunito font-semibold">
                  Kilat Storage
                </CardTitle>
                <CardDescription className="text-gray-100 max-w-[30rem] leading-5">
                  Didesain untuk menyimpan data secara aman dan efisien, layanan
                  ini memastikan kemudahan akses dan fleksibilitas untuk
                  kebutuhan penyimpanan Anda.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Kartu 4 */}
            <Card className="max-w-xl bg-white shadow-lg rounded-lg transition-all transform hover:scale-105 mx-auto">
              <CardHeader>
                <Image
                  src="/images/kilatprotect-logo.png"
                  alt="Cloudkilat Laptop"
                  width={50}
                  height={50}
                />
                <CardTitle className="text-black text-lg nunito font-semibold">
                  Kilat Protect
                </CardTitle>
                <CardDescription className="text-gray-500 max-w-[30rem] leading-5">
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
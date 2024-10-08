import Image from "next/image";
const Page = () => {
  return (
    <>
      <footer className="bg-primary-blue text-white py-10 p-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-2 sm:grid-cols-2 justify-items-center items-center py-auto">
          <div className="mb-6 md:mb-0 mb:text-center mb:justify">
            <Image
              className="mx-auto"
              src="/images/footer-images/infinys-logo.png"
              alt="icon-facebook"
              width={150}
              height={150}
            />
            <p className="text-sm mt-5 max-w-[15rem]">
              CLOUDKILAT merupakan bagian dan merk dagang dari PT Infinys System
              Indonesia
            </p>
            <div className="flex mt-6 space-x-4 mb:justify-center">
              <a href="">
                <Image
                  src="/images/footer-images/icon-twitter.png"
                  alt="icon-facebook"
                  width={30}
                  height={30}
                />
              </a>

              <a href="">
                <Image
                  src="/images/footer-images/icon-instagram.png"
                  alt="icon-facebook"
                  width={30}
                  height={30}
                />
              </a>

              <a href="">
                <Image
                  src="/images/footer-images/icon-facebook.png"
                  alt="icon-facebook"
                  width={30}
                  height={30}
                />
              </a>

              <a href="">
                <Image
                  src="/images/footer-images/icon-tiktok.png"
                  alt="icon-facebook"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>

          {/* Products Link's */}
          <div className="mb-6 sm:ml-10 md:ml-10 md:mb-0 mb:text-center">
            <h3 className="font-bold">Produk</h3>
            <ul className="mt-2 leading-8">
              <li>
                <a href="#">Kilat VM 2.0</a>
              </li>
              <li>
                <a href="#">Kilat Hosting 2.0</a>
              </li>
              <li>
                <a href="#">Kilat Storage</a>
              </li>
              <li>
                <a href="#">Kilat Protect</a>
              </li>
            </ul>
          </div>

          {/* Service Link's */}
          <div className="mb-6 md:ml-12 md:mb-0 mb:text-center">
            <h3 className="font-bold ">Layanan</h3>
            <ul className="mt-2 leading-8">
              <li>
                <a href="#">Infrastuktur</a>
              </li>
              <li>
                <a href="#">Platform</a>
              </li>
              <li>
                <a href="#">Domain</a>
              </li>
              <li>
                <a href="">Tambahan</a>
              </li>
            </ul>
          </div>

          {/* contact link's */}
          <div className="sm:ml-10 mb:text-center">
            <h3 className="font-bold">Contact Us</h3>

            <div className="flex items-center mt-2 mb:flex-none">
              <Image
                src="/images/footer-images/icon-email.png"
                alt="icon-email"
                width={20}
                height={20}
              />
              <p className="ml-2">info@cloudkilat.com</p>
            </div>

            <div className="flex items-center mt-2 max-w-[12rem]">
              <Image
                src="/images/footer-images/icon-maps.png"
                alt="icon-maps"
                width={20}
                height={20}
              />
              <p className="ml-2">
                Pakuwon Tower lt. 9 F-G. Jl. Cassablanca Raya Kav. 88 Jakarta
                Selatan 12870.
              </p>
            </div>

            <div className="flex items-center mt-2">
              <Image
                src="/images/footer-images/icon-telpon.png"
                alt="icon-telpon"
                width={20}
                height={20}
              />
              <p className="ml-2">+62 21 2968 2828</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white flex sm:flex-row mb:flex-col justify-between items-center text-sm">
          <p>Copyright © 2024 Knowledge Base CloudKilat</p>

          <p className="flex items-center">
            Status:{" "}
            <span className="w-2 h-2 bg-green-400 rounded-full ml-2 mr-1"></span>{" "}
            Seluruh Sistem Normal
          </p>
        </div>
      </footer>
    </>
  );
};
export default Page;

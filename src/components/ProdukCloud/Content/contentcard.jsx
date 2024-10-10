import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import LinkContent from "@/components/ProdukCloud/Content/linkcontent"
  
  const Page = () => {
    return (
      <>
        <div className="flex">
          {/* Sidebar Accordion */}
         
  
          {/* Main Content */}
          <div className="px-8 p-8 mt-8">
            <h1 className="font-serif font-semibold text-4xl mb-6">Kilat Storage</h1>
  
            <p className="text-md mb-8 font-serif text-gray-500">
              Layanan penyimpanan berkas berbasis obyek yang mendukung penuh protokol S3 yang dapat diakses dari berbagai macam aplikasi klien yang mendukung protokol S3. Mendukung integrasi penuh dengan berbagai macam kerangka bahasa pemrograman sebagai distribusi berkas statis untuk situs maupun aplikasi web.
            </p>
  
            <hr className="border-t border-gray-200" />
  
            {/* Card Section */}
            <div className="flex grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  {/* Card 1 */}
  <Card className="shadow-xl w-full p-6 min-h-[200px] flex flex-col">
    <CardHeader>
      <CardTitle className="text-xl">Memulai Kilat Storage</CardTitle>
      <CardDescription>
        <a href="#" className="underline">
          Tutorial umum untuk memulai kilat storage
        </a>
      </CardDescription>
    </CardHeader>
  </Card>

  {/* Card 2 */}
  <Card className="shadow-xl w-full p-6 min-h-[200px] flex flex-col">
    <CardHeader>
      <CardTitle className="text-xl">Cara Penggunaan</CardTitle>
      <CardDescription>
  <a href="#" className="underline block">
    Cara Akses Kilat Storage Baru Menggunakan CyberDuck
  </a>
  <a href="#" className="underline block mt-5">
    Cara Reset Password
  </a>
</CardDescription>

    </CardHeader>
  </Card>

  {/* Card 3 */}
  <Card className="shadow-xl w-full p-6 min-h-[200px] flex flex-col">
    <CardHeader>
      <CardTitle className="text-xl">Tutorial Kilat Storage</CardTitle>
      <CardDescription>
        <a href="#" className="underline block">
          Tutorial umum untuk memulai kilat storage
        </a>
        
        <a href="#" className="underline block mt-5">
        Cara Akses Kilat Storage Menggunakan S3 Browser
        </a>
      </CardDescription>
    </CardHeader>
  </Card>
</div>
            {/* Link Content Section */}
            <div className="mt-8 border-t border-gray-200">
              <div className="mt-8">
                <LinkContent />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Page;
  
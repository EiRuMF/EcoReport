import React from "react";
import Backgroundshort from "@/components/backgroundshort.jsx";
import { FaFire } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-120 px-6 lg:px-12 font-sans text-left">
      
      <Backgroundshort />

      <div className="relative z-10 w-full max-w-275 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-8">
        
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col h-full text-left">
          
          <h1 className="font-bebas text-5xl md:text-[64px] text-[#1E293B] uppercase leading-[1.05] mb-2 tracking-normal">
            Jalan Berlubang <br /> Sebabkan Kecelakaan
          </h1>
          
          <p className="text-xs md:text-sm text-gray-500 font-bold mb-8">
            Damar Syuhada - 2 Juni 2026
          </p>
          
          <div className="flex flex-col gap-5 text-gray-700 text-sm md:text-[15px] font-medium leading-relaxed text-justify">
            <p>
              Kondisi infrastruktur Ruas Jalan Sudirman KM 12 kini menjadi keresahan utama warga dan pengguna jalan. Terdapat setidaknya 7 titik lubang besar berdiameter hingga 80 sentimeter yang dibiarkan tanpa perbaikan sejak 4 bulan lalu.
            </p>
            <p>
              Risiko kecelakaan semakin tinggi, terutama saat malam hari yang minim penerangan atau ketika genangan air hujan menyembunyikan lubang dari pandangan pengemudi. "Sudah beberapa kali pengendara motor jatuh di sini, tapi sampai sekarang belum ada penanganan nyata dari petugas," keluh seorang warga setempat.
            </p>
            <p>
              Warga kini mendesak keras Dinas Pekerjaan Umum (PU) untuk segera turun ke lokasi dan melakukan perbaikan aspal secara menyeluruh, bukan sekadar penambalan sementara. Keselamatan pengguna jalan harus menjadi prioritas sebelum jumlah korban terus bertambah.
            </p>
          </div>

        </div>

        <div className="flex flex-col gap-5 lg:gap-6 h-full">
          
          {/* Sedang Trending */}
          <div className="bg-linear-to-r from-[#FACC15] via-[#F97316] to-[#EF4444] rounded-[32px] p-6 shadow-xl flex items-center justify-center">
            <h2 className="font-bebas text-4xl md:text-[42px] text-white tracking-wide uppercase m-0 flex items-center gap-3">
              Sedang Trending <FaFire className="w-8 h-8 md:w-9 md:h-9 text-white pb-1" />
            </h2>
          </div>

          {/* Trending card 1 */}
          <div className="bg-white rounded-[32px] p-7 shadow-xl flex flex-col justify-center flex-1 text-left">
            <h3 className="font-bebas text-3xl md:text-[34px] text-[#1E293B] uppercase leading-tight mb-1">
              Penumpukan Sampah <br /> Sebabkan Banjir
            </h3>
            <p className="text-[11px] md:text-xs text-gray-500 font-bold mb-4">
              Iurie Farrel - 24 April 2026
            </p>
            <p className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed text-justify">
              Warga mengeluhkan tumpukan sampah yang menyumbat drainase utama di kawasan pasar Bojongsoang, mengakibatkan banjir.
            </p>
          </div>

          {/*  Trending card 2 */}
          <div className="bg-white rounded-[32px] p-7 shadow-xl flex flex-col justify-center flex-1 text-left">
            <h3 className="font-bebas text-3xl md:text-[34px] text-[#1E293B] uppercase leading-tight mb-1">
              Lampu Jalan Padam, Warga <br /> Keluhkan Keamanan
            </h3>
            <p className="text-[11px] md:text-xs text-gray-500 font-bold mb-4">
              Maestro Inozaki - 30 Mei 2026
            </p>
            <p className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed text-justify">
              Jalan Umum mati total selama dua pekan terakhir. Kondisi jalan yang gelap gulita ini memicu kekhawatiran warga setempat terkait keamanan sekitar.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogPage;
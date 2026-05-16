import React from "react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 flex justify-end">
      <div className="flex flex-col items-end w-full lg:w-[70%]">
        <h2 className="text-4xl md:text-5xl font-['Bebas_Neue'] tracking-wider mb-4 text-white flex gap-2">
          <span className="text-[#F5A623]">NEWEST</span>BLOG
        </h2>

        <div className="bg-white rounded-[32px] p-6 md:p-8 w-full flex flex-col-reverse md:flex-row justify-between items-stretch gap-8 shadow-2xl">
          {/* deskripsi */}
          <div className="bg-[#F5B014] rounded-[24px] p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#3168FF] rounded-full min-w-10 h-10 flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>
              <span className="font-bold text-[#1C2938] text-sm md:text-base">
                Damar Syuhada | 1 hari lalu
              </span>
            </div>
            <p className="text-white text-sm md:text-[15px] font-semibold leading-relaxed text-justify">
              Ruas Jalan Sudirman KM 12 dilaporkan memiliki 7 lubang besar yang
              belum ditambal sejak 4 bulan lalu. Warga setempat mendesak Dinas
              PU segera bertindak sebelum korban bertambah.
            </p>
          </div>

          {/* judul */}
          <div className="w-full md:w-[45%] flex flex-col justify-between items-end text-right py-2 pr-2">
            <h3 className="text-4xl md:text-[3.5rem] font-['Bebas_Neue'] text-[#1C2938] leading-[0.85] text-right mb-6">
              JALAN BERLUBANG <br />
              SEBABKAN <br />
              KECELAKAAN
            </h3>
            <Button className="bg-[#3168FF] hover:bg-blue-700 text-white font-bold py-7 px-10 rounded-full transition-colors text-lg shadow-lg uppercase tracking-wide">
              Selengkapnya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

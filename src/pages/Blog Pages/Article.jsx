import React from "react";

const Article = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col h-full text-left">
      <h1 className="font-bebas text-5xl md:text-[64px] text-[#1E293B] uppercase leading-[1.05] mb-2 tracking-normal">
        Jalan Berlubang <br /> Sebabkan Kecelakaan
      </h1>
      <p className="text-xs md:text-sm text-gray-500 font-bold mb-8">
        Damar Syuhada - 2 Juni 2026
      </p>

      <div className="flex flex-col gap-5 text-gray-700 text-sm md:text-[15px] font-medium leading-relaxed text-justify">
        <p>
          Kondisi infrastruktur Ruas Jalan Sudirman KM 12 kini menjadi keresahan
          utama warga dan pengguna jalan. Terdapat setidaknya 7 titik lubang
          besar yang membahayakan pengendara roda dua maupun roda empat.
        </p>
        <p>
          Risiko kecelakaan semakin tinggi, terutama saat malam hari yang minim
          penerangan atau ketika genangan air hujan menyembunyikan lubang-lubang
          tersebut.
        </p>
        <p>
          Warga kini mendesak keras Dinas Pekerjaan Umum (PU) untuk segera turun
          ke lokasi dan melakukan perbaikan aspal secara menyeluruh, bukan
          sekadar tambal sulam yang mudah rusak kembali.
        </p>
      </div>
    </div>
  );
};

export default Article;

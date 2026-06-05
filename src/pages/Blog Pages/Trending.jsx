import React from "react";
import { FaFire } from "react-icons/fa";

const Trending = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-6 h-full">
      <div className="bg-linear-to-r from-[#FACC15] via-[#F97316] to-[#EF4444] rounded-[32px] p-6 shadow-xl flex items-center justify-center">
        <h2 className="font-bebas text-4xl md:text-[42px] text-white tracking-wide uppercase m-0 flex items-center gap-3">
          <FaFire className="mb-1" /> Sedang Trending
        </h2>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl flex-1 flex flex-col gap-5 text-left">
        <div className="border-b border-gray-100 pb-4">
          <h3 className="font-bold text-gray-800 text-[17px] mb-1.5 cursor-pointer hover:text-blue-600 transition-colors leading-snug">
            Tumpukan Sampah Pasar Induk Akhirnya Dibersihkan
          </h3>
          <p className="text-xs text-gray-500 font-medium">1 Hari yang lalu</p>
        </div>
        <div className="border-b border-gray-100 pb-4">
          <h3 className="font-bold text-gray-800 text-[17px] mb-1.5 cursor-pointer hover:text-blue-600 transition-colors leading-snug">
            Pemadaman Listrik Bergilir di Area Bandung Selatan
          </h3>
          <p className="text-xs text-gray-500 font-medium">3 Hari yang lalu</p>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-[17px] mb-1.5 cursor-pointer hover:text-blue-600 transition-colors leading-snug">
            Fasilitas Taman Kota Rusak Akibat Vandalisme
          </h3>
          <p className="text-xs text-gray-500 font-medium">
            1 Minggu yang lalu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trending;

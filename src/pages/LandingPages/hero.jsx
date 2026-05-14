import React from "react";
import { FiSend } from "react-icons/fi";
import { FaExclamation } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { STATS_DATA } from "@/constant/dataLP";

const HeroSection = () => {
  return (
    <main className="relative z-10 w-full max-w-6xl mx-auto mt-16 px-6">
      <div className="bg-white rounded-[40px] p-10 md:py-24 md:px-16 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-8">
        <div className="w-full md:w-3/5 text-left flex flex-col items-start">
          <h1 className="font-black text-4xl md:text-5xl text-[#1E3A8A] leading-tight mb-2 uppercase tracking-tight whitespace-nowrap">
            MENGALAMI KENDALA?
          </h1>
          <h2 className="font-bold text-3xl md:text-4xl text-[#1E3A8A] mb-10 uppercase tracking-tight underline decoration-[#F5A623] decoration-4 underline-offset-8">
            SUARA ANDA JADI <span className="text-[#F5A623]">SOLUSI!</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 max-w-lg font-medium">
            Platform pelaporan masalah infrastruktur dan layanan public.
            Laporkan masalah di daerah Anda dengan cepat dan transparan.
          </p>

          {/* stats */}
          <div className="flex flex-wrap gap-8 md:gap-16 mb-14 text-center">
            {STATS_DATA.map((stat) => (
              <div key={stat.id}>
                <p className={`font-black text-4xl ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-gray-700 mt-1 whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Button className="bg-[#3168FF] hover:bg-blue-700 text-white font-bold py-8 px-8 rounded-full flex items-center gap-3 transition-colors text-lg shadow-lg shadow-blue-500/30">
            Laporkan
            <FiSend className="w-6 h-6" />
          </Button>
        </div>

        {/* logo */}
        <div className="w-full md:w-2/5 flex justify-center mt-10 md:mt-0">
          <div className="w-70 h-72 bg-[#F0F5FF] rounded-full flex items-center justify-center relative">
            <div className="w-24 h-24 rounded-full border-[6px] border-[#3168FF] flex items-center justify-center">
              <FaExclamation className="text-[#3168FF] text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

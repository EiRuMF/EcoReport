import React from "react";
import laporin from "@/assets/laporin.png";

import { FiUser, FiSend } from "react-icons/fi";
import { FaExclamation } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full font-sans bg-[#3168FF] relative overflow-x-hidden pb-10">
      <nav className="relative z-50 flex items-center justify-between px-6 py-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white p-2 shadow-sm">
            <img src={laporin} alt="Laporin Logo" className="w-full h-full object-contain scale-[3]" />
          </div>
          <span className="font-black text-white text-2xl tracking-wide">
            ECO<span className="text-[#F5A623]">REPORT</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 px-8 py-3 bg-white/10 backdrop-blur-md rounded-full shadow-sm text-sm font-semibold text-white border border-white/10">
          <a href="#" className="hover:text-[#F5A623] transition-colors">Beranda</a>
          <a href="#" className="hover:text-[#F5A623] transition-colors">Buat Laporan</a>
          <a href="#" className="hover:text-[#F5A623] transition-colors">Riwayat</a>
          <a href="#" className="hover:text-[#F5A623] transition-colors">Admin</a>
          <div className="w-px h-4 bg-white/30 mx-1"></div>
          <a href="/login" className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
            <FiUser className="w-5 h-5" />  
            Profil
          </a>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-6xl mx-auto mt-16 px-6">
        <div className="bg-white rounded-[40px] p-10 md:py-24 md:px-16 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-8">
          <div className="w-full md:w-3/5 text-left flex flex-col items-start">
            <h1 className="font-black text-4xl md:text-5xl text-[#1E3A8A] leading-tight mb-2 uppercase tracking-tight whitespace-nowrap">
              MENGALAMI KENDALA?
            </h1>
            <h2 className="font-bold text-3xl md:text-4xl text-[#1E3A8A] mb-10 uppercase tracking-tight underline decoration-[#F5A623] decoration-4 underline-offset-8">
              SUARA ANDA JADI <span className="text-[#F5A623] ">SOLUSI!</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 max-w-lg font-medium">
              Platform pelaporan masalah infrastruktur dan layanan public.
              Laporkan masalah di daerah Anda dengan cepat dan transparan.
            </p>

            <div className="flex flex-wrap gap-8 md:gap-16 mb-14 text-center">
              <div>
                <p className="font-black text-4xl text-[#1E3A8A]">1,248</p>
                <p className="text-s font-bold text-gray-700 mt-1">Total Laporan<br />Masuk</p>
              </div>
              <div>
                <p className="font-black text-4xl text-[#F5A623]">98%</p>
                <p className="text-s font-bold text-gray-700 mt-1">Laporan<br />Diselesaikan</p>
              </div>
              <div>
                <p className="font-black text-4xl text-[#1E3A8A]">24H</p>
                <p className="text-s font-bold text-gray-700 mt-1">Rata-rata Waktu<br />Respons</p>
              </div>
            </div>

              <Button className="bg-[#3168FF] hover:bg-blue-700 text-white font-bold py-8 px-8 rounded-full flex items-center gap-3 transition-color text-lg shadow-lg shadow-blue-500/30">
                Laporkan
                <FiSend className="w-6 h-6" />
              </Button>

          </div>

            <div className="w-full md:w-2/5 flex justify-center mt-10 md:mt-0">
              <div className="w-72 h-72 bg-[#F0F5FF] rounded-full flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full border-[6px] border-[#3168FF] flex items-center justify-center">
                  <FaExclamation className="text-[#3168FF] text-5xl" />
                </div>
              </div>
            </div>

        </div>
      </main>

    </div>
  );
};

export default LandingPage;
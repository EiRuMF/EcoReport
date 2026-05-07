import React from "react";
import laporin from "@/assets/laporin.png";

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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profil
          </a>
        </div>
      </nav>

    </div>
  );
};

export default LandingPage;
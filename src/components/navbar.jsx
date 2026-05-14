import React from "react";
import { FiUser } from "react-icons/fi";
import laporin from "@/assets/laporin.png";
import { STATS_DATA } from "@/constant/dataLP";

const Navbar = () => {
  return (
    <nav className="sticky z-50 flex items-center justify-between px-6 py-8 w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white p-2 shadow-sm">
          <img
            src={laporin}
            alt="Laporin Logo"
            className="w-full h-full object-contain scale-[3]"
          />
        </div>
        <span className="font-black text-white text-2xl tracking-wide">
          ECO<span className="text-[#F5A623]">REPORT</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 px-8 py-3 bg-white/10 backdrop-blur-md rounded-full shadow-sm text-sm font-semibold text-white border border-white/10">
        <a href="/" className="hover:text-[#F5A623] transition-colors">
          Beranda
        </a>
        <a href="/form" className="hover:text-[#F5A623] transition-colors">
          Buat Laporan
        </a>
        <a href="#" className="hover:text-[#F5A623] transition-colors">
          Riwayat
        </a>
        <div className="w-px h-4 bg-white/30 mx-1"></div>
        <a
          href="/login"
          className="flex items-center gap-2 hover:text-[#F5A623] transition-colors"
        >
          <FiUser className="w-5 h-5" />
          Profil
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

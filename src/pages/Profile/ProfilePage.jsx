import React from "react";
import { FiLogOut } from "react-icons/fi";
import Backgroundshort from "@/components/backgroundshort.jsx";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-5 pb-12 px-6">
      <Backgroundshort />

      <div className="relative z-10 w-full max-w-137 bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col items-center border-0">
        <div className="w-full h-32 bg-linear-to-r from-[#3275fb] to-[#1D4ED8] rounded-t-[32px]"></div>

        <div className="relative w-24 h-24 bg-[#D9D9D9] rounded-full border-4 border-white -mt-12 mb-3 shadow-sm z-10"></div>

        <h2 className="text-2xl font-black text-gray-900 tracking-wide text-center">
          User Bojongsantos
        </h2>
        <p className="text-gray-500 text-sm font-medium mb-8 text-center">
          Masyarakat Aktif
        </p>

        <div className="w-full px-8 md:px-10 pb-8 flex flex-col gap-6 text-left">
          <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 w-full">
            <h3 className="text-sm font-extrabold text-gray-800 mb-4">
              Informasi Akun (About You)
            </h3>

            <hr className="border-gray-300 my-2 pb-2 pt-2" />

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex flex-col items-start text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                  Email
                </p>
                <p className="text-xs font-bold text-gray-800">
                  Username@email.com
                </p>
              </div>
              <div className="flex flex-col items-start text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                  No. HP
                </p>
                <p className="text-xs font-bold text-gray-800">
                  +62 812 3456 7890
                </p>
              </div>
              <div className="col-span-2 flex flex-col items-start text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                  Terdaftar Sejak
                </p>
                <p className="text-xs font-bold text-gray-800">Januari 2024</p>
              </div>
            </div>
          </div>

          <div className="w-full text-left">
            <h3 className="text-sm font-extrabold text-gray-800 mb-3">
              Ubah Username
            </h3>
            <div className="flex gap-3">
              <input
                type="text"
                defaultValue="User Bojongsantos"
                className="flex-1 bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-4 text-sm font-bold text-gray-700 focus:outline-none focus:border-blue-500 transition-colors text-left"
              />
              <Button className="bg-[#1E293B] hover:bg-black text-white font-bold py-6.5 px-8 rounded-xl text-sm transition-colors">
                Simpan
              </Button>
            </div>
          </div>

          <hr className="border-gray-300 my-2" />

          {/* Tombol Logout */}
          <button className="w-full flex items-center justify-center gap-2 text-red-600 font-bold text-xl hover:text-red-700 transition-colors py-2">
            <FiLogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import React from "react";

const Header = () => {
  return (
    <div className="w-[1200px] flex relative items-start bg-white rounded-xl justify-between p-10  font-poppins">
      <div>
        <h1 className="font-bebas text-4xl text-[#1E3A8A] text-start">
          Riwayat Laporan Anda
        </h1>
        <p className="font-poppins text-gray-600 text-start">
          Pantau perkembangan laporan yang telah Anda kirim
        </p>
      </div>
      <div className="bg-[#DBEAFE] flex flex-col   items-center justify-start rounded-xl py-6 px-3">
        <p className="text-md text-start text-[#1E3A8A] font-semibold">
          Total Laporan Anda
        </p>
        <p className=" text-4xl font-bold text-[#1E3A8A]">3</p>
      </div>
    </div>
  );
};

export default Header;

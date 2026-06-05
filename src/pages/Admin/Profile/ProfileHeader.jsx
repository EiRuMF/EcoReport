import React from "react";

const ProfileHeader = ({ fullName, isLoading }) => {
  return (
    <>
      <div className="w-full h-32 bg-linear-to-r from-[#3275fb] to-[#1D4ED8] rounded-t-[32px]"></div>
      <div className="relative w-24 h-24 bg-[#D9D9D9] rounded-full border-4 border-white -mt-12 mb-3 shadow-sm z-10"></div>
      <h2 className="text-2xl font-black text-gray-900 tracking-wide text-center">
        {isLoading ? "Memuat..." : fullName}
      </h2>
      <p className="text-gray-500 text-sm font-medium mb-8 text-center">
        Masyarakat Aktif
      </p>
    </>
  );
};

export default ProfileHeader;

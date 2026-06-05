import React from "react";

const AccountInfo = ({ email, phone, joinedAt }) => {
  return (
    <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 w-full">
      <h3 className="text-sm font-extrabold text-gray-800 mb-4">
        Informasi Akun (About You)
      </h3>
      <hr className="border-gray-300 my-2 pb-2 pt-2" />
      <div className="grid grid-cols-2 gap-y-6 gap-x-4">
        <div className="flex flex-col items-start text-left">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Email</p>
          <p className="text-xs font-bold text-gray-800">{email}</p>
        </div>
        <div className="flex flex-col items-start text-left">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">No. HP</p>
          <p className="text-xs font-bold text-gray-800">{phone}</p>
        </div>
        <div className="col-span-2 flex flex-col items-start text-left">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Terdaftar Sejak</p>
          <p className="text-xs font-bold text-gray-800">{joinedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
import React, { useState } from "react";
import { FiSearch, FiEye } from "react-icons/fi";

const Tabel = () => {
  const [laporanList] = useState([
    {
      namaLaporan: "Jalan Berlubang di Sudirman",
      kategori: "Jalan Rusak",
      wilayah: "Bandung",
      status: "Done",
    },
    {
      namaLaporan: "Banjir di Pemukiman Warga",
      kategori: "Banjir",
      wilayah: "Jakarta",
      status: "Cancel",
    },
    {
      namaLaporan: "Lampu Jalan Utama Padam",
      kategori: "Fasilitas Publik",
      wilayah: "Surabaya",
      status: "Inprogress",
    },
    {
      namaLaporan: "Tumpukan Sampah Pasar",
      kategori: "Penumpukan Sampah",
      wilayah: "Medan",
      status: "Pending",
    },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Done":
        return "bg-green-100 text-green-700";
      case "Cancel":
        return "bg-red-100 text-red-700";
      case "Inprogress":
        return "bg-orange-100 text-orange-700";
      case "Pending":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl flex flex-col w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-xl font-black text-gray-800">
          Daftar Status Laporan
        </h3>
        <div className="relative w-full sm:w-auto">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Laporan"
            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 bg-gray-50"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-4 pr-6 font-bold text-gray-800 w-[40%]">
                Nama Laporan
              </th>
              <th className="pb-4 pr-6 font-bold text-gray-800 w-[25%]">
                Kategori
              </th>
              <th className="pb-4 pr-6 font-bold text-gray-800 w-[20%]">
                Wilayah
              </th>
              <th className="pb-4 font-bold text-gray-800 w-[15%]">Status</th>
            </tr>
          </thead>
          <tbody>
            {laporanList.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 font-bold text-gray-900">
                  {item.namaLaporan}
                </td>
                <td className="py-4 text-gray-600">{item.kategori}</td>
                <td className="py-4 text-gray-600">{item.wilayah}</td>
                <td className="py-4">
                  <span
                    className={`font-bold px-3 py-1.5 rounded-md text-[11px] uppercase tracking-wider ${getStatusStyle(item.status)}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="py-5 text-center">
                  <button className="inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-[#2563EB] font-bold px-4 py-2 rounded-lg text-xs transition-colors">
                    <FiEye className="w-4 h-4" /> Lihat Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabel;

import React, { useState, useEffect } from "react";
import { FiSearch, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";

const getStatusStyle = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-700";
    case "cancelled":
      return "bg-red-100 text-red-700";
    case "processed":
      return "bg-orange-100 text-orange-700";
    case "pending":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const statusLabel = {
  completed: "Done",
  cancelled: "Cancel",
  processed: "Inprogress",
  pending: "Pending",
};

const Tabel = () => {
  const navigate = useNavigate();
  const [laporanList, setLaporanList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReports() {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/api/report", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLaporanList(res.data);
        setFiltered(res.data);
      } catch (err) {
        setError("Gagal memuat laporan");
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      laporanList.filter(
        (item) =>
          item.title?.toLowerCase().includes(q) ||
          item.kabupaten?.toLowerCase().includes(q),
      ),
    );
  }, [search, laporanList]);

  return (
    <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl flex flex-col w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-xl font-black text-gray-800">
          Daftar Status Laporan
        </h3>
        <div className="relative w-full sm:w-auto">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Laporan"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 font-bold text-gray-900">{item.title}</td>
                <td className="py-4 text-gray-600">
                  {item.kabupaten}, {item.provinsi}
                </td>
                <td className="py-4">
                  <span
                    className={`font-bold px-3 py-1.5 rounded-md text-[11px] uppercase tracking-wider ${getStatusStyle(item.status)}`}
                  >
                    {statusLabel[item.status] || item.status}
                  </span>
                </td>
                <td className="py-4">
                  <button
                    onClick={() => navigate(`/admin/laporan/${item.id}`)}
                    className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-[#2563EB] font-bold px-4 py-2 rounded-lg text-xs transition-colors"
                  >
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

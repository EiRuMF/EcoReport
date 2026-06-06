import React from "react";
import { useState, useEffect } from "react";
import { FiFileText, FiCheckCircle, FiXCircle } from "react-icons/fi";
import api from "@/api/axios";

const Card = () => {
  const [stats, setStats] = useState({
    total: 0,
    resolved: 0,
    rejected: 0,
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/api/report", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const reports = res.data;

        setStats({
          total: reports.length,
          resolved: reports.filter((r) => r.status === "resolved").length,
          rejected: reports.filter((r) => r.status === "rejected").length,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="grid grid-cold-1 md:grid-cols-3 gap-6 mb-6 ">
      <div className="bg-white rounded-[24px] p-6 shadow-xl flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-gray-500 mb-1">
            Total Laporan Masuk
          </p>
          <h2 className="text-2xl font-black text-gray-500 mb-1">
            {stats.total}
          </h2>
        </div>
        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
          <FiFileText className="w-7 h-7 text-blue-600" />
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-6 shadow-xl flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-gray-500 mb-1">
            Laporan Selesai
          </p>
          <h2 className="text-3xl font-black text-green-500">
            {stats.resolved}
          </h2>
        </div>
        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
          <FiCheckCircle className="w-7 h-7 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-6 shadow-xl flex items-center justify-between">
        <div>
          <p className="text-xs font-bolc text-gray-500 mb-1">
            Laporan Ditolak
          </p>
          <h2 className="text-3xl font-black text-red-500">{stats.rejected}</h2>
        </div>
        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
          <FiXCircle className="w-7 h-7 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";
import Data from "./Data";
import Backgroundshort from "@/components/backgroundshort";
import api from "@/api/axios";

const Index = () => {
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReports() {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/api/report", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLaporan(res.data);
      } catch (err) {
        setError("Gagal memuat riwayat laporan");
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      <Backgroundshort className="z-10" />

      <Header className="z-50" total={laporan.length} />

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {laporan.map((item) => (
          <Data key={item.id} data={item} />
        ))}
      </div>
      {loading && <p className="text-gray-500">Memuat laporan...</p>}
      {error && <p className="text-red-500 text-xl">{error}</p>}
      {!loading && laporan.length === 0 && (
        <p className="text-gray-200">Belum ada laporan yang dibuat.</p>
      )}
    </div>
  );
};

export default Index;

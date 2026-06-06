import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheckCircle, FiXCircle } from "react-icons/fi";
import api from "@/api/axios";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import Backgroundshort from "@/components/backgroundshort";

const statusStyle = {
  pending: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Waitting" },
  resolved: { bg: "bg-green-100", text: "text-green-700", label: "Approved" },
  rejected: { bg: "bg-red-100", text: "text-red-700", label: "Declined" },
};

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laporan, setLaporan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/api/category", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCategories(res.data);
      } catch (err) {
        console.error("Gagal fetch kategori:", err);
      }
    }
    fetchCategories();
  }, []);

  const getCategoryName = (categoryId) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.name : `Kategori #${categoryId}`;
  };

  useEffect(() => {
    async function fetchDetail() {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get(`/api/report/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLaporan(res.data);
      } catch (err) {
        setError("Gagal memuat detail laporan");
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Memuat...</p>
      </div>
    );

  if (error && !laporan)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );

  const style = statusStyle[laporan?.status] || statusStyle.pending;
  const tanggal = laporan?.incident_date
    ? new Date(laporan.incident_date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 py-8">
      <Backgroundshort />
      <div className="relative z-10 w-[60vw] bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        {/* Back + Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/history")}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="font-bebas text-3xl text-[#1E3A8A]">
              Detail Laporan
            </h1>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-3">
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-bold ${style.bg} ${style.text}`}
          >
            {style.label}
          </span>
          <span className="text-xs text-gray-400">{tanggal}</span>
        </div>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">
            ❌ {error}
          </p>
        )}
        {successMsg && (
          <p className="text-green-600 text-sm bg-green-50 px-3 py-2 rounded-lg">
            ✅ {successMsg}
          </p>
        )}

        <div className="flex flex-col gap-4">
          {/* Judul dan Kategori */}
          <div className="flex flex-row w-full gap-x-5">
            {/* Judul */}
            <Field className="mb-3 text-center">
              <FieldLabel>Judul Laporan</FieldLabel>
              <div className="border border-gray-400 rounded-xl p-4 w-full">
                <p className="font-semibold text-gray-800">{laporan?.title}</p>
              </div>
            </Field>
            {/* Kategori */}
            <Field className="mb-3 text-center">
              <FieldLabel>Kategori Laporan</FieldLabel>
              <div className="border border-gray-400 rounded-xl p-4 w-full">
                <p className="font-semibold text-gray-800">
                  {getCategoryName(laporan?.category_id)}
                </p>
              </div>
            </Field>
          </div>
          <Field className="mb-3 text-center">
            <FieldLabel>Lokasi Laporan</FieldLabel>
            <div className="border border-gray-400 rounded-xl p-4 flex flex-row  gap-x-2 justify-start  w-full">
              {/* Kiri */}
              <div className="text-start">
                <p className="font-semibold text-start text-gray-800">
                  Provinsi :
                </p>
                <p className="font-semibold text-start text-gray-800">
                  Kabupaten :
                </p>
                <p className="font-semibold text-start text-gray-800">
                  Provinsi :
                </p>
                <p className="font-semibold text-start text-gray-800">
                  Provinsi :
                </p>
              </div>
              {/* Kanan */}
              <div className="text-start">
                <p>{laporan?.provinsi}</p>
                <p>{laporan?.kabupaten}</p>
                <p>{laporan?.kecamatan}</p>
                <p>{laporan?.desa}</p>
              </div>
            </div>
          </Field>
          <Field className="mb-3 text-center">
            <FieldLabel>Deskripsi</FieldLabel>
            <div className="border border-gray-400 rounded-xl p-4 ">
              <p className="text-gray-700 text-start leading-relaxed">
                {laporan?.description}
              </p>
            </div>
          </Field>

          {/* Foto Bukti */}
          {laporan?.attachments?.length > 0 && (
            <div className="bg-gray-100 rounded-xl p-4 md:col-span-2">
              <p className="text-xs text-gray-400 font-bold uppercase mb-3">
                Foto Bukti
              </p>
              <div className="flex flex-wrap gap-3">
                {laporan.attachments.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Bukti ${i + 1}`}
                    className="w-40 h-40 object-cover rounded-xl border border-gray-200"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {laporan?.status !== "pending" && (
          <div className={`rounded-xl p-4 text-center ${style.bg}`}>
            <p className={`font-bold ${style.text}`}>
              Laporan ini sudah {style.label.toLowerCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;

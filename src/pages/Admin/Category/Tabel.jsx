import React, { useState, useEffect } from "react";
import { FiSearch, FiEye } from "react-icons/fi";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/api/axios";

const Tabel = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function fetchCategories() {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/api/category", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(res.data);
    } catch (err) {
      setError("Gagal memuat kategori");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleAdd() {
    if (!name.trim()) {
      setSubmitError("Nama kategori tidak boleh kosong");
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    setSuccess(false);
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/api/category",
        { name, description: desc },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setName("");
      setDesc("");
      setSuccess(true);
      fetchCategories();
    } catch (err) {
      setSubmitError(err.response?.data?.message || "Gagal menambah kategori");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl flex flex-col w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-xl font-black text-gray-800">Daftar Category</h3>
      </div>
      {loading && (
        <p className="text-gray-400 text-sm mb-4">Memuat kategori...</p>
      )}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-4 pr-6 font-bold text-gray-800 w-[5%]">No</th>
              <th className="pb-4 pr-6 font-bold text-gray-800 w-[35%]">
                Kategori
              </th>
              <th className="pb-4 pr-6 font-bold text-gray-800 w-[35%]">
                Deskripsi
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 font-bold text-gray-900">{index + 1}</td>
                <td className="py-4 text-gray-600">{item.name}</td>
                <td className="py-4 text-gray-600">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {submitError && (
        <p className="text-red-500 text-sm mb-2">❌ {submitError}</p>
      )}
      {success && (
        <p className="text-green-600 text-sm mb-2">
          ✅ Kategori berhasil ditambahkan!
        </p>
      )}
      <div className="flex flex-col">
        <div className="flex flex-row justify-between gap-x-5">
          <Field className="">
            <FieldLabel>Add Category</FieldLabel>
            <Input
              type="text"
              placeholder="Contoh: Banjir"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" p-6 border border-black rounded-lg bg-white text-gray-600"
            />
          </Field>
          <Field className="">
            <FieldLabel>Deskripsi</FieldLabel>
            <Input
              type="text"
              placeholder="Deskripsi kategori"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="p-6 border border-black rounded-lg bg-white text-gray-600"
            />
          </Field>
        </div>

        <Button
          type="submit"
          onClick={handleAdd}
          disabled={submitting}
          className="w-24 p-5 mt-2 bg-[#2563EB] rounded-xl text-white"
        >
          {loading ? "Mengirim..." : success ? "Added" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default Tabel;

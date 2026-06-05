import React from "react";
import { useState } from "react";
import Backgroundshort from "@/components/backgroundshort";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LocationDropdown from "@/components/LocationDropdown";
import { Textarea } from "@/components/ui/textarea";

const Detail = () => {
  const [lokasi, setLokasi] = useState({});
  const [jenisMasalah, setJenisMasalah] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [file, setFile] = useState(null);
  const [deskripsi, setDeskripsi] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loadingCat, setLoadingCat] = useState(true);

  return (
    <div>
      <Backgroundshort />
      <form className="w-300  min-h-screen relative items-start bg-white rounded-xl justify-start text-black p-6">
        <div className="text-start font-poppins mb-5">
          <h1 className="font-bebas text-4xl text-[#1E3A8A]">
            Buat Laporan Baru
          </h1>
          <p className="text-gray-600">
            Laporkan masalah yang anda temui agar segera ditangani{" "}
          </p>
        </div>

        <Field className="mb-3">
          <FieldLabel>Judul Laporan</FieldLabel>
          <Input
            type="text"
            placeholder="Contoh: Banjir di Jalan Sudirman"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-3 border border-black rounded-lg bg-white text-gray-600"
          />
        </Field>

        <Select onValueChange={(val) => setCategory(val)} disabled={loadingCat}>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-3">
            Kategori Laporan
          </FieldLabel>
          <SelectTrigger className="w-[300px] mb-3 px-3 py-6 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600">
            <SelectValue
              placeholder={
                loadingCat ? "Memuat kategori..." : "Pilih kategori masalah"
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Kategori Masalah</SelectLabel>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={String(cat.id)}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <LocationDropdown onChange={setLokasi} className="w-full" />

        <Field className="mb-3 mt-3 w-52">
          <FieldLabel>Tanggal Kejadian</FieldLabel>
          <Input
            type="datetime-local"
            onChange={(e) => setIncidentDate(e.target.value)}
            className="px-3 py-3 border border-black rounded-lg bg-white text-gray-600"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-demo-api-key">
            Keterangan Detail
          </FieldLabel>
          <Textarea
            id="text"
            placeholder="Type your message here."
            onChange={(e) => setDescription(e.target.value)}
            className="mb-3 px-3 py-10 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
          />
        </Field>

        <Field className="w-60">
          <FieldLabel>Upload File</FieldLabel>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
          />
          <FieldDescription>Upload foto bukti laporan</FieldDescription>
        </Field>
      </form>
    </div>
  );
};

export default Detail;

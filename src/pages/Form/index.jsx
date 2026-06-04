import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import Backgroundshort from "@/components/backgroundshort.jsx";
import LocationDropdown from "@/components/LocationDropdown";
import api from "@/api/axios";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lokasi, setLokasi] = useState({});
  const [jenisMasalah, setJenisMasalah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      provinsi_kode: lokasi.provinsi_kode,
      kab_kode: lokasi.kab_kode,
      kec_kode: lokasi.kec_kode,
      desa_kode: lokasi.desa_kode,
      jenis_masalah: jenisMasalah,
      deskripsi: deskripsi,
    };

    console.log("Data terkirim", payload);

    // Contoh fetch ke BE:
    // await fetch('/api/laporan', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // })
  }

  return (
    <div>
      <Backgroundshort />
      <form
        onSubmit={handleSubmit}
        className="w-[1200px] relative items-start bg-white rounded-xl justify-start text-black p-6"
      >
        <div className="text-start font-poppins mb-5">
          <h1 className="font-bebas text-4xl text-[#1E3A8A]">
            Buat Laporan Baru
          </h1>
          <p className="text-gray-600">
            Laporkan masalah yang anda temui agar segera ditangani{" "}
          </p>
        </div>

        <Select>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2">
            Kategori Laporan
          </FieldLabel>
          <SelectTrigger className="w-[300px] mb-3 px-3 py-6 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600">
            <SelectValue placeholder="Pilih kategori masalah" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Masalah</SelectLabel>
              <SelectItem value="apple">Banjir</SelectItem>
              <SelectItem value="banana">Jalan Umum</SelectItem>
              <SelectItem value="blueberry">Taman</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <LocationDropdown onChange={setLokasi} className="w-full" />

        <Field className="mb-3">
          <FieldLabel>Tanggal Kejadian</FieldLabel>
          <Input
            type="datetime-local"
            onChange={(e) => setIncidentDate(e.target.value)}
            className="w-[300px] px-3 py-3 border border-black rounded-lg bg-white text-gray-600"
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

        <Field>
          <FieldLabel>Upload File</FieldLabel>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-10 mb-3 px-3 py-3 border border-black rounded-lg bg-white text-gray-600 placeholder:text-gray-600"
          />
          <FieldDescription>Upload foto bukti laporan</FieldDescription>
        </Field>

        <Button
          type="submit"
          className="mt-10 w-full p-6 bg-[#2563EB] rounded-2xl text-white"
        >
          {loading ? "Mengirim..." : success ? "Berhasil! ✅" : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default index;

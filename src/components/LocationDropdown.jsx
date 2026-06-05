import { useState } from "react";
import { provinsi, kabupaten, kecamatan, desa } from "daftar-wilayah-indonesia";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function LocationDropdown({ onChange }) {
  const [selectedProv, setSelectedProv] = useState({ kode: "", nama: "" });
  const [selectedKab, setSelectedKab] = useState({ kode: "", nama: "" });
  const [selectedKec, setSelectedKec] = useState({ kode: "", nama: "" });
  const [selectedDesa, setSelectedDesa] = useState({ kode: "", nama: "" });

  const listProvinsi = provinsi();
  const listKabupaten = selectedProv.kode ? kabupaten(selectedProv.kode) : [];
  const listKecamatan = selectedKab.kode ? kecamatan(selectedKab.kode) : [];
  const listDesa = selectedKec.kode ? desa(selectedKec.kode) : [];

  function handleProvinsi(kode) {
    const nama = listProvinsi.find((p) => p.kode === kode)?.nama || "";
    setSelectedProv({ kode, nama });
    setSelectedKab({ kode: "", nama: "" });
    setSelectedKec({ kode: "", nama: "" });
    setSelectedDesa({ kode: "", nama: "" });
    onChange?.({
      provinsi_kode: kode,
      provinsi_nama: nama,
      kab_kode: "",
      kab_nama: "",
      kec_kode: "",
      kec_nama: "",
      desa_kode: "",
      desa_nama: "",
    });
  }

  function handleKabupaten(kode) {
    const nama = listKabupaten.find((k) => k.kode === kode)?.nama || "";
    setSelectedKab({ kode, nama });
    setSelectedKec({ kode: "", nama: "" });
    setSelectedDesa({ kode: "", nama: "" });
    onChange?.({
      provinsi_kode: selectedProv.kode,
      provinsi_nama: selectedProv.nama,
      kab_kode: kode,
      kab_nama: nama,
      kec_kode: "",
      kec_nama: "",
      desa_kode: "",
      desa_nama: "",
    });
  }

  function handleKecamatan(kode) {
    const nama = listKecamatan.find((k) => k.kode === kode)?.nama || "";
    setSelectedKec({ kode, nama });
    setSelectedDesa({ kode: "", nama: "" });
    onChange?.({
      provinsi_kode: selectedProv.kode,
      provinsi_nama: selectedProv.nama,
      kab_kode: selectedKab.kode,
      kab_nama: selectedKab.nama,
      kec_kode: kode,
      kec_nama: nama,
      desa_kode: "",
      desa_nama: "",
    });
  }

  function handleDesa(kode) {
    const nama = listDesa.find((d) => d.kode === kode)?.nama || "";
    setSelectedDesa({ kode, nama });
    onChange?.({
      provinsi_kode: selectedProv.kode,
      provinsi_nama: selectedProv.nama,
      kab_kode: selectedKab.kode,
      kab_nama: selectedKab.nama,
      kec_kode: selectedKec.kode,
      kec_nama: selectedKec.nama,
      desa_kode: kode,
      desa_nama: nama,
    });
  }

  return (
    <div className="flex flex-row justify-between  w-full gap-x-8">
      <div className="w-full">
        <div>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2">
            Provinsi
          </FieldLabel>
          <Select value={selectedProv.kode} onValueChange={handleProvinsi}>
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Provinsi —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="max-h-72 overflow-y-auto">
                <SelectLabel>Provinsi</SelectLabel>
                {listProvinsi.map((p) => (
                  <SelectItem key={p.kode} value={p.kode}>
                    {p.nama}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2 mt-3">
            Kota / Kabupaten
          </FieldLabel>
          <Select
            value={selectedKab.kode}
            onValueChange={handleKabupaten}
            disabled={!selectedProv}
          >
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Kota/Kabupaten —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="max-h-72 overflow-y-auto">
                <SelectLabel>Kota / Kabupaten</SelectLabel>
                {listKabupaten.map((k) => (
                  <SelectItem key={k.kode} value={k.kode}>
                    {k.nama}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full">
        <div>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2">
            Kecamatan
          </FieldLabel>
          <Select
            value={selectedKec.kode}
            onValueChange={handleKecamatan}
            disabled={!selectedKab}
          >
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Kecamatan —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="max-h-72 overflow-y-auto">
                <SelectLabel>Kecamatan</SelectLabel>
                {listKecamatan.map((k) => (
                  <SelectItem key={k.kode} value={k.kode}>
                    {k.nama}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2 mt-3">
            Desa / Kelurahan
          </FieldLabel>
          <Select
            value={selectedDesa.kode}
            onValueChange={handleDesa}
            disabled={!selectedKec}
          >
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Desa/Kelurahan —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="max-h-72 overflow-y-auto">
                <SelectLabel>Desa / Kelurahan</SelectLabel>
                {listDesa.map((d) => (
                  <SelectItem key={d.kode} value={d.kode}>
                    {d.nama}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

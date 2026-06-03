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
  const [selectedProv, setSelectedProv] = useState("");
  const [selectedKab, setSelectedKab] = useState("");
  const [selectedKec, setSelectedKec] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");

  const listProvinsi = provinsi();
  const listKabupaten = selectedProv ? kabupaten(selectedProv) : [];
  const listKecamatan = selectedKab ? kecamatan(selectedKab) : [];
  const listDesa = selectedKec ? desa(selectedKec) : [];

  function handleProvinsi(kode) {
    setSelectedProv(kode);
    setSelectedKab("");
    setSelectedKec("");
    setSelectedDesa("");
    onChange?.({
      provinsi_kode: kode,
      kab_kode: "",
      kec_kode: "",
      desa_kode: "",
    });
  }

  function handleKabupaten(kode) {
    setSelectedKab(kode);
    setSelectedKec("");
    setSelectedDesa("");
    onChange?.({
      provinsi_kode: selectedProv,
      kab_kode: kode,
      kec_kode: "",
      desa_kode: "",
    });
  }

  function handleKecamatan(kode) {
    setSelectedKec(kode);
    setSelectedDesa("");
    onChange?.({
      provinsi_kode: selectedProv,
      kab_kode: selectedKab,
      kec_kode: kode,
      desa_kode: "",
    });
  }

  function handleDesa(kode) {
    setSelectedDesa(kode);
    onChange?.({
      provinsi_kode: selectedProv,
      kab_kode: selectedKab,
      kec_kode: selectedKec,
      desa_kode: kode,
    });
  }

  return (
    <div className="flex flex-row justify-between w-full gap-x-8">
      <div className="w-full">
        <div>
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2">
            Provinsi
          </FieldLabel>
          <Select value={selectedProv} onValueChange={handleProvinsi}>
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Provinsi —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2">
            Kota / Kabupaten
          </FieldLabel>
          <Select
            value={selectedKab}
            onValueChange={handleKabupaten}
            disabled={!selectedProv}
          >
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Kota/Kabupaten —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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
            value={selectedKec}
            onValueChange={handleKecamatan}
            disabled={!selectedKab}
          >
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Kecamatan —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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
          <FieldLabel htmlFor="input-demo-api-key" className="mb-2">
            Desa / Kelurahan
          </FieldLabel>
          <Select
            value={selectedDesa}
            onValueChange={handleDesa}
            disabled={!selectedKec}
          >
            <SelectTrigger className="w-full px-3 py-6 border border-black rounded-lg bg-white text-gray-600">
              <SelectValue placeholder="— Pilih Desa/Kelurahan —" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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

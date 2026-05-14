import React from "react";
import Header from "./Header";
import Data from "./Data";

const laporan = [
  {
    id: 1,
    status: "Selesai",
    tanggal: "13 Okt 2026",
    title: "Jalan berlubang",
    desc: "Laporan terkait kerusakan infrastruktur di wilayah sekitar",
  },
  {
    id: 2,
    status: "Diproses",
    tanggal: "14 Okt 2026",
    title: "Sampah menumpuk",
    desc: "Sampah menumpuk di pinggir jalan utama",
  },
  {
    id: 3,
    status: "Menunggu",
    tanggal: "15 Okt 2026",
    title: "Lampu jalan mati",
    desc: "Lampu jalan di area komplek tidak menyala",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      <Header />

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {laporan.map((item) => (
          <Data key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Index;

import { useState } from "react";

import Card from "./Card";
import Backgroundshort from "@/components/backgroundshort";
import Statistik from "./Statistik";
import TabelLaporan from "../Laporan/Tabel";
import TabelCategory from "../Category/Tabel";

const getStatusStyle = (status) => {
  switch (status) {
    case "Done":
      return "bg-green-100 text-green-700";
    case "Cancel":
      return "bg-red-100 text-red-700";
    case "Inprogress":
      return "bg-orange-100 text-orange-700";
    case "Pending":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Index = () => {
  return (
    <div className="flex items-center justify-center overflow-y-hidden min-h-screen w-full">
      <div className="absolute inset-0 pointer-events-none py-10 z-10">
        <Backgroundshort />
      </div>

      <div className="relative z-10 w-full max-w-400 flex flex-col gap-8 mt-10">
        <div></div>
        <div>
          <Card />
        </div>

        {/* Tabel Laporan */}
        <div className="mt-6 w-full">
          <TabelLaporan />
        </div>
        {/* Tabel Category */}
        <div className="mt-6 mb-10 w-full">
          <TabelCategory />
        </div>
      </div>
    </div>
  );
};

export default Index;

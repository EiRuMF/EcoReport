import React from "react";
import { Button } from "@/components/ui/button";

const Data = ({ data }) => {
  return (
    <div className="w-[370px] flex flex-col relative items-center bg-white rounded-xl justify-between p-5 gap-y-3 font-poppins">
      {/* Header */}
      <div className="flex justify-between gap-x-22">
        <div className="bg-[#DCFCE7] rounded-xl">
          <p className="text-sm text-[#15803D] font-semibold px-3 py-1">
            Status: {data.status}
          </p>
        </div>

        <p className="text-sm">{data.tanggal}</p>
      </div>
      {/* Desc Laporan */}
      <div className="flex flex-col text-start gap-y-4">
        <h1 className="font-semibold text-xl">{data.title}</h1>
        <p className="text-sm">{data.desc}</p>
      </div>
      {/* Detail */}
      <div className="flex w-full">
        <Button className="w-full p-6 text-[#2563EB] rounded-2xl bg-[#F1F5F9] hover:bg-[#DBEAFE]">
          Lihat Detail
        </Button>
      </div>
    </div>
  );
};

export default Data;

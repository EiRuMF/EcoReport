import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const statusStyle = {
  pending: { bg: "bg-[#FEF9C3]", text: "text-[#A16207]", label: "Menunggu" },
  processed: { bg: "bg-[#DBEAFE]", text: "text-[#1D4ED8]", label: "Diproses" },
  completed: { bg: "bg-[#DCFCE7]", text: "text-[#15803D]", label: "Selesai" },
};

const Data = ({ data }) => {
  const navigate = useNavigate();
  const style = statusStyle[data.status] || statusStyle.pending;

  const tanggal = new Date(data.incident_date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-[370px] flex flex-col relative items-center bg-white rounded-xl justify-between p-5 gap-y-3 font-poppins">
      <div className="flex justify-between gap-x-22 w-full">
        <div className={`${style.bg} rounded-xl`}>
          <p className={`text-sm ${style.text} font-semibold px-3 py-1`}>
            Status: {style.label}
          </p>
        </div>
        <p className="text-sm">{tanggal}</p>
      </div>

      <div className="flex flex-col text-start gap-y-4 w-full">
        <h1 className="font-semibold text-xl">{data.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{data.description}</p>
      </div>

      <div className="flex w-full">
        <Button
          onClick={() => navigate(`/history/${data.id}`)}
          className="w-full p-6 text-[#2563EB] rounded-2xl bg-[#F1F5F9] hover:bg-[#DBEAFE]"
        >
          Lihat Detail
        </Button>
      </div>
    </div>
  );
};

export default Data;

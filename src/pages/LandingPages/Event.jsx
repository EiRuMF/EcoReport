import React from "react";
import { FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const Event = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 flex justify-start">
      <div className="flex flex-col items-start w-full lg:w-[70%]">
        <h2 className="text-4xl md:text-5xl font-['Bebas_Neue'] tracking-wider mb-4 text-white flex gap-2">
          UPCOMING <span className="text-[#F5A623]">EVENT!!!</span>
        </h2>

        <div
          className="bg-white rounded-[32px] p-8 md:p-10 w-full flex flex-col  md:flex-row justify-between items-start 
              md:items-end gap-8 shadow-2xl"
        >
          <div className="flex flex-col gap-4 flex-1 w-full">
            <h3 className="text-5xl md:text-[4rem] font-['Bebas_Neue'] text-[#1C2938] tracking-wide text-left">
              KERJA BAKTI <br /> PEMBERSIHAN SUNGAI
            </h3>

            {/* deskripsi event */}
            <div className="flex flex-col gap-3 text-gray-500 font-bold mt-2">
              <div className="flex items-center gap-4">
                <FiCalendar className="w-6 h-6 text-[#F5A623]" />
                <span>25 Juni 2026</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin className="w-6 h-6 text-[#F5A623]" />
                <span>Sungai Ciliwung - Jakarta</span>
              </div>
              <div className="flex items-center gap-4">
                <FiUsers className="w-6 h-6 text-[#F5A623]" />
                <span>128 Orang Sudah Daftar</span>
              </div>
            </div>
          </div>

          <Button className="bg-[#3168FF] hover:bg-blue-700 text-white font-['Bebas_Neue'] text-2xl py-7 px-10 rounded-full transition-colors shadow-lg w-full md:w-auto tracking-widest">
            Daftar Sekarang!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Event;

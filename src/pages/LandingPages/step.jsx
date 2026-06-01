import React from "react";
import { STEPS_DATA } from "@/constant/dataLP.js";

const Step = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto mt-48 px-6">
      <div className="mb-10 w-full md:w-2/3 text-left">
        <h2 className="font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight">
          TIGA LANGKAH MUDAH <br /> UNTUK MELAPORKAN
        </h2>
        <p className="text-white/90 mt-4 max-w-lg text-base md:text-lg font-medium">
          Proses sederhana yang dirancang agar siapa saja bisa melaporkan
          masalah di lingkungan mereka.
        </p>
      </div>

      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl relative">
        {/* Kotak step */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS_DATA.map((step) => (
            <div
              key={step.id}
              className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Desain step */}
              <div className="w-12 h-12 bg-[#3168FF] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md relative z-10">
                {step.id}
              </div>
              <h3 className="font-black text-2xl text-[#1E3A8A] mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-500 font-medium relative z-10 mb-8">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Step;

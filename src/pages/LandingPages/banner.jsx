import React from "react";
import { STATS_DATA } from "@/constant/dataLP";

const StatsBanner = () => {
  return (
    <section className="w-full bg-[#F5A623] mt-32 py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-around gap-12 text-center">
        {STATS_DATA.map((stat) => (
          <div key={stat.id}>
            <h3
              className={`font-black text-5xl ${stat.id === 2 ? "text-[#3168FF]" : "text-white"}`}
            >
              {stat.value}
            </h3>
            <p className="font-bold text-[#1E3A8A] mt-2 text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;

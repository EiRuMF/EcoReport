import React from "react";
import { FiMapPin } from "react-icons/fi";

const Statistik = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <FiMapPin className="text-blue-600 w-6 h-6" />
        <h3 className="text-lg font-bold text-blue-600">Statistik Wilayah</h3>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <div className="flex justify-between text-xs font-bold text-gray-800 mb-2">
            <span>Bandung</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-gray-800 mb-2">
            <span>Jakarta</span>
            <span>80%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-gray-800 mb-2">
            <span>Surabaya</span>
            <span>60%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full w-[60%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-gray-800 mb-2">
            <span>Medan</span>
            <span>40%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full w-[40%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistik;

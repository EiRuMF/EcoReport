import React from "react";
import { FiAlertCircle, FiMapPin, FiSend, FiMessageSquare } from "react-icons/fi";
import cityBg from "@/assets/CityBackground.png"; 

const Backgroundshort = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      
      <FiMessageSquare className="absolute top-[12%] left-[12%] w-20 h-20 text-[#a8825b] opacity-70 -rotate-12" strokeWidth={1.5} />
      
      <FiSend className="absolute top-[48%] left-[7%] w-14 h-14 text-[#a8825b] opacity-70 -rotate-45" strokeWidth={1} />

      <FiAlertCircle className="absolute top-[12%] right-[10%] w-16 h-16 text-[#a8825b] opacity-70" strokeWidth={1.5} />

      <FiMapPin className="absolute top-[42%] right-[20%] w-10 h-10 text-[#a8825b] opacity-70" strokeWidth={1.5} />

      <div
        className="absolute -bottom-10 left-0 w-full h-75 md:h-112 bg-cover bg-bottom opacity-15"
        style={{ backgroundImage: `url(${cityBg})` }}
      ></div>
      
    </div>
  );
};

export default Backgroundshort;
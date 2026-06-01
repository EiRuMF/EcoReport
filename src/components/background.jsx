import React from "react";
import { FiAlertCircle, FiMapPin, FiSend } from "react-icons/fi";
import cityBg from "@/assets/CityBackground.png";

const Background = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <FiAlertCircle
        className="absolute top-[5%] left-[5%] w-16 h-16 text-[#a8825b] opacity-67"
        strokeWidth={1.5}
      />
      <FiSend
        className="absolute top-[18%] left-[3%] w-12 h-12 text-[#a8825b] opacity-70 -rotate-45"
        strokeWidth={1}
      />
      <FiMapPin
        className="absolute top-[8%] right-[8%] w-14 h-14 text-[#a8825b] opacity-70"
        strokeWidth={1.5}
      />
      <FiAlertCircle
        className="absolute top-[23%] left-[85%] w-16 h-16 text-[#a8825b] opacity-67"
        strokeWidth={1.5}
      />

      <FiAlertCircle
        className="absolute top-[28%] left-[6%] w-12 h-12 text-[#a8825b] opacity-70"
        strokeWidth={1.5}
      />
      <FiSend
        className="absolute top-[32%] right-[5%] w-14 h-14 text-[#a8825b] opacity-70 -rotate-12"
        strokeWidth={1}
      />
      <FiSend
        className="absolute top-[38%] left-[8%] w-10 h-10 text-[#a8825b] opacity-70 -rotate-45"
        strokeWidth={1.5}
      />

      <FiMapPin
        className="absolute top-[55%] left-[4%] w-16 h-16 text-[#a8825b] opacity-70"
        strokeWidth={1.5}
      />
      <FiSend
        className="absolute top-[60%] right-[5%] w-14 h-14 text-[#a8825b] opacity-70 -rotate-12"
        strokeWidth={1.5}
      />

      <FiAlertCircle
        className="absolute bottom-[10%] left-[8%] w-16 h-300 text-[#a8825b] opacity-70"
        strokeWidth={1.5}
      />
      <FiMapPin
        className="absolute bottom-[5%] right-[12%] w-12 h-300 text-[#a8825b] opacity-70"
        strokeWidth={1.5}
      />

      <div
        className="absolute -bottom-10 left-0 w-full h-75 md:h-112 bg-cover bg-bottom opacity-15"
        style={{ backgroundImage: `url(${cityBg})` }}
      ></div>
    </div>
  );
};

export default Background;

import React from "react";

const InfoCard = ({ icon: Icon, title, lines }) => {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-2xl flex flex-col justify-center flex-1">
      <div className="flex items-center gap-5 mb-4">
        <div className="w-14 h-14 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 shadow-md">
          <Icon className="w-7 h-7 text-[#F5A623]" />
        </div>
        <h2 className="font-bebas text-4xl text-[#1E293B] uppercase tracking-wide text-left m-0">
          {title}
        </h2>
      </div>
      <div className="pl-19 text-left">
        {lines.map((line, index) => (
          <p
            key={index}
            className="text-gray-700 font-bold text-[15px] md:text-lg leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;

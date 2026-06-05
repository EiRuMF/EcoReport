import React, { useState } from "react";
import Backgroundshort from "@/components/backgroundshort.jsx";
import { FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";

import InfoCard from "./InfoCard";
import RSVP from "./RSVP";

const EventPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-120 px-6 lg:px-12 font-sans text-left">
      <Backgroundshort />

      <div className="relative z-10 w-full max-w-275 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-8">
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col justify-between h-full text-left">
          <div>
            <h1 className="font-bebas text-5xl md:text-[64px] text-[#1E293B] uppercase leading-[1.05] mb-6 tracking-normal text-left">
              Kerja Bakti <br /> Pembersihan Sungai
            </h1>
            <p className="text-gray-600 text-sm md:text-[15px] font-medium leading-relaxed text-justify mb-10">
              Program Kerja Bakti pembersihan sungai di daerah Sungai Ciliwung
              Jakarta, program ini bertujuan untuk memperbaiki dan membersihkan
              fasilitas yang terdapat di sekitaran area Sungai Ciliwung. Dengan
              adanya program ini diharapkan dapat memperkuat semangat kerja
              bakti warga setempat dan meningkatkan wawasan terkait kebersihan
              sungai.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 mt-auto">
            <div className="flex items-center gap-2 text-[#F5A623] font-bold text-sm">
              <FiUsers className="w-5 h-5" />
              <span>128 Orang Sudah Daftar</span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-[16px] text-lg w-full max-w-70 shadow-lg shadow-blue-500/30 transition-transform hover:scale-105"
            >
              DAFTAR SEKARANG!
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 h-full">
          <InfoCard
            icon={FiCalendar}
            title="When"
            lines={["09.00-15.00 WIB", "25 Juni 2026"]}
          />
          <InfoCard
            icon={FiMapPin}
            title="Where"
            lines={[
              "Sungai Ciliwung, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta",
            ]}
          />
        </div>
      </div>

      <RSVP
        showModal={showModal}
        handleClose={handleClose}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </div>
  );
};

export default EventPage;

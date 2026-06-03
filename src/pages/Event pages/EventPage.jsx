import React, { useState } from "react";
import Backgroundshort from "@/components/backgroundshort.jsx";
import { FiCalendar, FiMapPin, FiUsers, FiX, FiCheck } from "react-icons/fi";

// form komponen
const FormInput = ({ label, type = "text", defaultValue, readOnly }) => (
  <div>
    <label className="block text-[15px] text-gray-700 mb-1.5">{label}</label>
    <input
      type={type}
      defaultValue={defaultValue}
      readOnly={readOnly}
      className={`w-full border border-gray-300 rounded-[6px] px-3 py-2.5 text-[15px] focus:outline-none ${
        readOnly 
          ? "bg-[#EEF2FF] text-gray-800" 
          : "focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      }`}
    />
  </div>
);

// Komponen  Kartu "When" & "Where"
const InfoCard = ({ icon: Icon, title, lines }) => (
  <div className="bg-white rounded-[32px] p-6  md:p-10 shadow-2xl flex flex-col justify-center flex-1">
    <div className="flex items-center gap-5 mb-4 ">
      <div className="w-14 h-14 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 shadow-md">
        <Icon className="w-7 h-7 text-[#F5A623]" />
      </div>
      <h2 className="font-bebas text-4xl text-[#1E293B] uppercase tracking-wide text-left m-0">
        {title}
      </h2>
    </div>
    <div className="pl-19 text-left">
      {lines.map((line, index) => (
        <p key={index} className="text-gray-700 font-bold text-[15px] md:text-lg leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  </div>
);

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
              Program Kerja Bakti pembersihan sungai di daerah Sungai Ciliwung Jakarta, program ini bertujuan untuk memperbaiki dan membersihkan fasilitas yang terdapat di sekitaran area Sungai Ciliwung. Dengan adanya program ini diharapkan dapat memperkuat semangat kerja bakti warga setempat dan meningkatkan wawasan terkait kebersihan sungai.
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
            lines={["Sungai Ciliwung, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta"]} 
          />
        </div>
      </div>

      {/* daftar pop up */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[12px] w-full max-w-160 max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button onClick={handleClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors">
              <FiX className="w-6 h-6" />
            </button>

            {/* sukses */}
            {isSubmitted ? (
              <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <FiCheck className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">RSVP Confirmed!</h2>
                <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">Pendaftaran Anda telah berhasil. Detail acara telah kami kirimkan ke email Anda.</p>
                <button onClick={handleClose} className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-[12px] transition-colors w-full">
                  Tutup & Kembali
                </button>
              </div>
            ) : (
              // form
              <div>
                <h2 className="text-[26px] font-normal text-gray-900 mb-6 tracking-tight">Attendee information</h2>
                <form
                  onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                  className="flex flex-col gap-5 font-sans"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput label="First name" />
                    <FormInput label="Last name" />
                  </div>
                  
                  <FormInput label="Email" type="email" />

                  <div className="border border-gray-300 rounded-[6px] p-3.5 text-[14px] text-gray-700">
                    By submitting this application, you agree that a number derived from your email address may be shared with other teams at LaporIn to evaluate the effectiveness of this program.
                  </div>

                  <div>
                    <label className="block text-[15px] text-gray-700 mb-1.5">How did you learn about this event?</label>
                    <select className="w-full border border-gray-300 rounded-[6px] px-3 py-2.5 text-[15px] focus:outline-none focus:border-blue-500 bg-white">
                      <option>Notified by this community</option>
                      <option>Social Media</option>
                      <option>Friends</option>
                    </select>
                  </div>

                  <FormInput label="What is your phone number?" />
                  <FormInput label="What company or organization are you a part of, if any?" />

                  <div className="flex items-start gap-3 mt-2">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <label className="text-[14px] text-gray-700 leading-snug">
                      I have read and agree to the <a href="#" className="text-[#1A73E8] hover:underline">LaporIn Event Participation Terms</a> and acknowledge that LaporIn will use my information in accordance with its Privacy Policy.
                    </label>
                  </div>

                  <div className="mt-4 flex justify-end gap-3 border-t border-gray-100 pt-5">
                    <button type="button" onClick={handleClose} className="px-5 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                      Cancel
                    </button>
                    <button type="submit" className="px-6 py-2 text-[14px] font-medium bg-[#1A73E8] hover:bg-blue-700 text-white rounded-md transition-colors">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage;
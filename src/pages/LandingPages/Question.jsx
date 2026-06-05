import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  // menampung form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    question: "",
  });
  // loading
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post("/api/question", formData);
      alert("Pertanyaan berhasil dikirim!");
      setFormData({ fullName: "", email: "", question: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Gagal mengirim pertanyaan.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-full px-6 py-2 mb-6 shadow-md flex items-center justify-center">
          <span className="font-['Bebas_Neue'] text-4xl md:text-4xl text-[#1E3A8A] tracking-widest pt-1">
            PUNYA PERTANYAAN?
          </span>
        </div>

        <h2 className="text-5xl md:text-[5.5rem] font-['Bebas_Neue'] text-white leading-none tracking-wide text-center mb-12">
          KAMI SIAP MEMBANTU <br /> SETIAP SAAT
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-3xl rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col gap-6"
        >
          {/* Nama */}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Nama Anda"
            required
            minLength={3}
            className="w-full border-2 border-gray-100 rounded-xl px-5 py-4 text-sm md:text-base font-bold text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors font-sans"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Anda"
            className="w-full border-2 border-gray-100 rounded-xl px-5 py-4 text-sm md:text-base font-bold text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors font-sans"
          />

          {/* Pertanyaan */}
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Pertanyaan Anda"
            rows="5"
            required
            minLength={10}
            className="w-full border-2 border-gray-100 rounded-xl px-5 py-4 text-sm md:text-base font-bold text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors font-sans resize-none"
          ></textarea>

          {/* Tombol Kirim */}
          <Button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-7 rounded-xl text-lg transition-colors shadow-md mt-2 font-sans tracking-normal ${
              isLoading ? "bg-gray-400" : "bg-[#2563EB] hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Mengirim..." : "Kirim Pertanyaan"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

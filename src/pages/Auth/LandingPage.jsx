import React from "react";
import Navbar from "@/components/ui/navbar.jsx";
import Hero from "@/components/ui/hero.jsx";
import Step from "@/components/ui/step.jsx";
import Banner from "@/components/ui/banner.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full font-sans bg-[#3168FF] relative overflow-x-hidden pb-10">
      <Navbar />
      <Hero />
      <Step />
      <Banner />
    </div>
  );
};

export default LandingPage;

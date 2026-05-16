import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hero from "@/pages/LandingPages/hero.jsx";
import Step from "@/pages/LandingPages/step.jsx";
import Banner from "@/pages/LandingPages/banner.jsx";
import Event from "@/pages/LandingPages/Event.jsx";
import Blog from "@/pages/LandingPages/Blog.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full font-sans pb-10">
      <Hero />
      <Step />
      <Banner />
      <Event />
      <Blog />
    </div>
  );
};

export default LandingPage;

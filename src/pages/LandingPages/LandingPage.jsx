import React from "react";
// Import Background Component
import Background from "@/components/background.jsx";
import Hero from "@/pages/LandingPages/hero.jsx";
import Step from "@/pages/LandingPages/step.jsx";
import Banner from "@/pages/LandingPages/banner.jsx";
import Event from "@/pages/LandingPages/Event.jsx";
import Blog from "@/pages/LandingPages/Blog.jsx";
import Question from "@/pages/LandingPages/Question.jsx";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full font-sans pb-10">
      <Background />

      <div className="relative z-10">
        <Hero />
        <Step />
        <Banner />
        <Event />
        <Blog />
        <Question />
      </div>
    </div>
  );
};

export default LandingPage;

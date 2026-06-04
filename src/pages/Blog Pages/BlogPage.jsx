import React from "react";
import Backgroundshort from "@/components/backgroundshort.jsx";

import Article from "./Article";
import Trending from "./Trending";

const BlogPage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-120 px-6 lg:px-12 font-sans text-left">
      <Backgroundshort />

      <div className="relative z-10 w-full max-w-275 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-8">
        <Article />
        <Trending />
      </div>
    </div>
  );
};

export default BlogPage;

import React from "react";
import { BlogCard } from "../BlogCard/BlogCard";

export const BlogSection = () => {
  return (
    <div
      className="h-screen bg-color6 overflow-hidden grid grid-cols-1 items-center justify-start gap-8 xl:gap-0 xl:h-screen"
      style={{ justifyItems: "center", alignItems: "center" }}
    >
      <h2 className="ml-3 text-4xl text-center text-white pt-10 pb-4">
        Descubre mi blog:
      </h2>
      <div className="w-full h-full grid-cols-2  overflow-hidden">
        <BlogCard />
      </div>

      <button className="bg-color7 py-2 px-4 rounded-full mb-5 text-center xl:w-fit xl:text-2xl xl:py-4 xl:px-6">
        Descubrir más
      </button>
    </div>
  );
};

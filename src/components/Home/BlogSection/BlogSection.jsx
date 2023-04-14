import React from "react";
import { BlogCard } from "../BlogCard/BlogCard";

export const BlogSection = () => {
  return (
    <div
      className="h-[1400px] bg-dark-green overflow-hidden grid grid-cols-1 items-center justify-start gap-8 xl:gap-0"
      style={{ justifyItems: "center", alignItems: "center" }}
    >
      <h2 className="ml-3 text-4xl text-center text-white pt-10 pb-4">
        Descubre mi blog:
      </h2>
      <div className="w-full h-fit grid-cols-2 ">
        <BlogCard />
      </div>

      <button className="bg-bright-green py-2 px-4 rounded-full mb-5 text-center xl:w-fit xl:text-2xl xl:py-4 xl:px-6">
        Descubrir más
      </button>
    </div>
  );
};

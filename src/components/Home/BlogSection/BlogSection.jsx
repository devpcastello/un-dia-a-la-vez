import React from "react";
import { BlogCard } from "../BlogCard/BlogCard";

export const BlogSection = () => {
  return (
    <div className="h-[1400px] bg-dark-green overflow-hidden flex flex-col items-center justify-start gap-8">
      <div>
        <h2 className="ml-3 text-4xl text-center text-white pt-10 pb-4">
          Descubre mi blog:
        </h2>
      </div>
      <BlogCard />

      <button className="bright-button py-2 px-4 rounded-full mb-5 text-center">
        Descubrir más
      </button>
    </div>
  );
};

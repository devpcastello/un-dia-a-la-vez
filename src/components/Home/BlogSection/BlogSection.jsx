import React from "react";
import { BlogCard } from "../BlogCard/BlogCard";

export const BlogSection = () => {
  return (
    <div className="h-screen bg-dark-green">
      <div>
        <h2 className="ml-3 text-xl text-white mb-5">Descubre mi blog:</h2>
        <button className="bright-button py-2 px-4 rounded-full mb-5 text-center">
          Descubrir más
        </button>
      </div>
      <BlogCard />
    </div>
  );
};

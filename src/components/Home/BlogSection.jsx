import React from "react";
import { BlogCard } from "./BlogCard";

import image1 from "../../assets/posts/post2.jpg";
import image2 from "../../assets/posts/post3.jpg";

export const BlogSection = () => {
  return (
    <section className="bg-dark-green mx-auto flex flex-col px-6 py-16 lg:px-32 lg:py-16 items-center">
      <h2 className="font-semibold text-h4 text-white mb-12">
        Descubre los recursos disponibles para ayudarte
      </h2>
      <div className="text-white mb-10">
        <div className="relative mb-6">
          <img
            src={image1}
            alt=""
            className="card-image w-full h-full rounded-xl"
          />
          <p className="absolute bottom-0 text-h6 px-5 py-2 font-semibold ">
            Información valiosa para tu bienestar mental
          </p>
        </div>
        <h3 className="mb-2 text-h5 font-bold">Accede a nuestro blog</h3>
        <p className="text-base ">
          Contenido gratuito que te ayudará a conocerte a ti mismo
        </p>
        <button className="px-6 py-3 rounded-full bg-swamp-green mt-6 text-base font-semibold">
          Ver más
        </button>
      </div>
      <div className="text-white">
        <div className="relative mb-6 bg-light-blue rounded-xl">
          <img
            src={image2}
            alt=""
            className="card-image w-full h-full rounded-xl pt-5 px-5"
          />
          <p className="text-h6 px-5 py-2 font-semibold ">
            Información valiosa para tu bienestar mental
          </p>
        </div>
        <h3 className="mb-2 text-h5 font-bold">Descarga recursos prácticos</h3>
        <p className="text-base ">
          Contenido gratuito que te ayudará a conocerte a ti mismo
        </p>
        <button className="px-6 py-3 rounded-full bg-swamp-green mt-6 text-base font-semibold">
          Ver más
        </button>
      </div>

      <div className="hidden md:flex">
        <BlogCard />
      </div>
    </section>
  );
};

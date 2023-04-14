import React from "react";

import dulcinea from "../../../assets/dulcinea-3.png";

export const Subscription = () => {
  return (
    <div className="bg-light-green h-screen w-full flex flex-col justify-center items-center md:h-[700px] xl:h-[900px]">
      <div className="w-10/12 h-auto">
        <div className="text-center mb-5 md:mb-12 ">
          <h3 className="text-3xl my-8 font-medium text-gray-10 md:text-4xl xl:text-5xl">
            Subscríbete a nuestro News Letter!
          </h3>
          <p className="text-gray-8 font-light text-lg md:text-xl md:leading-10 xl:text-2xl">
            Recibe contenido exclusivo en tu correo personal de forma semanal:
            libros, podcast, videos, conferencias, webinars entre otros.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:my-20 xl:gap-0">
          <div className="flex flex-col justify-center gap-2 xl:gap-4">
            <label className="xl:h-8">Nombres:</label>
            <input
              className="rounded-full px-4 py-2 w-full bg-bright-green text-white xl:px-6 xl:py-3 xl:h-12 xl:w-5/6"
              type="text"
              name="name"
              id="name"
            />
            <label className="">Email:</label>
            <input
              className="rounded-full px-4 py-2 w-full bg-bright-green text-start text-white xl:px-6 xl:py-3 xl:h-12 xl:w-5/6"
              type="email"
              name="email"
              id="email"
            />
            <button className="bg-dark-green text-white rounded-full py-2 px-4 mt-4 w-full xl:text-2xl xl:px-6 xl:py-3 xl:h-12 xl:w-5/6">
              Subscribirme!
            </button>
          </div>
          <img src={dulcinea} alt="" />
        </div>
      </div>
    </div>
  );
};

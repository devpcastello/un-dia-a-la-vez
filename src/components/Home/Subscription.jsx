import React from "react";

import dulcinea from "../../assets/dulcinea-3.png";

export const Subscription = () => {
  return (
    <div className="bg-dark-green mx-auto flex flex-col px-6 py-16 lg:px-32 lg:py-16 items-center text-white">
      <div className="w-10/12 h-auto">
        <div className="text-center mb-5 md:mb-12 ">
          <h3 className="text-3xl mb-8 font-medium md:text-4xl xl:text-5xl">
            Subscríbete a nuestro News Letter!
          </h3>
          <p className=" font-light text-lg md:text-xl md:leading-10 xl:text-2xl">
            Recibe contenido exclusivo en tu correo personal de forma semanal:
            libros, podcast, videos, conferencias, webinars entre otros.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:my-20 xl:gap-0">
          <div className="flex flex-col justify-center gap-2 xl:gap-4">
            <label className="xl:h-8">Nombres:</label>
            <input
              className="rounded-full px-4 py-2 w-full bg-color7 text-white xl:px-6 xl:py-3 xl:h-12 xl:w-5/6 bg-light-blue"
              type="text"
              name="name"
              id="name"
            />
            <label className="">Email:</label>
            <input
              className="rounded-full px-4 py-2 w-full bg-color7 text-start text-white xl:px-6 xl:py-3 xl:h-12 xl:w-5/6 bg-light-blue"
              type="email"
              name="email"
              id="email"
            />
            <button className="px-6 py-2 rounded-full bg-swamp-green mt-6 text-base w-full xl:text-2xl xl:px-6 xl:py-3 xl:h-12 xl:w-5/6 font-semibold">
              Subscribirme!
            </button>
          </div>
          <img src={dulcinea} alt="" />
        </div>
      </div>
    </div>
  );
};

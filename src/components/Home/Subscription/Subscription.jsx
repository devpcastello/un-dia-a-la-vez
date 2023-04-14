import React from "react";

import dulcinea from "../../../assets/dulcinea-3.png";

export const Subscription = () => {
  return (
    <div className="bg-light-green h-screen w-full flex flex-col justify-center items-center md:h-[700px]">
      <div className="w-10/12 h-auto">
        <div className="text-center mb-5 md:mb-12">
          <h3 className="text-3xl my-8 font-medium text-gray-10 md:text-4xl">
            Subscríbete a nuestro News Letter!
          </h3>
          <p className="text-gray-8 font-light text-lg md:text-xl md:leading-10">
            Recibe contenido exclusivo en tu correo personal de forma semanal:
            libros, podcast, videos, conferencias, webinars entre otros.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:my-20">
          <div className="grid grid-cols-1 justify-center gap-2 ">
            <label className="">Nombres:</label>
            <input
              className="rounded-full px-4 py-2 w-full bg-bright-green text-white"
              type="text"
              name="name"
              id="name"
            />
            <label className="">Email:</label>
            <input
              className="rounded-full px-4 py-2 w-full bg-bright-green text-start text-white"
              type="email"
              name="email"
              id="email"
            />
            <button className="bg-dark-green text-white rounded-full py-2 px-4 mt-4 w-full">
              Subscribirme!
            </button>
          </div>
          <img src={dulcinea} alt="" />
        </div>
      </div>
    </div>
  );
};

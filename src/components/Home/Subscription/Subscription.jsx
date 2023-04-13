import React from "react";

import dulcinea from "../../../assets/dulcinea-3.png";

export const Subscription = () => {
  return (
    <div className="bg-light-green h-[700px] w-full flex flex-col justify-center items-center">
      <div className="w-10/12 h-auto">
        <div className="text-center mb-5">
          <h3 className="text-3xl my-8 font-medium text-gray-10">
            Subscríbete a nuestro News Letter!
          </h3>
          <p className="text-gray-8 font-light text-lg">
            Recibe contenido exclusivo en tu correo personal de forma semanal:
            libros, podcast, videos, conferencias, webinars entre otros.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2">
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
        <div>
          <img src={dulcinea} alt="" />
        </div>
      </div>
    </div>
  );
};

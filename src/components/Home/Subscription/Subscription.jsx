import React from "react";

import dulcinea from "../../../assets/dulcinea-3.png";

export const Subscription = () => {
  return (
    <div className="bg-light-green h-screen w-full flex flex-col justify-center items-center">
      <div className="w-9/12 h-auto">
        <div className="text-center mb-5">
          <h3 className="text-xl mb-3">Subscríbete a nuestro News Letter!</h3>
          <p>
            Recibe contenido exclusivo en tu correo personal de forma semanal:
            libros, podcast, videos, conferencias, webinars entre otros.
          </p>
        </div>
        <div>
          <label className="">Nombres:</label>
          <input
            className="rounded-full mt-1 mb-2 px-1 py-2 bg-bright-green"
            type="text"
            name="name"
            id="name"
          />
          <label className="">Email:</label>
          <input
            className="rounded-full mt-1 mb-2 px-1 py-2 bg-bright-green"
            type="email"
            name="email"
            id="email"
          />
          <button className="dark-button rounded-full py-2 px-4 mt-2">
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

import React from "react";

import logo from "../../../src/assets/navbar-logo.png";
import facebook from "../../../src/assets/icon _facebook_.png";
import instagram from "../../../src/assets/icon _instagram_.png";
import whatsapp from "../../../src/assets/icon _whatsapp_.png";
import youtube from "../../../src/assets/icon _youtube_.png";

export const Footer = () => {
  return (
    <div className=" bg-light-green h-screen flex flex-col justify-center items-center relative">
      <div className="pb-5  mb-5 border-b-2 border-slate-700">
        <img src={logo} alt="" />
      </div>
      <div>
        <p className="mb-3">Conoce nuestras redes sociales:</p>
        <div className=" h-10 w-full flex flex-row justify-around mb-5">
          <img className="" src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
      <div className="bg-wtpp-green rounded-xl text-white flex flex-col items-center p-3">
        <p>Contáctanos por Whatsapp</p>
        <div>
          <img className="h-12" src={whatsapp} alt="" />
        </div>
      </div>
      <div className="w-full h-20 text-white p-3 absolute bottom-0 left-0 bg-slate-900 ">
        <p>2023</p>
        <p>Todos los derechos reservados</p>
      </div>
    </div>
  );
};

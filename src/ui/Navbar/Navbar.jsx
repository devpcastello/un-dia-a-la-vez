import React, { useState } from "react";
import navbarLogo from "../../../src/assets/navbar-logo.png";

import "./styles.css";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    //cuando es true lo pasa a false y visceversa
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="h-14 w-full flex justify-around items-center fixed bg-white z-50">
      <div>
        <img className="h-10 w-auto" src={navbarLogo} alt="" />
      </div>
      <div className="sm:hidden">
        <div className={`links ${isNavOpen ? "active" : ""}`}>
          <div className="w-full h-screen m-5 text-3xl">
            <a href="#">Inicio</a>
            <a href="#">Terapia</a>
            <div className="text-xl ml-4">
              <a href="#">Terapia Online</a>
              <a href="#">Terapia Presencial</a>
              <a href="#">Costo Social</a>
            </div>
            <a href="#">Sobre nosotros</a>
            <div className="text-xl ml-4">
              <a href="#">Equipo</a>
              <a href="#">Testimonios</a>
              <a href="#">Preguntas Frecuentes</a>
            </div>
            <a href="#">Autocuidado</a>
            <div className="text-xl ml-4">
              <a href="#">Recursos</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="menu-button flex justify-center items-center md:hidden lg:hidden"
        onClick={toggleNav}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};

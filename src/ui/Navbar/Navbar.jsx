import React, { useState } from "react";
import navbarLogo from "../../../src/assets/navbar-logo.png";

import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    //cuando es true lo pasa a false y visceversa
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="h-14 w-full flex justify-around items-center fixed top-0 bg-white z-50">
      <div>
        <Link to="/">
          <img className="h-10 w-auto" src={navbarLogo} alt="" />
        </Link>
      </div>
      <div className="sm:hidden">
        <div className={`links ${isNavOpen ? "active" : ""}`}>
          <div className="w-full flex flex-col gap-2 h-screen m-5 text-3xl">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/therapy">Terapia</Link>
              </li>
            </ul>
            <div className="text-xl ml-4">
              <ul>
                <li>
                  <Link to="/therapy/online">Terapia Online</Link>
                </li>
                <li>
                  <Link to="/therapy/in-person">Terapia Presencial</Link>
                </li>
                <li>
                  <Link to="/therapy/social">Costo Social</Link>
                </li>
              </ul>
            </div>
            <li>
              <Link to="/about">Sobre nosotros</Link>
            </li>
            <div className="text-xl ml-4">
              <ul>
                <li>
                  <Link to="/about/staff">Equipo</Link>
                </li>
                <li>
                  <Link to="/about/testimonials">Testimonios</Link>
                </li>
                <li>
                  <Link to="/about/fqa">Preguntas Frecuentes</Link>
                </li>
              </ul>
            </div>
            <li>
              <Link to="/self-care">Autocuidado</Link>
            </li>
            <div className="text-xl ml-4">
              <ul>
                <li>
                  <Link to="/self-care/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/self-care/resources">Recursos</Link>
                </li>
              </ul>
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

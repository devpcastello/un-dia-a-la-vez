import React, { useState } from "react";
import { Link } from "react-router-dom";

import navbarLogo from "../../../src/assets/navbar-logo.png";
import "./styles.css";
import { menuOptions } from "../../data/menuOptions";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="">
      <div className="fixed left-0 top-0 z-50 h-[70px] w-full bg-custom-darkGreen">
        <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-32">
          <div>
            <Link to="/">
              <img className="h-10 w-auto" src={navbarLogo} alt="" />
            </Link>
          </div>

          <div
            className={`links ${isNavOpen ? "active" : ""} lg:hidden xl:hidden`}
          >
            <div className="w-full flex flex-col gap-3">
              <ul className="text-base">
                {/* Primer enlace con lista desplegable */}
                <li className="w-60 bg-slate-500">
                  <Link to="/" onClick={toggleNav}>
                    Inicio
                  </Link>
                  <ul>
                    {menuOptions.map(({ name, link, options }) => (
                      <li key={name}>
                        <Link to={link} onClick={toggleNav}>
                          {name}
                        </Link>
                        {/* Opciones de la lista desplegable */}
                        {options.map(({ subLinkName, subLink }) => (
                          <li key={subLinkName}>
                            <Link to={subLink} onClick={toggleNav}>
                              {subLinkName}
                            </Link>
                          </li>
                        ))}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <button
            className="menu-button flex justify-center items-center lg:hidden xl:hidden "
            onClick={toggleNav}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <div className="hidden lg:flex xl:flex">
            <ul className="flex gap-8 text-xl">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/therapy">Terapia</Link>
              </li>
              <li>
                <Link to="/about">Sobre nosotros</Link>
              </li>
              <li>
                <Link to="/self-care">Autocuidado</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

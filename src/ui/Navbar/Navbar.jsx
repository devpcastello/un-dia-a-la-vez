import React, { useState } from "react";
import { Link } from "react-router-dom";

import navbarLogo from "../../../src/assets/logo.svg";
import UpChevron from "../../assets/upChevron";
import { menuOptions } from "../../data/menuOptions";
import "./styles.css";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 h-[70px] w-full bg-custom-darkGreen">
      <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-32">
        <div className="lg:flex xl:flex">
          <button>
            <Link to="/">
              <img className="h-10 w-auto z-100" src={navbarLogo} alt="" />
            </Link>
          </button>
          <ul className="hidden md:flex lg:flex gap-8 text-xl">
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
          <button className="block text-white md:hidden" onClick={toggleNav}>
            Menu
          </button>
        </div>
        {isNavOpen && (
          <div className="fixed inset-0 top-[4rem] z-50 list-item  flex-col bg-custom-darkGreen md:hidden">
            <div className="h-16 bg-black w-16 rounded-full flex items-center justify-center"></div>
            <div
              className={`links ${
                isNavOpen ? "active" : ""
              } lg:hidden xl:hidden`}
            >
              <div className="w-full flex flex-col gap-3">
                <ul className="text-h6">
                  <li className="w-60 ">
                    <ul className="mt-20">
                      {menuOptions.map(({ name, link, options }) => (
                        <ul key={name}>
                          <li
                            onClick={() => {
                              toggleNav();
                              setIsOpen((prev) => !prev);
                            }}
                            className="bg-light-blue text-left"
                          >
                            {name}
                            {!isOpen ? UpChevron : UpChevron}
                          </li>

                          {/* Opciones de la lista desplegable */}
                          {options.map(({ subLinkName, subLink }) => (
                            <li value="">
                              <a key={subLinkName}>
                                <Link
                                  to={subLink}
                                  onClick={toggleNav}
                                  className="text-left"
                                >
                                  {subLinkName}
                                </Link>
                              </a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

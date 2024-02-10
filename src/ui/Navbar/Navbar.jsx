import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo";
import UpChevron from "../../assets/UpChevron";
import DownChevron from "../../assets/DownChevron";
import { menuOptions } from "../../data/menuOptions";

// import "./styles.css";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //TODO manejar el navbar cuando se cierra en mobile y se pasa a desktop

  return (
    <header className="fixed left-0 top-0 z-50 h-[70px] w-full bg-custom-darkGreen">
      {/* Añadir lógica para volver transparente el bg del navbar */}
      <div
        className={`mx-auto flex h-full items-center justify-between px-6 lg:px-32 ${
          isNavOpen ? "bg-dark-green" : "bg-opacity-50"
        }`}
      >
        <Link to="/">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
            <Logo width={"2.5rem"} height={" 2.5rem"} />
          </div>
        </Link>
        <ul className="hidden md:flex lg:flex gap-8 text-xl text-white">
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
        <button
          className="h-12 w-24  bg-white flex items-center justify-around rounded-full md:hidden "
          onClick={toggleNav}
        >
          <p className="block text-dark-green font-bold">Menu</p>
          {!isNavOpen ? <DownChevron /> : <UpChevron />}
        </button>

        {isNavOpen && (
          <div
            className={`fixed inset-0 top-[4rem] z-50 list-item  flex-col md:hidden xl:hidden bg-dark-green`}
          >
            {/* <ul className=""> */}
            {menuOptions.map(({ name, link, options }) => (
              <ul key={name} className="flex w-full flex-col text-white mt-6 ">
                <li
                  onClick={() => {
                    toggleNav();
                    setIsOpen((prev) => !prev);
                  }}
                  className="bg-light-blue text-left rounded-full px-4 py-2 mb-4 flex justify-between items-center"
                >
                  {name}
                  {!isOpen && options ? <DownChevron /> : <UpChevron />}
                </li>

                {/* Opciones de la lista desplegable */}
                {isOpen
                  ? options.map(({ subLinkName, subLink }) => (
                      <li value="">
                        <a key={subLinkName}>
                          <Link
                            to={subLink}
                            onClick={toggleNav}
                            className="text-left pl-7"
                          >
                            {subLinkName}
                          </Link>
                        </a>
                      </li>
                    ))
                  : null}
              </ul>
            ))}
            {/* </ul> */}
          </div>
        )}
      </div>
    </header>
  );
};

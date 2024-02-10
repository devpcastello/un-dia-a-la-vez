import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo";
import UpChevron from "../../assets/UpChevron";
import DownChevron from "../../assets/DownChevron";
import { menuOptions } from "../../data/menuOptions";

// import "./styles.css";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({});

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //TODO manejar el navbar cuando se cierra en mobile y se pasa a desktop

  const toggleMenu = (menuName) => {
    setIsOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName], // Cambiar el estado específico para este menú
    }));
  };

  return (
    <header className="fixed left-0 top-0 z-50 h-[70px] w-full bg-custom-darkGreen">
      {/* Añadir lógica para volver transparente el bg del navbar */}
      <div
        className={`mx-auto flex h-full items-center justify-between px-6 lg:px-32 ${
          isNavOpen ? "bg-dark-green" : "bg-opacity-50"
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            toggleMenu(name);
          }}
        >
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
          {!isNavOpen ? (
            <DownChevron color="border-strong-green" />
          ) : (
            <UpChevron />
          )}
        </button>

        {isNavOpen && (
          <div
            className={`fixed inset-0 top-[4rem] z-50  flex-col md:hidden xl:hidden bg-dark-green flex `}
          >
            {/* <ul className=""> */}
            {menuOptions.map(({ name, link, options }) => (
              <ul
                key={name}
                className="flex w-full flex-col text-white mt-6 items-center"
              >
                <li
                  onClick={() => {
                    toggleMenu(name);
                  }}
                  className={`bg-light-blue text-left rounded-full px-4 py-2 flex justify-between items-center w-11/12 ${
                    isOpen[name] ? "mb-4" : null
                  }`}
                >
                  {name}
                  {!isOpen && options ? <DownChevron /> : <UpChevron />}
                </li>

                {/* Opciones de la lista desplegable */}
                {isOpen[name]
                  ? options.map(({ subLinkName, subLink }) => (
                      <li value="" className="text-left pl-14 self-start">
                        <a key={subLinkName}>
                          <Link to={subLink} onClick={toggleNav}>
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

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo";
import ChevronUp from "../../assets/ChevronUp";
import ChevronDown from "../../assets/ChevronDown";
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
    <header className="fixed m-auto left-0 top-0 z-50 w-full justify-center">
      <div className="h-16 flex lg:justify-center justify-between lg:mt-6">
        {/* Añadir lógica para volver transparente el bg del navbar */}
        <div
          className={`w-full flex h-full items-center justify-between px-6 md:bg-white  lg:max-w-[1100px] lg:self-center lg:rounded-full lg:px-10  ${
            isNavOpen ? "bg-dark-green" : null
          }`}
        >
        {/* Logo */}
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

          {/* Desktop navbar */}
          <div className="flex gap-5 h-6">
            {
              menuOptions.map(({ name, link, options }) => (
                <ul className="hidden md:flex md:justify-stretch gap-8 text-base text-white md:text-gray-12" key={name}>
                  <li className={`relative ${isOpen[name] ? 'mb-4' : ''}`}>
                    <Link to={link} className="mr-2">
                      {name}
                    </Link>
                    <button onClick={() => toggleMenu(name)}>
                      {!isOpen[name] && options ? (
                        <ChevronDown color="#444444" />
                      ) : (
                        <ChevronUp  color="#444444" />
                      )}
                    </button>
                    {isOpen[name] && (
                      <div className="absolute top-full left-0 bg-white py-2 px-4 rounded-lg mt-8">
                        {options.map(({ subLinkName, subLink }) => (
                          <li key={subLinkName} className="text-left">
                            <Link to={subLink} onClick={toggleNav}>
                              {subLinkName}
                            </Link>
                          </li>
                        ))}
                      </div>
                    )}
                  </li>
                </ul>
              ))
            }

          </div>

          {/* Mobile button */}
          <button
            className="h-12 w-24 bg-white flex items-center justify-around rounded-full md:hidden "
            onClick={toggleNav}
          >
            <p className="block text-forest-green font-bold">Menu</p>
            {!isNavOpen ? (
              <ChevronDown color="#444444" />
            ) : (
              <ChevronUp color="#444444" />
            )}
          </button>

          {/* Mobile navbar */}
          {isNavOpen && (
            <div
              className={`fixed inset-0 top-[4rem] z-50  flex-col md:hidden xl:hidden bg-dark-green flex text-semibold`}
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
                    {!isOpen && options ? (
                      <ChevronUp color="#444444" />
                    ) : (
                      <ChevronDown color="#444444" />
                    )}
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
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

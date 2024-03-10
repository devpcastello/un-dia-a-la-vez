import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo';
import ChevronUp from '../assets/ChevronUp';
import ChevronDown from '../assets/ChevronDown';
import { menuOptions } from '../data/menuOptions';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({});

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleMenu = (menuName) => {
    setIsOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <header className='fixed left-0 top-0 z-50 m-auto w-full justify-center'>
      <div className='flex h-16 justify-between lg:mt-6 lg:justify-center'>
        <div
          className={`flex size-full items-center justify-between px-6 md:bg-white lg:max-w-[1100px]  lg:self-center lg:rounded-full lg:px-10  ${
            isNavOpen ? 'bg-dark-green' : null
          }`}
        >
          {/* Logo */}
          <Link
            to='/'
            onClick={() => {
              toggleMenu(name);
            }}
          >
            <div className='flex size-12 items-center justify-center rounded-full bg-white'>
              <Logo width={'2.5rem'} height={' 2.5rem'} />
            </div>
          </Link>

          {/* Desktop navbar */}
          <div className='flex h-6 gap-10'>
            {menuOptions.map(({ id, name, link, options }) => (
              <ul
                className='hidden text-base text-white md:flex md:justify-stretch md:text-gray-12'
                key={name}
              >
                <li
                  className='relative flex cursor-pointer gap-1'
                  onClick={() => toggleMenu(name)}
                >
                  {id === 'terapia-online' ? (
                    <Link
                      to={`${link}/${id}`}
                      className=' bg-red-400 m-auto rounded-full  bg-red px-3 text-white'
                    >
                      {name}
                    </Link>
                  ) : (
                    <span className=''>{name}</span>
                  )}
                  <button>
                    {options.length > 0 &&
                      (!isOpen[name] ? (
                        <ChevronDown color='#444444' width={16} height={8} />
                      ) : (
                        <ChevronUp color='#444444' width={16} height={8} />
                      ))}
                  </button>
                  {isOpen[name] && options.length > 0 && (
                    <div className='absolute left-0 mt-10 w-auto text-nowrap rounded-lg bg-white px-4 py-2'>
                      {options.map(({ id, subLinkName }) => (
                        <span
                          key={subLinkName}
                          className='mb-2 flex flex-col text-left'
                        >
                          <Link to={`${link}/${id}`} onClick={toggleNav}>
                            {subLinkName}
                          </Link>
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className='flex h-12 w-24 items-center justify-around rounded-full bg-white md:hidden '
            onClick={toggleNav}
          >
            <p className='block font-bold text-forest-green'>Menu</p>
            {!isNavOpen ? (
              <ChevronDown color='#444444' />
            ) : (
              <ChevronUp color='#444444' />
            )}
          </button>

          {/* Mobile navbar */}
          {isNavOpen && (
            <div
              className={`fixed inset-0 top-[4rem]  z-50 flex flex-col bg-dark-green md:hidden xl:hidden`}
            >
              {/* <ul className=""> */}
              {menuOptions.map(({ name, link, options }) => (
                <ul
                  key={name}
                  className='mt-6 flex w-full flex-col items-center text-white'
                >
                  <li
                    onClick={() => {
                      toggleMenu(name);
                    }}
                    className={`flex w-11/12 items-center justify-between rounded-full bg-light-blue px-4 py-2 text-left ${
                      isOpen[name] ? 'mb-4' : null
                    }`}
                  >
                    {name}
                    {!isOpen && options ? (
                      <ChevronUp color='#444444' />
                    ) : (
                      <ChevronDown color='#444444' />
                    )}
                  </li>

                  {/* Opciones de la lista desplegable */}
                  {isOpen[name]
                    ? options.map(({ id, subLinkName, subLink }) => (
                        <li
                          key={subLinkName}
                          value=''
                          className='self-start pl-14 text-left'
                        >
                          <a>
                            <Link to={`${link}/${id}`} onClick={toggleNav}>
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

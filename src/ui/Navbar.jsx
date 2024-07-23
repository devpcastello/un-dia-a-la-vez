import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo';
import { menuOptions } from '../data/menuOptions';
import { Modal } from './components/Modal';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(null);

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        gsap.to(navbar, { y: -navbar.offsetHeight, duration: 0.3 });
      } else {
        gsap.to(navbar, { y: 0, duration: 0.5 });
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(null);
  };

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
    <header
      className='fixed left-0 top-0 z-50 m-auto w-full justify-center'
      id='navbar'
    >
      <div className='flex h-16 justify-between lg:mt-6 lg:justify-center'>
        <div
          className={`flex size-full items-center justify-between px-6 md:bg-white  lg:max-w-[1100px] lg:self-center lg:rounded-full lg:px-10 ${
            isNavOpen ? 'bg-primary' : null
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
                className='hidden text-base  text-twilight-navy md:flex md:justify-stretch'
                key={name}
              >
                <li
                  className='relative flex cursor-pointer gap-1'
                  onClick={() => toggleMenu(name)}
                >
                  {id === 'fast-assistance' ? (
                    <Link
                      to={`${link}/${id}`}
                      className='m-auto rounded-full bg-accent px-3 text-white'
                      onClick={() => openModal()}
                    >
                      {name}
                    </Link>
                  ) : (
                    <span className=''>{name}</span>
                  )}
                  <button className='flex items-center'>
                    {options.length > 0 &&
                      (!isOpen[name] ? (
                        <ChevronDown className='size-5' />
                      ) : (
                        <ChevronUp className='size-5' />
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
            <p className='block font-bold text-primary'>Menu</p>
            {!isNavOpen ? (
              <ChevronDown className='size-5' />
            ) : (
              <ChevronUp className='size-5' />
            )}
          </button>

          {/* Mobile navbar */}
          {isNavOpen && (
            <div
              className={`fixed inset-0 top-16  z-50 flex flex-col bg-primary md:hidden xl:hidden`}
            >
              {/* <ul className=""> */}
              {menuOptions.map(({ id, name, link, options }) => (
                <ul
                  key={name}
                  className='mt-6 flex w-full flex-col items-center text-white'
                >
                  <li
                    onClick={() => {
                      toggleMenu(name);
                    }}
                    className={`flex w-11/12 items-center justify-between rounded-full bg-secondary px-4 py-2 text-left ${
                      isOpen[name] ? 'mb-4' : null
                    }`}
                  >
                    {id === 'fast-assistance' ? (
                      <Link
                        to={`${link}/${id}`}
                        className='m-auto rounded-full  bg-accent px-3 text-white'
                        onClick={() => openModal()}
                      >
                        {name}
                      </Link>
                    ) : (
                      <span className=''>{name}</span>
                    )}

                    <button>
                      {!isOpen.length > 0 &&
                        (!isOpen[name] ? (
                          <ChevronUp color='#444444' />
                        ) : (
                          <ChevronDown color='#444444' />
                        ))}
                    </button>
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
      {isModalOpen && <Modal onClose={closeModal} />}
    </header>
  );
};

/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

interface NavItemProps {
  active: boolean;
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Header: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(`${location.hash}`);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const NavItem: React.FC<NavItemProps> = ({ active, to, children, onClick }) => (
    <li className={`nav-item ${active ? 'active' : ''} p-4`}>
      <HashLink
        to={`#${to}`}
        onClick={onClick}
        smooth
        className={`nav-link ${active ? 'text-yellow-200 underline' : 'text-white'}`}
      >
        {children}
      </HashLink>
    </li>
  );

  const onUpdateActiveLink = (value: string): void => {
    setActiveLink(value);
    setOpenMenu(false); // Close menu on navigation click
  };

  const toggleMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  const handleActiveLinkOnScroll = (): void => {
    const sections = document.querySelectorAll('section');
    let currentActive = 'home';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentActive = section.id;
      }
    });

    setActiveLink(`#${currentActive}`);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setOpenMenu(false);
      handleActiveLinkOnScroll();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-slate-800 text-white font-montserrat shadow-lg shadow-slate-200 z-10 fixed left-0 top-0 h-full ${openMenu ? 'w-full' : 'w-12'} lg:w-[250px] transition-width duration-300`}>
      <div className='hidden lg:flex h-[50px] w-[80px] justify-between m-2'>
        <div className='h-5 w-5 bg-red-400 rounded-full'></div>
        <div className='h-5 w-5 bg-yellow-400 rounded-full'></div>
        <div className='h-5 w-5 bg-green-400 rounded-full'></div>
      </div>
      <div className='p-2 lg:container text-center lg:flex lg:flex-col lg:mt-8 h-full relative py-2'>
        <div className="flex lg:justify-between lg:items-center lg:hidden lg:py-4">
          <button className="text-white text-xl cursor-pointer" onClick={toggleMenu}>
            {!openMenu ? <BiMenuAltLeft fontSize={40} /> : <AiOutlineClose fontSize={40} />}
          </button>
        </div>
        <ul className={`flex flex-col justify-center items-center lg:block ${openMenu ? 'block' : 'hidden'}`}>
          <NavItem
            active={activeLink === `#home`}
            to="home"
            onClick={() => onUpdateActiveLink('#home')}
          >
            Home
          </NavItem>
          <NavItem
            active={activeLink === '#about'}
            to="about"
            onClick={() => onUpdateActiveLink('#about')}
          >
            About
          </NavItem>
          <NavItem
            active={activeLink === '#services'}
            to="services"
            onClick={() => onUpdateActiveLink('#services')}
          >
            Services
          </NavItem>
          <NavItem
            active={activeLink === '#skills'}
            to="skills"
            onClick={() => onUpdateActiveLink('#skills')}
          >
            Skills
          </NavItem>
          <NavItem
            active={activeLink === '#work'}
            to="work"
            onClick={() => onUpdateActiveLink('#work')}
          >
            Experience
          </NavItem>
          <NavItem
            active={activeLink === '#projects'}
            to="projects"
            onClick={() => onUpdateActiveLink('#projects')}
          >
            Projects
          </NavItem>
          <NavItem
            active={activeLink === '#contact'}
            to="contact"
            onClick={() => onUpdateActiveLink('#contact')}
          >
            Contact
          </NavItem>
        </ul>
      </div>
    </header>
  );
};

export default Header;

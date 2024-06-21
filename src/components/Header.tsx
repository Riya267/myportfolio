/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

interface NavItemProps {
  active: boolean;
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const NavItem: React.FC<NavItemProps> = ({ active, to, children, onClick }) => (
    <li className={`nav-item ${active ? 'active' : ''} p-4`}>
      <HashLink
        to={`#${to}`}
        onClick={onClick}
        smooth
        className={`nav-link ${active ? 'text-yellow-200 underline' : ''}`}
      >
        {children}
      </HashLink>
    </li>
  );

  const handleScroll = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    document.querySelectorAll('section').forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  const onUpdateActiveLink = (value: string): void => {
    setActiveLink(value);
  };

  const toggleMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setOpenMenu(false);
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
        <div className='hidden lg:block h-30 w-30 mb-4'>
          <img src="./developer-girl.png" alt="developer-girl" className='rounded-full h-full w-full'/>
        </div>
        <div className="flex lg:justify-between lg:items-center lg:hidden lg:py-4">
          <button className="text-white text-xl cursor-pointer" onClick={toggleMenu}>
            {!openMenu ? <BiMenuAltLeft fontSize={40} /> : <AiOutlineClose fontSize={40} />}
          </button>
        </div>
        <ul className={`flex flex-col justify-center items-center lg:block ${openMenu ? 'block' : 'hidden'}`}>
          <NavItem
            active={activeLink === 'home'}
            to="home"
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </NavItem>
          <NavItem
            active={activeLink === 'about'}
            to="about"
            onClick={() => onUpdateActiveLink('about')}
          >
            About
          </NavItem>
          <NavItem
            active={activeLink === 'skills'}
            to="skills"
            onClick={() => onUpdateActiveLink('skills')}
          >
            Skills
          </NavItem>
          <NavItem
            active={activeLink === 'education'}
            to="education"
            onClick={() => onUpdateActiveLink('education')}
          >
            Education
          </NavItem>
          <NavItem
            active={activeLink === 'projects'}
            to="projects"
            onClick={() => onUpdateActiveLink('projects')}
          >
            Projects
          </NavItem>
          <NavItem
            active={activeLink === 'contact'}
            to="contact"
            onClick={() => onUpdateActiveLink('contact')}
          >
            Contact
          </NavItem>
        </ul>
      </div>
    </header>
  );
};

export default Header;

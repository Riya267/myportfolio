import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import {
  BiHomeAlt,
  BiUser,
  BiBriefcase,
  BiBook,
  BiCog,
  BiEnvelope,
} from 'react-icons/bi'
import { AiOutlineAppstore } from 'react-icons/ai'

interface NavItemProps {
  active: boolean
  to: string
  children: React.ReactNode
  onClick: () => void
  icon: React.ReactNode
}

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>(window.location.hash)
  const [clicked, setClicked] = useState<boolean>(false)

  const NavItem: React.FC<NavItemProps> = ({
    active,
    to,
    children,
    onClick,
    icon,
  }) => (
    <li className={`nav-item ${active ? 'active' : ''} px-4 py-2`}>
      <HashLink
        to={`#${to}`}
        onClick={onClick}
        smooth
        className={`nav-link ${
          active ? 'text-fuchsia-400 underline' : 'text-white'
        } flex hover:text-fuchsia-400`}
      >
        {icon}
        <span className={`ml-2 hidden lg:inline`}>{children}</span>
      </HashLink>
    </li>
  )

  const onUpdateActiveLink = (value: string): void => {
    setClicked(true)
    setActiveLink(value)
  }

  const handleActiveLinkOnScroll = (): void => {
    const sections = document.querySelectorAll('section')
    let currentActive = activeLink ? activeLink : ''

    sections.forEach((section) => {
      const top = section.offsetTop
      const height = section.offsetHeight
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentActive = `#${section.id}`
      }
    })

    setActiveLink(currentActive)
  }

  useEffect(() => {
    const handleScroll = (): void => {
      if (!clicked) {
        handleActiveLinkOnScroll()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [clicked])

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [clicked])

  return (
    <header
      className={`border-2 border-gray-900 backdrop-blur-lg bg-opacity-15 text-white font-jetBrains z-10 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full lg:w-fit transition-width duration-300`}
    >
      <div className="p-2 lg:container text-center flex justify-center h-full relative py-2 ">
        <ul
          className={`flex flex-row justify-center items-center flex-wrap lg:flex-nowrap`}
        >
          <NavItem
            active={activeLink === `#home`}
            to="home"
            onClick={() => onUpdateActiveLink('#home')}
            icon={<BiHomeAlt size={24} />}
          >
            Home
          </NavItem>
          <NavItem
            active={activeLink === '#about'}
            to="about"
            onClick={() => onUpdateActiveLink('#about')}
            icon={<BiUser size={24} />}
          >
            About
          </NavItem>
          <NavItem
            active={activeLink === '#services'}
            to="services"
            onClick={() => onUpdateActiveLink('#services')}
            icon={<BiCog size={24} />}
          >
            Services
          </NavItem>
          <NavItem
            active={activeLink === '#skills'}
            to="skills"
            onClick={() => onUpdateActiveLink('#skills')}
            icon={<BiBook size={24} />}
          >
            Skills
          </NavItem>
          <NavItem
            active={activeLink === '#work'}
            to="work"
            onClick={() => onUpdateActiveLink('#work')}
            icon={<BiBriefcase size={24} />}
          >
            Experience
          </NavItem>
          <NavItem
            active={activeLink === '#projects'}
            to="projects"
            onClick={() => onUpdateActiveLink('#projects')}
            icon={<AiOutlineAppstore size={24} />}
          >
            Projects
          </NavItem>
          <NavItem
            active={activeLink === '#contact'}
            to="contact"
            onClick={() => onUpdateActiveLink('#contact')}
            icon={<BiEnvelope size={24} />}
          >
            Contact
          </NavItem>
        </ul>
      </div>
    </header>
  )
}

export default Header

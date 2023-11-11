import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

interface NavItemProps {
  active: boolean
  to: string
  children: React.ReactNode
  onClick: () => void
}

interface HeaderProps {
  toggleDarkMode: () => void
  isDarkMode: boolean
}

const NavItem: React.FC<NavItemProps> = ({ active, to, children, onClick }) => {
  return (
      <li className={`nav-item ${active ? 'active' : ''} p-4`}>
        <HashLink to={`#${to}`} onClick={onClick} className={`nav-link ${active ? 'border-b-2 border-primary-700' : ''}`}>
          {children}
        </HashLink>
      </li>
  )
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [activeLink, setActiveLink] = useState('home')
  const [isResponsive, setIsResponsive] = useState(false)

  const onUpdateActiveLink = (value: any): void => {
    setActiveLink(value)
  }

  const toggleResponsive = (): void => {
    setIsResponsive(!isResponsive)
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: <BsLinkedin color="black" fontSize={20} />, url: 'https://www.linkedin.com/in/riya-dhawan-592ab921a' },
    { name: 'Twitter', icon: <BsTwitter color="black" fontSize={20}/>, url: 'https://twitter.com/riyacec05' },
    { name: 'GitHub', icon: <BsGithub color="black" fontSize={20}/>, url: 'https://github.com/Riya267' }
  ]

  const renderSocialLinks = socialLinks.map((link, index) => (
    <li key={index} className={'mr-3 border-2 rounded-full p-2 bg-white-200'}>
      <a href={link.url} target='_blank'>
        {link.icon}
      </a>
    </li>
  ))

  const darkModeStyles = 'bg-primary-500 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }

  return (
  <header className={`${isDarkMode ? darkModeStyles : lightModeStyles} font-montserrat shadow-lg fixed top-0 left-0 w-full z-100`}>
    <div className={`container ${isResponsive ? 'relative py-4' : 'py-2'}`}>
      <div className="lg:flex lg:justify-between">
        <div className="flex justify-between items-center">
          <button className="text-white text-xl cursor-pointer lg:hidden" onClick={toggleResponsive}>
            {!isResponsive ? <BiMenuAltLeft fontSize={40}/> : <AiOutlineClose fontSize={40}/> }
          </button>
          <a className="hidden lg:block" href="#home">
            <img src="/logo.png" className="h-16 w-[7rem]"/>
          </a>
        </div>
        <ul
          className={`${isResponsive ? 'flex' : 'hidden'} flex-col lg:flex-row lg:items-center lg:flex justify-end`}
        >
            <NavItem active={activeLink === 'home'} to="home" onClick={() => { onUpdateActiveLink('home') }}>
                Home
            </NavItem>
            <NavItem active={activeLink === 'about'} to="about" onClick={() => { onUpdateActiveLink('about') }}>
                About
            </NavItem>
            <NavItem active={activeLink === 'skills'} to="skills" onClick={() => { onUpdateActiveLink('skills') }}>
                Skills
            </NavItem>
            <NavItem active={activeLink === 'projects'} to="projects" onClick={() => { onUpdateActiveLink('projects') }}>
                Projects
            </NavItem>
            <NavItem active={activeLink === 'contact'} to="contact" onClick={() => { onUpdateActiveLink('contact') }}>
                Contact
            </NavItem>
            <div className="social-icons">
                <ul className='flex text-white-200 m-4 mt-5'>{renderSocialLinks}</ul>
            </div>
            <div className={`relative m-4 mr-0 w-20 h-10 bg-white-200 border-2 ${isDarkMode ? 'border-primary-200' : 'border-primary-500'} flex items-center justify-between rounded-full cursor-pointer py-1 px-2`} data-isOn={isDarkMode} onClick={toggleDarkMode}>
                {!isDarkMode && <MdLightMode color="black"/>}<motion.div className={`w-8 h-8 ${isDarkMode ? 'bg-primary-200' : 'bg-primary-500'} bg-primary-400 rounded-full`} layout transition={spring} />{isDarkMode && <MdDarkMode color="black"/>}
            </div>
        </ul>
      </div>
    </div>
</header>
  )
}

export default Header

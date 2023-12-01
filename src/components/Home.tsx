import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/themeProvider'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IoMdMail } from "react-icons/io";
import handleColorChange from '../utils/setRandomColor';

const Home: React.FC = () => {
  const { isDarkMode } = useTheme()
  const darkModeStyles = 'bg-primary-600 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'

  const handleCVDownload = (): void => {
    const link = document.createElement('a')
    link.href = '/RiyaCV.pdf'
    link.download = 'RiyaCV.pdf'
    link.click()
  }


  const socialLinks = useMemo(
    () => [
      {
        name: 'LinkedIn',
        icon: <BsLinkedin color="black" className='text-[1rem] lg:text-[2rem] lg:text-[3rem]'/>,
        url: 'https://www.linkedin.com/in/riya-dhawan-592ab921a',
      },
      {
        name: 'Twitter',
        icon: <BsTwitter color="black" className='text-[1rem] lg:text-[2rem] lg:text-[3rem]' />,
        url: 'https://twitter.com/riyacec05',
      },
      {
        name: 'GitHub',
        icon: <BsGithub color="black" className='text-[1rem] lg:text-[2rem] lg:text-[3rem]' />,
        url: 'https://github.com/Riya267',
      },
      {
        name: 'Gmail',
        icon: <IoMdMail color="black" className='text-[1rem] lg:text-[2rem] lg:text-[3rem]' />,
        url: 'mailto:riyacec05@gmail.com',
      },
    ],
    []
  );


  return (
    <section
      id="home"
      className={`${
        isDarkMode ? darkModeStyles : lightModeStyles
      } font-montserrat py-30 pt-[12rem] font-light`}
    >
      <div className="container flex flex-col justify-evenly items-center text-center lg:text-left lg:items-center">
            <p className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] ">
                Hi there,
            </p>
          <p className="text-[2rem] md:text-[3rem] lg:text-[5rem] font-regular_bold text-primary-200">
            I'm Riya <span className="text-primary-200">Dhawan</span>
          </p>
        <p
          className={`text-[1.5rem] md:text-[2rem] lg:text-[3rem] ${isDarkMode ? 'text-white-200': 'text-black-300'}`}
        >
          Full Stack Developer
        </p> 
        <div className='social-links'>
            <ul className="flex text-white-200 m-4 mt-5">
               {socialLinks.map((link, index) => {
                handleColorChange(link.name)
                return <li
                    key={`${link.url}_${index}`}
                    className={`mr-3 rounded-full p-2 md:p-4 bg-white-200 border-4`}
                    style={{ borderColor: `var(--${link.name})`}}
                >
                    <a href={link.url} target="_blank">
                    {link.icon}
                    </a>
                </li>
              })}
            </ul>
        </div>
            <motion.button
              onClick={handleCVDownload}
              className={`font-bold border-2 mr-4 p-3 px-5 mt-4 ${isDarkMode ? 'bg-primary-500': 'bg-primary-400 ' } text-white-200 rounded-[100px] font-openSans`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              Download CV
            </motion.button>
      </div>
    </section>
  )
}

export default Home

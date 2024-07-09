import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IoMdMail } from "react-icons/io";
import handleColorChange from '../utils/setRandomColor';

const Home: React.FC = () => {
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
        icon: <BsLinkedin color="white" className='text-[1rem]'/>,
        url: 'https://www.linkedin.com/in/riya-dhawan-592ab921a',
      },
      {
        name: 'Twitter',
        icon: <BsTwitter color="white" className='text-[1rem]' />,
        url: 'https://twitter.com/riyacec05',
      },
      {
        name: 'GitHub',
        icon: <BsGithub color="white" className='text-[1rem]' />,
        url: 'https://github.com/Riya267',
      },
      {
        name: 'Gmail',
        icon: <IoMdMail color="white" className='text-[1rem]' />,
        url: 'mailto:riyacec05@gmail.com',
      },
    ],
    []
  );


  return (
    <section
      id="home"
      className={`font-montserrat font-light py-12`}
    >
      <div className="container flex flex-col justify-center items-center text-center lg:text-left lg:items-center">
         <motion.div
              className="max-w-[20rem] max-h-[20rem] lg:max-w-[10rem] lg:max-h-[10rem]"
              animate={{ y: [0, 20, 0] }}
              transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
              }}
          >
            <img src="about.png" />
          </motion.div>
            <p className="text-[1em] md:text-[1.2em] lg:text-[1.5em] text-white">
                Hi there,
            </p>
          <p className="text-[2em] md:text-[3em] lg:text-[4em] font-regular_bold text-white">
            I'm <span className="text-rose-800">Riya</span> Dhawan
          </p>
        <p
          className={`text-[1em] text-indigo-200 text-center`}
        >
           I develop web applications<br className='sm:block hidden' />
            and mobile applications
        </p> 
        <div className='social-links'>
            <ul className="flex text-white-200 m-4 mt-5">
               {socialLinks.map((link, index) => {
                handleColorChange(link.name)
                return <li
                    key={`${link.url}_${index}`}
                    className={`mr-3 rounded-full p-2 bg-transparent border-4`}
                    style={{ borderColor: `var(--${link.name})`}}
                >
                    <a href={link.url} target="_blank" rel="noreferrer">
                    {link.icon}
                    </a>
                </li>
              })}
            </ul>
        </div>
            <motion.button
              onClick={handleCVDownload}
              className={`font-bold border-2 mr-4 p-3 px-5 mt-4 text-white-200 font-openSans text-white`}
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

import React from "react"
import { motion } from "framer-motion"

interface AboutProps {
    isDarkMode: boolean
}

const About: React.FC<AboutProps> = ({isDarkMode}) => {
  const darkModeStyles = 'bg-primary-500 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'

  return (
  <section className={`${isDarkMode ? darkModeStyles : lightModeStyles} font-inter h-screen`}>
      <div className="flex justify-center items-center h-[80%] mx-[1.5rem]">
            <div className="flex flex-col justify-center items-start">
                <p className="text-2xl lg:text-3xl font-bold">Hi there, <br/> I'm Riya <span className="text-primary-200">Dhawan</span></p>
                <p className="text-5xl lg:text-7xl font-bold text-tertiary-200">Full Stack Developer</p>
                <p className={`font-bold lg:w-96 mt-2 ${isDarkMode ? 'text-white-300': 'text-primary-600'}`}>3+ years of experience in full stack development. My mission is to develop a website which you and your audience love.</p>
                <motion.a href="https://github.com/Riya267" className={`border-2 p-3 px-5 mt-4 ${isDarkMode ? 'bg-primary-200': 'bg-primary-500 text-white-200'} rounded-[100px] font-russonOne`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                Visit my work
                </motion.a>
            </div>
      </div>
  </section>
  )
}

export default About

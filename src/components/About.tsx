import React from 'react'
import { motion } from 'framer-motion'

interface AboutProps {
  isDarkMode: boolean
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const darkModeStyles = 'bg-primary-500 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'
  const handleCVDownload = (): void => {
    const link = document.createElement('a')
    link.href = '/RiyaCV.pdf'
    link.download = 'RiyaCV.pdf'
    link.click()
  }
  return (
  <section id="about" className={`${isDarkMode ? darkModeStyles : lightModeStyles} font-montserrat py-30 pt-40`}>
      <div className="container flex flex-col-reverse lg:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                <p className="text-2xl lg:text-3xl font-bold">Hi there, <br/> I'm Riya <span className="text-primary-200">Dhawan</span></p>
                <p className="text-2xl lg:text-3xl font-bold text-tertiary-200">Full Stack Developer</p>
                <p className={`font-bold w-[90%] lg:w-96 mt-2 ${isDarkMode ? 'text-white-300' : 'text-primary-600'}`}>3+ years of experience in full stack development. My mission is to develop a website which you and your audience love.</p>
                <div className="flex justify-between">
                    <motion.a href="https://github.com/Riya267" className={'font-bold border-2 mr-4 p-3 px-5 mt-4 bg-primary-700 text-white-200 rounded-[100px] font-openSans'} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    Visit my work
                    </motion.a>
                    <motion.button onClick={handleCVDownload} className={`font-bold border-2 mr-4 p-3 px-5 mt-4 ${isDarkMode ? 'border-primary-200' : 'border-primary-500'} rounded-[100px] font-openSans`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    Download CV
                    </motion.button>
                </div>
            </div>
            <motion.div
            className='max-w-[50%] max-h-[50%]'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}>
            <img src='about.png'/>
            </motion.div>
      </div>
  </section>
  )
}

export default About

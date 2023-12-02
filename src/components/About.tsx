import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/themeProvider'


const About: React.FC = () => {
  const { isDarkMode } = useTheme()
  const darkModeStyles = 'bg-primary-600 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'

  return (
    <section
      id="about"
      className={`${
        isDarkMode ? darkModeStyles : lightModeStyles
      } font-montserrat py-30 pt-[7rem] lg:pt-40 font-light`}
    >
      <div className='container'>
        <div className='flex flex-col items-center'>
            <p className="mb-6 text-xl border-b-2 border-primary-500">ABOUT <span className="text-primary-200">ME</span></p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
            <p
              className={`w-[90%] lg:w-96 mt-2 font-light ${
                isDarkMode ? 'text-white-300' : 'text-primary-600'
              }`}
            >
             I have 3+ years of experience in full stack development. With a passion for pixels and a knack for turning ideas into interactive realities, I bring websites and applications to life.
             <br /> <br />From pixel-perfect front-end design to the invisible magic of back-end development, I'm your go-to architect for digital brilliance. My mission? To create user experiences that not only catch the eye but also leave a lasting digital impression.
             <br /> <br /> Fuelled by curiosity and a commitment to staying ahead in the tech game, I'm all about turning challenges into opportunities. Ready to embark on a digital adventure together? Let's make your ideas click, tap, and swipe with style! 🚀✨
            </p>
            <div className="flex justify-between">
              <motion.a
                href="https://github.com/Riya267"
                className={`font-bold border-2 mr-4 p-3 px-5 mt-4 ${
                  isDarkMode ? 'border-primary-200' : 'border-primary-500'
                } rounded-[100px] font-openSans`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Visit my work
              </motion.a>
            </div>
          </div>
          <img src="developerGirl.png" className="max-w-[50%] max-h-[50%]"/>
        </div>
      </div>
    </section>
  )
}

export default About

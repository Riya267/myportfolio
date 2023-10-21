import React from "react"
import { motion } from "framer-motion"
import ContactForm from "./ContactForm"

interface ContactProps {
    isDarkMode: boolean
}

const Contact: React.FC<ContactProps> = ({isDarkMode}) => {
  const darkModeStyles = 'bg-primary-500 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'

  return (
  <section id="contact" className={`${isDarkMode ? darkModeStyles : lightModeStyles} font-inter lg:h-screen flex flex-col lg:flex-row justify-evenly container`}>
      <div className="p-4">
            <p className={`text-3xl lg:text-5xl font-bold ${isDarkMode ? 'text-tertiary-200': 'text-primary-200'}`}>If Not Now, When? <br /> Lets Work Together!</p>
            <p className={`font-bold lg:w-96 mt-8 ${isDarkMode ? 'text-white-300': 'text-tertiary-400'}`}>Ready to elevate your digital presence? I'm a full stack developer specializing in dynamic web solutions that merge technology with design. Let's bring your vision to life – contact me today.</p>    
      </div>
      <div className="lg:w-[40%] p-4 text-black-200">
        <ContactForm />
      </div>
  </section>
  )
}

export default Contact

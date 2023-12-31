import React from 'react'
import ContactForm from './ContactForm'
import { useTheme } from '../contexts/themeProvider'

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme()
  const darkModeStyles = 'bg-primary-600 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'

  return (
    <section
      id="contact"
      className={`${isDarkMode ? darkModeStyles : lightModeStyles} py-40 font-light`}
    >
      <div className="container font-montserrat flex flex-col items-center">
        <p className="mb-6 text-xl border-b-2 border-primary-500">CONTACT <span className="text-primary-200">ME</span></p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4">
            <p
              className={`text-2xl lg:text-3xl font-light ${
                isDarkMode ? 'text-tertiary-200' : 'text-primary-200'
              }`}
            >
              If Not Now, When? <br /> Lets Work Together!
            </p>
            <p
              className={`font-light lg:w-96 mt-8 ${
                isDarkMode ? 'text-white-300' : 'text-tertiary-400'
              }`}
            >
              Ready to elevate your digital presence? I'm a full stack developer
              specializing in dynamic web solutions that merge technology with
              design. Let's bring your vision to life – contact me today.
            </p>
          </div>
          <div className="p-4 text-black-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

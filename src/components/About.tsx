import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section
      id="about"
      className={`font-montserrat py-5 lg:py-5 font-light`}
    >
      <div className='container'>
        <div className='flex flex-col items-center'>
            <p className="mb-6 text-xl border-b-2 border-cyan-200 text-indigo-100">ABOUT <span className="text-yellow-200">ME</span></p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
            <p
              className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'`}
            >
             I'm a full stack developer with over 4+ years of experience. I love creating websites and applications that look great and work seamlessly. My goal is to build user-friendly experiences that make a difference.
             </p>
            <div className="flex justify-between">
              <motion.a
                href="https://github.com/Riya267"
                className={`font-bold border-2 mr-4 p-3 px-5 mt-4 rounded-[100px] font-openSans text-white`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Visit my work
              </motion.a>
            </div>
          </div>
          <img src="heroGirl.png" className="max-w-[50%] max-h-[50%]"/>
        </div>
      </div>
    </section>
  )
}

export default About

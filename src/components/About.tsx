import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section id="about" className="font-jetBrains py-20 font-light">
      <div className="container lg:p-10">
        <div className="flex flex-col items-center">
          <p className="mb-6 text-xl border-b-2 border-cyan-200 text-indigo-100">
            ABOUT <span className="text-yellow-200">ME</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start">
          <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:w-1/2">
            <p className="mt-4 text-indigo-100 text-lg lg:text-xl max-w-3xl leading-[30px]">
              I'm a passionate full stack developer with over 4 years of
              experience. I specialize in creating websites and applications
              that not only look great but also provide seamless user
              experiences. My goal is to build innovative solutions that make a
              positive impact.
            </p>
            <motion.a
              href="https://github.com/rahulSainisomething"
              className="font-bold border-2 p-3 px-5 mt-4 rounded-[100px] font-jetBrains text-white inline-block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Visit my work
            </motion.a>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="girlSitting.svg"
              alt="Hero Girl"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

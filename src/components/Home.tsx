import React from 'react'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  const handleCVDownload = (): void => {
    console.log('clicked')
    const link = document.createElement('a')
    link.href = '/RiyaCV.pdf'
    link.download = 'RiyaCV.pdf'
    link.click()
  }

  return (
    <section id="home" className="font-jetBrains pt-48 lg:py-20">
      <div className="container lg:p-10 flex flex-col justify-center items-center text-center lg:text-left lg:items-center">
        <p className="text-lg md:text-xl lg:text-2xl text-indigo-200">
          Hello, I'm <span className="text-rose-500">Riya Dhawan</span>,
        </p>
        <p className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mt-2">
          Web & Mobile Developer
        </p>
        <p className="text-lg text-indigo-600 mt-4 text-center">
          Welcome to my portfolio! I am specialized in building robust web and
          mobile applications
          <br className="sm:block hidden" />
          with a focus on creating seamless user experiences.
        </p>
        <motion.button
          onClick={handleCVDownload}
          className="font-bold border-2 p-3 px-5 mt-6 text-white border-indigo-200"
          whileHover={{ scale: 1.2, borderColor: '#b32241', color: '#FFFFFF' }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          Download CV
        </motion.button>
      </div>

      <div className="mt-4 text-center text-pink-600">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl lg:text-2xl px-2"
        >
          Explore my projects and skills below. Let's create something amazing
          together!
        </motion.p>
      </div>
    </section>
  )
}

export default Home

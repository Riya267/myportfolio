import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../constants/index'
import { Tilt } from 'react-tilt'

const ServiceCard: React.FC<{ title: string; icon: string }> = ({
  title,
  icon,
}) => (
  <motion.div
    className="p-1 rounded-md shadow-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      }}
      className="border-2 border-purple-500 rounded-md py-3 px-5 min-h-[150px] flex justify-center items-center flex-col overflow-hidden"
    >
      <img src={icon} alt={title} className="w-20 h-20 bg-contain bg-white" />
      <h3 className="mt-2 text-white text-lg font-bold text-center">{title}</h3>
    </Tilt>
  </motion.div>
)

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="container font-jetBrains py-5 lg:py-20 font-light"
    >
      <div className="flex flex-col items-center mt-10">
        <p className="mb-6 text-xl border-b-2 border-purple-500 text-purple-200">
          Services
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services

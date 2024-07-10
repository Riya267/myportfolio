import React from 'react'
import { motion } from 'framer-motion'
import { ServiceType, services } from '../constants/index'
import { Tilt } from 'react-tilt'

const ServiceCard: React.FC<ServiceType> = ({ title, description, icon }) => (
  <motion.div
    className="p-2 text-white border-2 border-[#97d8b2] border-dotted shadow-lg shadow-blue-600"
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
      className="rounded-md px-4 py-6 flex flex-row justify-center items-center overflow-hidden"
    >
      <div className="w-24 h-24">{icon}</div>
      <div>
        <h3 className="mt-4 mb-2 text-md font-bold text-center">{title}</h3>
        <p className="text-center text-sm">{description}</p>
      </div>
    </Tilt>
  </motion.div>
)

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="container font-jetBrains pt-40 lg:py-20 font-light"
    >
      <div className="flex flex-col items-center">
        <p className="mb-6 text-2xl font-bold border-b border-cyan-200 text-red-100">
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

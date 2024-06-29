import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { Tilt } from 'react-tilt';

const ServiceCard: React.FC<{ title: string, icon: string }> = ({ title, icon }) => (
  <motion.div className="p-[1px] rounded-[20px] shadow-card">
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="border-2 border-fuchsia-400 rounded-[20px] py-3 px-8 min-h-[180px] flex justify-evenly items-center flex-col"
    >
      <img
        src={icon}
        alt={title}
        className="w-20 h-20 bg-slate-100 rounded-sm p-1 bg-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
    </Tilt>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="font-montserrat py-5 lg:py-5 font-light">
      <div className="flex flex-col items-center mt-10">
        <p className="mb-6 text-xl border-b-2 border-violet-500 text-violet-200">
          Services
        </p>
      </div>
      <div className="my-10 flex flex-wrap gap-5 justify-center">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services

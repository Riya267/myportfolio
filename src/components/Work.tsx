import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../constants/index'
import { Tilt } from 'react-tilt'
import { useInView } from 'react-intersection-observer'

interface ExperienceCardProps {
  title: string
  company: string
  description: string
  tags: string[]
  start: string
  end: string
}

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  description,
  tags,
  start,
  end,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={cardVariants}
      whileHover="hover"
      whileTap="pressed"
      className="p-1 rounded-[20px] shadow-card w-[500px]"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="border-2 border-cyan-600 rounded-[20px] py-3 px-8 min-h-[180px] flex justify-evenly items-center flex-col bg-transparent"
      >
        <div className="text-center">
          <h3 className="text-cyan-50 text-[24px] font-bold">{company}</h3>
          <p className="text-rose-400 text-[20px]">{title}</p>
          <p className="text-pink-300 text-[14px]">
            {start} - {end}
          </p>
          <p className="text-[16px] mt-4">{description}</p>
          <div className="flex flex-wrap justify-center mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-700 rounded-full px-3 py-1 text-[12px] mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Work: React.FC = () => {
  return (
    <section id="work" className="font-jetBrains pt-48 lg:py-20 font-light">
      <div className="container mx-auto lg:p-10">
        <div className="flex flex-col items-center">
          <p className="mb-6 text-xl border-b-2 border-cyan-200 text-indigo-100">
            My Work <span className="text-pink-200">Experience</span>
          </p>
        </div>
        <div className="my-10 flex flex-wrap gap-5 justify-center">
          {experience.map((work) => (
            <ExperienceCard key={work.title} {...work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

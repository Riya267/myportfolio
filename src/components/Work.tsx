import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceType, experience } from '../constants/index'
import { useInView } from 'react-intersection-observer'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const ExperienceCard: React.FC<ExperienceType> = ({
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
      animate={inView ? { y: 30, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover="hover"
      whileTap="pressed"
      className="p-1 rounded-[20px] shadow-card h-auto min-h-[180px] my-5 lg:my-2  mx-2 lg:mx-10"
    >
      <div className="border-2 border-cyan-600 rounded-[20px] py-3 px-8 flex justify-evenly items-center flex-col bg-transparent">
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
      </div>
    </motion.div>
  )
}

const Work: React.FC = () => {
  return (
    <section id="work" className="font-jetBrains pt-40 lg:py-20 font-light">
      <div className="container mx-auto lg:p-10">
        <div className="flex flex-col items-center">
          <p className="mb-6 text-xl border-b-2 border-cyan-200 text-indigo-100">
            My Work <span className="text-pink-200">Experience</span>
          </p>
        </div>
        <div className="flex justify-between flex-col">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 375: 1, 768: 2, 1024: 2 }}
            gutter="10px"
          >
            <Masonry gutter="10px">
              {experience.map((work) => (
                <ExperienceCard key={work.title} {...work} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  )
}

export default Work

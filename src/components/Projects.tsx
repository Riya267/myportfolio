import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../constants/index'
import { Tilt } from 'react-tilt'
import { BsGithub } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

interface Project {
  index?: number
  name: string
  description: string
  tags: Array<{ name: string; color: string }>
  image: string
  sourceCodeLink: string
}

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
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
      className="p-[1px] rounded-[20px] shadow-card"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-transparent border-2 border-rose-50 border-dashed p-5 text-slate-500 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className="bg-slate-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <BsGithub color="black" className="text-[1rem]" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-slate-50 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-blue-300">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const ProjectsGrid: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState<number>(6)

  const loadMore = (): void => {
    setItemsToShow(itemsToShow + 6)
  }

  return projects?.length !== 0 ? (
    <section id="projects" className="font-light py-20">
      <div className="container font-jetBrains flex flex-col items-center lg:p-10">
        <p className="mb-6 text-xl border-b-2 border-fuchsia-400 text-fuchsia-200">
          My <span className="text-fuchsia-400">PROJECTS</span>
        </p>
        <p className="mt-3 text-slate-200 text-[17px] max-w-3xl leading-[30px]">
          These projects demonstrate my skills and experience through real-world
          examples. Each project includes a brief description, links to code
          repositories, and live demos. They showcase my problem-solving
          abilities, technological expertise, and project management skills.
        </p>
        <div className="mt-20 flex flex-wrap gap-7 justify-center w-full">
          {projects.slice(0, itemsToShow).map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
        {itemsToShow <= projects.length && (
          <motion.button
            onClick={loadMore}
            className="border-2 mr-4 p-3 px-5 my-8 rounded-[100px] font-jetBrains"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Load More
          </motion.button>
        )}
      </div>
    </section>
  ) : null
}

export default ProjectsGrid

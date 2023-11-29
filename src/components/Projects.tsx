import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTheme } from '../contexts/themeProvider';
const projects: any[] = [
  {
    name: 'Project 1',
    githubLink: 'https://github.com/project1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXApycX_aO8gvsIAtPimv5q59XlCLTqo974u2LF8adFSs7IVSYQp5mof7zxSOAAwARbo&usqp=CAU',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eget nunc.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    viewCodeButton: {
      url: 'https://github.com/project1',
    },
    viewProjectButton: {
      url: 'https://project1.com',
    },
  },
  {
    name: 'Project 1',
    githubLink: 'https://github.com/project1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXApycX_aO8gvsIAtPimv5q59XlCLTqo974u2LF8adFSs7IVSYQp5mof7zxSOAAwARbo&usqp=CAU',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eget nunc.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    viewCodeButton: {
      url: 'https://github.com/project1',
    },
    viewProjectButton: {
      url: 'https://project1.com',
    },
  },
]

const ProjectsGrid: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [itemsToShow, setItemsToShow] = useState(6)

  const loadMore = (): void => {
    setItemsToShow(itemsToShow + 6)
  }

  const darkModeStyles = 'bg-primary-600 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'
  const gridClasses = `${
    projects.length < 3
      ? 'flex flex-col lg:flex-row justify-between'
      : 'grid grid-cols-1 lg:grid-cols-3 gap-4'
  }`

  return projects?.length !== 0 ? (
    <section
      id="projects"
      className={`${isDarkMode ? darkModeStyles : lightModeStyles}`}
    >
      <div className="container font-montserrat flex flex-col items-center lg:p-10">
        <p className="mb-6 text-xl border-b-2 border-primary-500">My <span className="text-primary-200">PROJECTS</span></p>
        <div className={`${gridClasses}`}>
          {projects.slice(0, itemsToShow).map((project, index) => (
            <div
              key={`${project.name}_${index}`}
              className={`p-4 border rounded shadow-md ${
                projects.length < 3 ? 'my-5 lg:mx-5' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mt-2">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <ul className="mt-2 flex">
                {project.techStack.map((tech: string, techIndex: number) => (
                  <li
                    key={`${tech}_${techIndex}`}
                    className={
                      'bg-primary-200 text-white-200 rounded-full p-1 text-xs mr-2'
                    }
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col justify-start items-start">
                <motion.a
                  href={project.viewCodeButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mr-4 p-3 px-5 mt-4 border-b-2 border-primary-500 font-bold ${
                    isDarkMode ? 'text-white-200' : 'text-black-200'
                  } rounded-[100px] font-openSans text-sm`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Code
                </motion.a>
                <motion.a
                  href={project.viewProjectButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mr-4 p-3 px-5 mt-4 border-b-2 border-primary-500 font-bold ${
                    isDarkMode ? 'text-white-200' : 'text-black-200'
                  } rounded-[100px] font-openSans text-sm`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          ))}
        </div>
        {itemsToShow <= projects.length && (
          <motion.button
            onClick={loadMore}
            className={`border-2 mr-4 p-3 px-5 my-8 ${
              isDarkMode ? 'border-primary-200' : 'border-primary-500'
            } rounded-[100px] font-openSans`}
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

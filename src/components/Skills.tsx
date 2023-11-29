import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { ImMobile2 } from 'react-icons/im'
import { FaGraduationCap } from 'react-icons/fa'
import { useTheme } from '../contexts/themeProvider'

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();
  const darkModeStyles = 'bg-primary-600 text-white-100 shadow-white'
  const lightModeStyles = 'bg-white-200 text-black-200 shadow-black'

  const skillsInfo: Array<{ label: string; icon: React.ReactNode }> = [
    {
      label:
        'Developing blazing fast web applications for seamless user interaction.',
      icon: <CgWebsite size={20} />,
    },
    {
      label:
        'Mobile-first, responsive design layout for all devices is a top priority.',
      icon: <ImMobile2 size={20} />,
    },
    {
      label:
        'Constantly continues to learn new technologies and keeping up-to-date with the freshest trends.',
      icon: <FaGraduationCap size={20} />,
    },
  ]
  const skillBadges: Array<{ label: string; iconPath: string }> = [
    {
      label: 'HTML5',
      iconPath: '/html.png',
    },
    {
      label: 'CSS3',
      iconPath: '/css.png',
    },
    {
      label: 'javascript',
      iconPath: '/js.png',
    },
    {
      label: 'typescript',
      iconPath: '/typescript.png',
    },
    {
      label: 'React',
      iconPath: '/react.png',
    },
    {
      label: 'git',
      iconPath: '/git.png',
    },
    {
      label: 'node',
      iconPath: '/nodejs.png',
    },
    {
      label: 'express',
      iconPath: '/expressjs.png',
    },
    {
      label: 'nextjs',
      iconPath: '/nextjs.png',
    },
    {
      label: 'graphql',
      iconPath: '/graphql.png',
    },
    {
      label: 'redux',
      iconPath: '/redux.png',
    },
    {
      label: 'jest',
      iconPath: '/jest.png',
    },
    {
      label: 'Vtex',
      iconPath: '/vtex.png',
    },
    {
      label: 'react testing library',
      iconPath: '/rtl.png',
    },
  ]

  const handleColorChange = (): void => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.setProperty("--changeTextColor", "#" + randomColor);
  }

  return (
    <section
      id="skills"
      className={`${
        isDarkMode ? darkModeStyles : lightModeStyles
      } font-montserrat py-40`}
    >
      <div className="container font-montserrat flex flex-col items-center">
        <p className="mb-6 text-xl border-b-2 border-primary-500">SKILLS</p>
        <div className="flex flex-col lg:flex-row justify-evenly">
          {skillsInfo.map((item,index) => {
            return (
              <div className="flex justify-evenly lg:w-[35%] mb-4" key={`${item.label}_${index}`}>
                <span>{item.icon}</span>
                <span className="w-[80%]">{item.label}</span>
              </div>
            )
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skillBadges.map((item,index) => {
            return (
              <div className='flex justify-evenly w-24 h-24 mb-4 hover:border-2 rounded-full p-2 bg-white-200 hover:border-[var(--changeTextColor,black)]'
              onMouseOver={handleColorChange}
              key={`${item.label}_${index}`}
              >
                <img
                  src={item.iconPath}
                  alt={item.label}
                  className="object-contain"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

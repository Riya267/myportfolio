import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { ImMobile2 } from 'react-icons/im'
import { FaGraduationCap } from 'react-icons/fa'
import { useTheme } from '../contexts/themeProvider'
import handleColorChange from '../utils/setRandomColor'

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
      label: 'JAVASCRIPT',
      iconPath: '/js.png',
    },
    {
      label: 'TYPESCRIPT',
      iconPath: '/typescript.png',
    },
    {
      label: 'REACT',
      iconPath: '/react.png',
    },
    {
      label: 'GIT',
      iconPath: '/git.png',
    },
    {
      label: 'NODE.JS',
      iconPath: '/nodejs.png',
    },
    {
      label: 'EXPRESS.JS',
      iconPath: '/expressjs.png',
    },
    {
      label: 'NEXT.JS',
      iconPath: '/nextjs.png',
    },
    {
      label: 'GRAPHQL',
      iconPath: '/graphql.png',
    },
    {
      label: 'REDUX',
      iconPath: '/redux.png',
    },
    {
      label: 'JEST',
      iconPath: '/jest.png',
    },
    {
      label: 'VTEX',
      iconPath: '/vtex.png',
    },
    {
      label: 'REACT TESTING LIBRARY',
      iconPath: '/rtl.png',
    },
  ]

  return (
    <section
      id="skills"
      className={`${
        isDarkMode ? darkModeStyles : lightModeStyles
      } font-montserrat py-40 font-light`}
    >
      <div className="container font-montserrat flex flex-col items-center">
        <p className="mb-6 text-xl border-b-2 border-primary-500">MY <span className="text-primary-200">SKILLS</span></p>
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
              <div className='flex group relative justify-evenly w-24 h-24 mb-4 hover:border-2 rounded-full p-2 bg-white-200 hover:border-[var(--changeTextColor,black)]'
              onMouseOver={()=>{ handleColorChange('changeTextColor'); }}
              key={`${item.label}_${index}`}
              >
                <img
                  src={item.iconPath}
                  alt={item.label}
                  className="object-contain group-hover:hidden"
                />
                
                <p className='hidden text-sm text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:block text-[var(--changeTextColor,black)] font-bold'>{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

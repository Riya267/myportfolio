import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { ImMobile2 } from 'react-icons/im'
import { FaGraduationCap } from 'react-icons/fa'
import BallCanvas from '../utils/skillBox'
import { skillBadges } from '../constants'

const Skills: React.FC = () => {
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

  return (
    <section
      id="skills"
      className={`font-montserrat py-5 font-light flex items-center`}
    >
      <div className="container font-montserrat flex flex-col items-center">
        <p className="mb-6 text-xl border-b-2 border-rose-500 text-rose-200">MY <span className="text-rose-500">SKILLS</span></p>
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
        <div className='my-4 flex flex-row flex-wrap justify-center gap-10'>
          {skillBadges.map((item, index) => {
               return (
                  <div className='w-28 h-28 flex flex-col items-center' key={index}>
                    <p className='text-[10px]'>{item.label}</p>
                    <BallCanvas icon={item.iconPath} />
                  </div>
               )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

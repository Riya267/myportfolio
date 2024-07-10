import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { ImMobile2 } from 'react-icons/im'
import { FaGraduationCap } from 'react-icons/fa'
import BallCanvas from '../utils/SkillBox'
import { skillBadges } from '../constants/index'

const Skills: React.FC = () => {
  const skillsInfo: Array<{ label: string; icon: React.ReactNode }> = [
    {
      label:
        'I specialize in developing blazing fast web applications with a focus on seamless user interaction.',
      icon: <CgWebsite size={24} />,
    },
    {
      label:
        'I prioritize mobile-first, responsive design layouts to ensure optimal viewing and navigation across all devices.',
      icon: <ImMobile2 size={24} />,
    },
    {
      label:
        'I am committed to continuous learning, staying updated with the latest technologies and trends in web development.',
      icon: <FaGraduationCap size={24} />,
    },
  ]

  return (
    <section id="skills" className="font-jetBrains py-20 font-light">
      <div className="container flex flex-col justify-center items-center lg:p-10">
        <p className="mb-6 text-xl border-b-2 border-rose-500 text-rose-200 text-center w-fit ">
          MY <span className="text-rose-500">SKILLS</span>
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsInfo.map((item, index) => (
            <div
              className="flex items-center space-x-3"
              key={`${item.label}_${index}`}
            >
              <span className="text-rose-500">{item.icon}</span>
              <span className="text-sm md:text-base">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="my-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
          {skillBadges.map((item, index) => (
            <div
              className="flex flex-col items-center justify-between mx-6"
              key={index}
            >
              <BallCanvas icon={item.iconPath} />
              <p className="mt-2 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

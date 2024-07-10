import React from 'react'
import { skillBadges } from '../constants/index'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="font-jetBrains pt-48 lg:py-20 font-light">
      <div className="container flex flex-col justify-center items-center lg:p-10">
        <p className="mb-6 text-xl border-b-2 border-cyan-200 text-indigo-100 text-center w-fit ">
          MY <span className="text-rose-200">SKILLS</span>
        </p>
        <div className="flex flex-wrap justify-center">
          {skillBadges.map((skill, index) => (
            <div
              key={index}
              className={`m-4 p-6 rounded-lg shadow-lg shadow-gray-500 transform transition duration-500 hover:scale-110 border ${skill.bgColor}`}
            >
              <img
                src={skill.iconPath}
                alt={skill.label}
                className="w-16 h-16 mx-auto mb-4"
              />
              <div className="text-xl font-semibold">{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

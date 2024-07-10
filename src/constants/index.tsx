import { AiOutlineMail } from 'react-icons/ai'
import { BiCodeAlt, BiMobileAlt, BiServer } from 'react-icons/bi'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'

type ProjectTag = {
  name: string
  color: string
}

type ProjectType = {
  name: string
  description: string
  tags: ProjectTag[]
  image: string
  sourceCodeLink: string
}

export type ServiceType = {
  title: string
  description: string
  icon: React.ReactNode
}

type ExperienceType = {
  title: string
  company: string
  description: string
  tags: string[]
  start: string
  end: string
}

type SkillBadgeType = {
  label: string
  iconPath: string
  bgColor: string
}

type SocialLinkType = {
  name: string
  icon: React.ReactNode
  url: string
}

type BannerInfoItemType = {
  link: string
  message: string
}

const projects: ProjectType[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: '/projects/carrent.png',
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: '/projects/jobit.png',
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: '/projects/tripguide.png',
    sourceCodeLink: 'https://github.com/',
  },
]

const services: ServiceType[] = [
  {
    title: 'Web Developer',
    description:
      'Expertise in building responsive and scalable web applications using modern technologies like React, Angular, or Vue.js.',
    icon: <BiCodeAlt size={50} className="text-blue-500" />,
  },
  {
    title: 'React Native Developer',
    description:
      'Specialized in developing cross-platform mobile applications using React Native, ensuring native performance and user experience.',
    icon: <BiMobileAlt size={50} className="text-green-500" />,
  },
  {
    title: 'Backend Developer',
    description:
      'Proficient in designing and implementing robust server-side architectures, APIs, and databases for seamless integration with front-end applications.',
    icon: <BiServer size={50} className="text-purple-500" />,
  },
]

const experience: ExperienceType[] = [
  {
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    description:
      'Developed and maintained web applications using modern JavaScript frameworks and libraries.',
    tags: ['JavaScript', 'React', 'Node.js'],
    start: 'January 2020',
    end: 'June 2022',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Minds Ltd.',
    description:
      'Designed and implemented user interfaces for various web projects, focusing on responsive design and user experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
    start: 'July 2018',
    end: 'December 2019',
  },
  {
    title: 'Backend Developer',
    company: 'Innovatech Corp.',
    description:
      'Worked on server-side applications and APIs, ensuring efficient data processing and integration with frontend components.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    start: 'March 2016',
    end: 'May 2018',
  },
]

const skillBadges: SkillBadgeType[] = [
  {
    label: 'Html',
    iconPath: '/tech/html.png',
    bgColor: 'border-orange-500',
  },
  {
    label: 'Css',
    iconPath: '/tech/css.png',
    bgColor: 'border-blue-500',
  },
  {
    label: 'Javascript',
    iconPath: '/tech/javascript.png',
    bgColor: 'border-yellow-500',
  },
  {
    label: 'Typescript',
    iconPath: '/tech/typescript.png',
    bgColor: 'border-blue-600',
  },
  {
    label: 'React',
    iconPath: '/tech/reactjs.png',
    bgColor: 'border-cyan-500',
  },
  {
    label: 'Git',
    iconPath: '/tech/git.png',
    bgColor: 'border-red-600',
  },
  {
    label: 'Node.js',
    iconPath: '/tech/nodejs.png',
    bgColor: 'border-green-600',
  },
  {
    label: 'Express.js',
    iconPath: '/tech/expressjs.png',
    bgColor: 'border-gray-800',
  },
  {
    label: 'Next.js',
    iconPath: '/tech/nextjs.svg',
    bgColor: 'border-black',
  },
  {
    label: 'Graphql',
    iconPath: '/tech/graphql.png',
    bgColor: 'border-pink-500',
  },
  {
    label: 'Redux',
    iconPath: '/tech/redux.png',
    bgColor: 'border-purple-600',
  },
  {
    label: 'Jest',
    iconPath: '/tech/jest.png',
    bgColor: 'border-red-500',
  },
  {
    label: 'Docker',
    iconPath: '/tech/docker.png',
    bgColor: 'border-blue-400',
  },
  {
    label: 'MongoDB',
    iconPath: '/tech/mongodb.png',
    bgColor: 'border-green-500',
  },
  {
    label: 'Tailwind',
    iconPath: '/tech/tailwind.png',
    bgColor: 'border-teal-400',
  },
]

const socialLinks: SocialLinkType[] = [
  {
    name: 'LinkedIn',
    icon: <BsLinkedin className="text-white text-[1.6rem]" />,
    url: 'https://www.linkedin.com/in/riya-dhawan-592ab921a',
  },
  {
    name: 'Twitter',
    icon: <BsTwitterX className="text-white p-1 text-[1.6rem]" />,
    url: 'https://twitter.com/riyacec05',
  },
  {
    name: 'GitHub',
    icon: <BsGithub className="text-white text-[1.7rem] rounded-full" />,
    url: 'https://github.com/Riya267',
  },
  {
    name: 'Gmail',
    icon: <AiOutlineMail className="text-white text-[1.6rem] rounded-sm" />,
    url: 'mailto:riyacec05@gmail.com',
  },
]

const BannerInfo: BannerInfoItemType[] = [
  {
    link: 'https://www.freecodecamp.org/news/top-open-source-contributors-2023/',
    message: `I'm listed as a top contributor in freecodecamp opensource - check it out!`,
  },
]

export { projects, services, experience, skillBadges, socialLinks, BannerInfo }

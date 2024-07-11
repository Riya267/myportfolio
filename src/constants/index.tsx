import { AiOutlineMail } from 'react-icons/ai'
import { BiCodeAlt, BiMobileAlt, BiServer } from 'react-icons/bi'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'

type ProjectTag = {
  name: string
}

export type ProjectType = {
  name: string
  description: string
  tags: ProjectTag[]
  image: string
  sourceCodeLink: string
  projectLink?: string
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
    name: 'NoteTube',
    description:
      'Web-based platform that generates summarized notes based on YouTube video URLs provided by users, utilizing the ChatGPT API for generating these notes.',
    tags: [
      {
        name: 'React',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'Monorepo',
      },
      {
        name: 'ChatGptAPI',
      },
      {
        name: 'ServerSentEvents',
      },
      {
        name: 'Express.js',
      },
      {
        name: 'REST',
      },
      {
        name: 'CICD-gitHubAction',
      },
    ],
    image: '/projects/notetube.png',
    sourceCodeLink: 'https://github.com/Riya267/NoteTUBE',
    projectLink: 'https://notetube-ai.vercel.app',
  },
  {
    name: 'pixelGinie',
    description:
      'React Native app using the Pixabay API that shows wallpapers, filters, and other features. Users can search, view, and save wallpapers as favorites, with a login feature for accessing saved wallpapers.',
    tags: [
      {
        name: 'ReactNative',
      },
      {
        name: 'Expo',
      },
      {
        name: 'PixabayApi',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'ReactContext',
      },
    ],
    image: '/projects/wallpaper-app.png',
    sourceCodeLink: 'https://github.com/Riya267/wallpaper-app',
  },
  {
    name: 'My Portfolio',
    description:
      'A personal portfolio website showcasing my skills, projects, and contributions to open source. Built with React, Tailwind CSS, and TypeScript to provide a seamless and engaging user experience.',
    tags: [
      {
        name: 'React',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'FramerMotion',
      },
      {
        name: 'ReactHookForm',
      },
      {
        name: 'CICD-gitHubAction',
      },
    ],
    image: '/projects/myportfolio.png',
    sourceCodeLink: 'https://github.com/Riya267/myportfolio',
    projectLink: 'https://riyadhawan.vercel.app',
  },
]

const services: ServiceType[] = [
  {
    title: 'Web Developer',
    description:
      'Expertise in building responsive and scalable web applications using modern technologies like React, Next.js, tailwind',
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
    label: 'Git/Github',
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
  {
    label: 'Vtex',
    iconPath: '/tech/vtex.svg',
    bgColor: 'border-rose-400',
  },
  {
    label: 'React Testing Library',
    iconPath: '/tech/react-testing-library.png',
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

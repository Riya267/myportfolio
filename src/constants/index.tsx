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

export type ExperienceType = {
  title: string
  company: string
  description: string
  tags: string[]
  start: string
  end?: string
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
    title: 'Open Source Contributor - Hacktoberfest 2023',
    company: 'Hacktoberfest',
    description:
      'Successfully completed all four levels of Hacktoberfest 2023 by making significant contributions to freeCodeCamp’s open-source codebase. Demonstrated proficiency in version control (Git), issue tracking, and collaborative coding practices.',
    tags: ['Git', 'Open Source', 'Collaboration', 'freeCodeCamp'],
    start: 'October 2023',
  },
  {
    title: 'Contributor to freeCodeCamp Codebase',
    company: 'freeCodeCamp',
    description:
      'Recognized as one of the top contributor in the GitHub codebase of freeCodeCamp, a renowned open-source learning platform. Actively contributed by implementing new features, fixing bugs, and enhancing documentation, positively impacting the learning experience of millions of users. Wrote numerous test cases, including unit tests and end-to-end (E2E) tests using Playwright, ensuring high code quality and reliability. Worked closely with the freeCodeCamp community, following best practices in software development and open-source contribution.',
    tags: ['freeCodeCamp', 'GitHub', 'Playwright', 'Unit Tests', 'E2E Tests'],
    start: 'Various contributions since 2023',
  },
  {
    title: 'Experience Engineer L2',
    company: 'Publicis Sapient',
    description:
      'Specialized in developing microservices and micro-frontend architectures, I have designed cost-efficient cloud e-commerce solutions using the VTEX platform, executed a modular B2B e-commerce site with technologies like NX monorepo, Next.js, React, Tailwind CSS, and the Atomic design pattern. I integrated session management with Gigya and VTEX, optimized search functionality, created user-friendly order history pages, and ensured accessibility. Additionally, I built a web app for B2B customers to track invoices, orders, and shipments using the facade design pattern, developing session and Gigya validation microservices with Node.js and Express.js, and integrating Docker containers and unit tests. I also created a store locator page and integrated a tracking API with the Ninjavan portal.',
    tags: [
      'JavaScript',
      'React',
      'Node.js',
      'VTEX',
      'Microservices',
      'Micro-frontend',
    ],
    start: 'November 2022',
    end: 'Present',
  },
  {
    title: 'Associate Engineer',
    company: 'Goharness',
    description:
      'Developed mobile applications using React Native while managing state through Redux. Designed and implemented an integrated database using Firebase/Firestore, leveraging React architecture to provide on-demand data access.',
    tags: ['React Native', 'Redux', 'Firebase'],
    start: 'July 2020',
    end: 'November 2022',
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
    bgColor: 'border-orange-800',
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
    message: `I'm listed as one of the top contributor in freecodecamp opensource - check it out!`,
  },
]

export { projects, services, experience, skillBadges, socialLinks, BannerInfo }

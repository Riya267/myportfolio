import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'

type ProjectTag = {
  name: string
  color: string
}

type Project = {
  name: string
  description: string
  tags: ProjectTag[]
  image: string
  sourceCodeLink: string
}

type Service = {
  title: string
  icon: string
}

type Experience = {
  title: string
  company: string
  description: string
  tags: string[]
  start: string
  end: string
}

type SkillBadge = {
  label: string
  iconPath: string
}

type SocialLink = {
  name: string
  icon: React.ReactNode
  url: string
}

type BannerInfoItem = {
  link: string
  message: string
}

const projects: Project[] = [
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

const services: Service[] = [
  {
    title: 'Web Developer',
    icon: '/expertise/frontend.png',
  },
  {
    title: 'React Native Developer',
    icon: '/expertise/mobile.png',
  },
  {
    title: 'Backend Developer',
    icon: '/expertise/backend.png',
  },
]

const experience: Experience[] = [
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

const skillBadges: SkillBadge[] = [
  {
    label: 'Html',
    iconPath: '/tech/html.png',
  },
  {
    label: 'Css',
    iconPath: '/tech/css.png',
  },
  {
    label: 'Javascript',
    iconPath: '/tech/javascript.png',
  },
  {
    label: 'Typescript',
    iconPath: '/tech/typescript.png',
  },
  {
    label: 'React',
    iconPath: '/tech/reactjs.png',
  },
  {
    label: 'Git',
    iconPath: '/tech/git.png',
  },
  {
    label: 'Node.js',
    iconPath: '/tech/nodejs.png',
  },
  {
    label: 'Express.js',
    iconPath: '/tech/expressjs.png',
  },
  {
    label: 'Next.js',
    iconPath: '/tech/nextjs.svg',
  },
  {
    label: 'Graphql',
    iconPath: '/tech/graphql.png',
  },
  {
    label: 'Redux',
    iconPath: '/tech/redux.png',
  },
  {
    label: 'Jest',
    iconPath: '/tech/jest.png',
  },
  {
    label: 'Docker',
    iconPath: '/tech/docker.png',
  },
  {
    label: 'MongoDB',
    iconPath: '/tech/mongodb.png',
  },
  {
    label: 'Tailwind',
    iconPath: '/tech/tailwind.png',
  },
]

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: <BsLinkedin className="text-[#0077b5] bg-white text-[1.6rem]" />,
    url: 'https://www.linkedin.com/in/riya-dhawan-592ab921a',
  },
  {
    name: 'Twitter',
    icon: <BsTwitterX className="text-white bg-black p-1 text-[1.6rem]" />,
    url: 'https://twitter.com/riyacec05',
  },
  {
    name: 'GitHub',
    icon: (
      <BsGithub className="text-black text-[1.7rem] bg-white rounded-full" />
    ),
    url: 'https://github.com/Riya267',
  },
  {
    name: 'Gmail',
    icon: (
      <BiLogoGmail className="text-[#ea4335] text-[1.6rem] bg-white rounded-sm" />
    ),
    url: 'mailto:riyacec05@gmail.com',
  },
]

const BannerInfo: BannerInfoItem[] = [
  {
    link: 'https://www.freecodecamp.org/news/top-open-source-contributors-2023/',
    message: `I'm listed as a top contributor in freecodecamp opensource - check it out!`,
  },
]

export { projects, services, experience, skillBadges, socialLinks, BannerInfo }

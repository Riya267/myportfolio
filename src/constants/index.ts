const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '/carrent.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: '/jobit.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: '/tripguide.png',
      source_code_link: "https://github.com/",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: "/frontend.png"
    },
    {
      title: "React Native Developer",
      icon: "/mobile.png"
    },
    {
      title: "Backend Developer",
      icon: "/backend.png"
    }
  ]; 

  const experience = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      description: "Developed and maintained web applications using modern JavaScript frameworks and libraries.",
      tags: ["JavaScript", "React", "Node.js"],
      start: "January 2020",
      end: "June 2022"
    },
    {
      title: "Frontend Developer",
      company: "Creative Minds Ltd.",
      description: "Designed and implemented user interfaces for various web projects, focusing on responsive design and user experience.",
      tags: ["HTML", "CSS", "JavaScript", "Vue.js"],
      start: "July 2018",
      end: "December 2019"
    },
    {
      title: "Backend Developer",
      company: "Innovatech Corp.",
      description: "Worked on server-side applications and APIs, ensuring efficient data processing and integration with frontend components.",
      tags: ["Node.js", "Express", "MongoDB"],
      start: "March 2016",
      end: "May 2018"
    }
  ];
  
  export { projects, services, experience };
  
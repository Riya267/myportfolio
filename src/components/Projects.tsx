import React, { useState } from 'react';
const projects = [
    {
      "name": "Project 1",
      "githubLink": "https://github.com/project1",
      "image": "project1.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eget nunc.",
      "techStack": ["HTML", "CSS", "JavaScript"],
      "viewCodeButton": {
        "text": "View Code",
        "url": "https://github.com/project1"
      },
      "viewProjectButton": {
        "text": "View Project",
        "url": "https://project1.com"
      }
    },
    {
      "name": "Project 2",
      "githubLink": "https://github.com/project2",
      "image": "project2.jpg",
      "description": "Nullam nec leo id libero volutpat rhoncus. Sed ac metus eget nunc.",
      "techStack": ["Python", "Django", "React"],
      "viewCodeButton": {
        "text": "View Code",
        "url": "https://github.com/project2"
      },
      "viewProjectButton": {
        "text": "View Project",
        "url": "https://project2.com"
      }
    },
    {
      "name": "Project 3",
      "githubLink": "https://github.com/project3",
      "image": "project3.jpg",
      "description": "Praesent sagittis tellus eget ex blandit, et fringilla purus interdum.",
      "techStack": ["Java", "Spring Boot", "Angular"],
      "viewCodeButton": {
        "text": "View Code",
        "url": "https://github.com/project3"
      },
      "viewProjectButton": {
        "text": "View Project",
        "url": "https://project3.com"
      }
    },
    {
        "name": "Project 1",
        "githubLink": "https://github.com/project1",
        "image": "project1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eget nunc.",
        "techStack": ["HTML", "CSS", "JavaScript"],
        "viewCodeButton": {
          "text": "View Code",
          "url": "https://github.com/project1"
        },
        "viewProjectButton": {
          "text": "View Project",
          "url": "https://project1.com"
        }
      },
      {
        "name": "Project 2",
        "githubLink": "https://github.com/project2",
        "image": "project2.jpg",
        "description": "Nullam nec leo id libero volutpat rhoncus. Sed ac metus eget nunc.",
        "techStack": ["Python", "Django", "React"],
        "viewCodeButton": {
          "text": "View Code",
          "url": "https://github.com/project2"
        },
        "viewProjectButton": {
          "text": "View Project",
          "url": "https://project2.com"
        }
      },
      {
        "name": "Project 3",
        "githubLink": "https://github.com/project3",
        "image": "project3.jpg",
        "description": "Praesent sagittis tellus eget ex blandit, et fringilla purus interdum.",
        "techStack": ["Java", "Spring Boot", "Angular"],
        "viewCodeButton": {
          "text": "View Code",
          "url": "https://github.com/project3"
        },
        "viewProjectButton": {
          "text": "View Project",
          "url": "https://project3.com"
        }
      }
  ]
const Grid = () => {
  const [itemsToShow, setItemsToShow] = useState(6);

  const loadMore = () => {
    setItemsToShow(itemsToShow + 6);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projects.slice(0, itemsToShow).map((project, index) => (
        <div key={index} className="p-4 border rounded shadow-md">
          <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
          <h3 className="text-xl font-semibold mt-2">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
          <ul className="mt-2">
            {project.techStack.map((tech, techIndex) => (
              <li key={techIndex} className="bg-blue-500 text-white rounded-full p-1 text-xs mr-2">
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Code
            </a>
            <a
              href={project.viewProjectButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary ml-2"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
      {itemsToShow <= projects.length && (
        <div className="mt-4 text-center">
          <button onClick={loadMore} className="btn btn-primary">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Grid;

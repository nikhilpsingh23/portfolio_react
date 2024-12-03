import React from "react";
import "../style/projects.css";
const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "public/port.png",
  },
  {
    id: 2,
    title: "E-commerce",
    description: "An e-commerce platform for online shopping.",
    image: "public/ecom.png",
  },
  {
    id: 3,
    title: "Health Checkup",
    description: "A health checkup app for scheduling and monitoring.",
    image: "public/health.png",
  },
];

const Projects = () => {
  return (
    <div className="project-section">
      <h2 className="project-heading">My Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

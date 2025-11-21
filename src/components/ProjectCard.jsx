import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-green-500 text-white px-2 py-1 rounded text-xs">{tech}</span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
             className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">View Code</a>
          {project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
               className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">Live Demo</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



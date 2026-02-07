import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 group">

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4">
        
        {/* Title & Description */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white text-sm mb-3">{project.description}</p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-green-500 text-white px-2 py-1 rounded text-xs transform scale-90 group-hover:scale-100 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Click Hint */}
        <p className="text-gray-200 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view
        </p>

      </div>
    </div>
  );
};

export default ProjectCard;

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#0b1324] rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition transform hover:-translate-y-2">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <span className="text-xs text-gray-500">Web Project</span>
      </div>
    </div>
  );
};

export default ProjectCard;

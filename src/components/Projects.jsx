import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#050b14] via-[#070f1d] to-[#050b14] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-green-400 bg-green-400/10 px-4 py-1 rounded-full mb-4">
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            FEATURED PROJECTS
          </h2>

          <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>

          <p className="max-w-2xl mx-auto text-gray-400">
            A curated selection of projects I’ve built and worked on — focused on
            solving real problems with clean code and thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

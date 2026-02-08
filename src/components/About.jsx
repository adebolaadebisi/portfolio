import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "Backend Logic"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let’s explore some of my work and maybe find a little inspiration along the way.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-green-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#0b1220] border border-white/10 px-3 py-1 rounded-full text-sm text-gray-300 hover:text-green-400 hover:border-green-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CV Button */}
        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="/Adebola-Adebisi-CV.pdf"
            download
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

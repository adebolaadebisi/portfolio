import React from "react";
import { motion } from "framer-motion";

const skills = ["React", "TailwindCSS", "JavaScript", "Python", "HTML", "CSS", "Backend"];

const About = () => {
  // Container for staggered children
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // each skill appears with delay
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Profile Image */}
        <motion.img
          src="/IMG_5235.jpg"
          alt="adebola"
          className="w-40 h-40 mx-auto mb-6 border-4 border-green-700 rounded-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* About Title */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* About Text */}
        <motion.p
          className="mb-6 text-gray-700"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let’s explore some of my work and maybe find a little inspiration along the way!
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="mb-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 className="text-2xl font-semibold mb-4" variants={fadeInUp}>
            Skills
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                className="bg-green-500 text-white px-3 py-1 rounded-full text-sm cursor-default"
                variants={fadeInUp}
                whileHover={{ scale: 1.2, backgroundColor: "#16a34a" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          className="mt-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="/Adebola-Adebisi-CV.pdf" // ✅ corrected path
            download
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

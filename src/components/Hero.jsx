import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* Floating background shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-white-700 rounded-full opacity-20 top-10 left-10 animate-bounce-slow"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-green-400 rounded-full opacity-15 bottom-0 right-10 animate-bounce-slow"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
      />

      <div className="max-w-4xl w-full text-center md:text-left relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-white to-green-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Adebisi
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-2xl md:text-3xl mb-6 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Web Developer & Entrepreneur
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mb-8 text-gray-100 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I build interactive, clean web apps using{" "}
          <span className="font-semibold">React, TailwindCSS, JavaScript, Python</span>.
          <br />
          I also run <span className="font-semibold">Hanjolaad Bite</span>, offering tasty treats like potato chips, chinchin, plantain chips, peanuts, zobo drinks, zobo tea, and more.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="bg-gray-100 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-white transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

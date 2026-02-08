import React from "react";
import { motion } from "framer-motion";

const float = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0e1a2f] to-[#0b1220] text-white flex items-center overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl -top-20 -left-20"
        {...float}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0"
        {...float}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-sm tracking-wide">
            Welcome.
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
           I Am  Adebisi <br />
            <span className="text-green-400">Odefemi</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Web Developer & Entrepreneur
          </h2>

          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
            I build clean, interactive web experiences using modern tools like
            React and Tailwind CSS.  
            Beyond tech, I run{" "}
            <span className="text-green-400 font-semibold">
              Hanjolaad Bite
            </span>{" "}
            — blending creativity, business, and execution.
          </p>

          <div className="flex gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 px-6 py-3 rounded-lg text-white"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT – IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20"
          >
            <img
              src="/IMG_5235.jpg"
              alt="Adebisi"
              className="w-72 h-80 object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll</span>
        <span className="text-xl">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;

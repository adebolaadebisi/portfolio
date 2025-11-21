


import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-green-700 text-white py-24 flex items-center justify-center"
      data-aos="fade-up"
    >
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">
          Hi, I'm Adebisi
        </h1>

        <p className="text-xl mb-6" data-aos="fade-up">
          I am Passionate about building efficient web apps and solving problems with code.
        </p>

        <div className="space-x-4" data-aos="zoom-in">
          <a
            href="#projects"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-gray-100 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

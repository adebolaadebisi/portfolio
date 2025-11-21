import React from "react";

const skills = ["React", "TailwindCSS", "JavaScript", "Python", "HTML", "CSS", "Backend"];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <img 
          src="/IMG_5235.jpg"   
          alt="adebola" 
          className="w-40 h-40 mx-auto mb-6 border-4 border-green-700 rounded-lg object-cover"
        />

        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="mb-6 text-gray-700">
          I'm Adebisi,Passionate about creating clean, interactive, and impactful web apps. 
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>

        <div className="mt-6">
          <a href="/public\Adebola-Adebisi-CV.pdf" download
             className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">Download CV</a>
        </div>

      </div>
    </section>
  );
};

export default About;

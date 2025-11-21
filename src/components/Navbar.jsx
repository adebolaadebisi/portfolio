import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-green-700">Adebisi</div>
        <div className="flex items-center space-x-6">
          <a href="#hero" className="hover:text-green-700 transition">Home</a>
          <a href="#about" className="hover:text-green-700 transition">About</a>
          <a href="#projects" className="hover:text-green-700 transition">Projects</a>
          <a href="#contact" className="hover:text-green-700 transition">Contact</a>
          <div className="flex space-x-3 ml-4">
            <a href="https://github.com/adebolaadebisi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition text-lg"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/adebisi-odefemi-1a85b0382/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition text-lg"><FaLinkedin /></a>
            <a href="https://www.facebook.com/share/1D9jCp7yeb/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition text-lg"><FaFacebook /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

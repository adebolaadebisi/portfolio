import React, { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "projects", "contact"];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 80;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-shadow bg-gradient-to-r from-green-700 via-green-600 to-green-700 ${
        scrolled ? "shadow-md backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold text-white cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Adebisi
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {["about", "projects", "contact"].map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className={`font-medium ${
                activeSection === section ? "text-gray-200" : "text-white"
              }`}
              whileHover={{ scale: 1.1, color: "#d1fae5" }} // subtle hover effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-3 ml-4">
            {[{
              icon: <FaGithub />,
              link: "https://github.com/adebolaadebisi"
            },{
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/adebisi-odefemi-1a85b0382/"
            },{
              icon: <FaFacebook />,
              link: "https://www.facebook.com/share/1D9jCp7yeb/?mibextid=LQQJ4d"
            }].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
                whileHover={{ scale: 1.2, color: "#d1fae5" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-gradient-to-r from-green-700 via-green-600 to-green-700 shadow-md flex flex-col items-center py-4 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {["about", "projects", "contact"].map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`font-medium ${
                activeSection === section ? "text-gray-200" : "text-white"
              }`}
              whileHover={{ scale: 1.1, color: "#d1fae5" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    // Root container with smooth scrolling and Poppins font
    <div className="font-poppins text-gray-900 scroll-smooth">
      
      {/* Navbar Section */}
      <Navbar />

      {/* Hero / Intro Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  // State to track whether the button should be visible
  const [visible, setVisible] = useState(false);

  // Effect to add a scroll listener when component mounts
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if user has scrolled more than 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup listener when component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to smoothly scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Render button only if 'visible' is true
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition z-50"
        aria-label="Back to Top"
      >
        {/* Up arrow icon */}
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTop;

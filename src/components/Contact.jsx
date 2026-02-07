import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

// Social media links with icon, URL, label, and hover color
const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/adebolaadebisi", label: "GitHub", color: "hover:text-black" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adebisi-odefemi-1a85b0382/", label: "LinkedIn", color: "text-blue-700 hover:text-blue-800" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/share/1D9jCp7yeb/?mibextid=LQQJ4d", label: "Facebook", color: "text-blue-600 hover:text-blue-700" },
];

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({}); // Validation errors
  const [status, setStatus] = useState({ success: "", error: "" }); // Submission status messages
  const [submitting, setSubmitting] = useState(false); // Loading state
  const [showPopup, setShowPopup] = useState(false); // Success popup visibility

  // Function to submit the form data to backend
  const submitMessage = async (data) => {
    const BACKEND_URL = "http://localhost:8000"; // Replace with your backend URL
    const res = await fetch(`${BACKEND_URL}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Network response was not ok");
    }

    return res.json();
  };

  // Handle form input changes and reset errors for that field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    // If there are validation errors, set them and exit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Async function to send message
    const sendMessage = async () => {
      setSubmitting(true);
      setStatus({ success: "", error: "" });
      try {
        await submitMessage(formData);
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
        setStatus({ success: "Message sent successfully!", error: "" });
        setShowPopup(true); // Show success popup
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3s
      } catch (err) {
        setStatus({ success: "", error: err.message || "Something went wrong." });
      } finally {
        setSubmitting(false);
      }
    };

    sendMessage();
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-gray-700">Let's talk</p>

        {/* Contact Form */}
        <form className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6" onSubmit={handleSubmit}>

          {/* Name Field */}
          <div className="col-span-2 sm:col-span-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="col-span-2 sm:col-span-1">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div className="col-span-2 sm:col-span-1">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />
          </div>

          {/* Message Field */}
          <div className="col-span-2">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.message ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className={`col-span-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status.success && <p className="text-green-600 mb-4">{status.success}</p>}
        {status.error && <p className="text-red-500 mb-4">{status.error}</p>}

        {/* Contact Info: Phone and WhatsApp */}
        <div className="flex justify-center items-center gap-6 mb-6 text-gray-700 text-lg">
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-700" />
            <span>08100829101</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <span>08100829101</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 text-2xl text-gray-700 mb-6">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative ${link.color} transition transform hover:scale-125 group`}
            >
              {link.icon}
              {/* Tooltip on hover */}
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
            Message Sent Successfully!
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/08100829101"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Inline CSS for popup animation */}
      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Contact;

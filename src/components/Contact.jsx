// import React from "react";
// import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

// const socialLinks = [
//   { icon: <FaGithub />, url: "https://github.com/adebolaadebisi", label: "GitHub", color: "hover:text-black" },
//   { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adebisi-odefemi-1a85b0382/", label: "LinkedIn", color: "text-blue-700 hover:text-blue-800" },
//   { icon: <FaFacebook />, url: "https://www.facebook.com/share/1D9jCp7yeb/?mibextid=LQQJ4d", label: "Facebook", color: "text-blue-600 hover:text-blue-700" },
// ];

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
//         <p className="mb-6 text-gray-700">Let's talk</p>

//         <form className="flex flex-col gap-4 max-w-lg mx-auto mb-6">
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input 
//             type="email" 
//             placeholder="Your Email" 
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <button 
//             type="submit" 
//             className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
//           >
//             Send Message
//           </button>
//         </form>

//         <div className="flex justify-center items-center gap-6 mb-6 text-gray-700 text-lg">
//           <div className="flex items-center gap-2">
//             <FaPhone className="text-green-700" />
//             <span>08100829101</span>
//           </div>

//           <a
//             href="https://wa.me/2348100829101"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 hover:text-green-600 transition"
//           >
//             <FaWhatsapp className="text-green-500" />
//             <span>08100829101</span>
//           </a>
//         </div>

//         <div className="flex justify-center gap-6 text-2xl text-gray-700">
//           {socialLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`relative ${link.color} transition group`}
//             >
//               {link.icon}
//               <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                 {link.label}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

// const socialLinks = [
//   { icon: <FaGithub />, url: "https://github.com/adebolaadebisi", label: "GitHub", color: "hover:text-black" },
//   { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adebisi-odefemi-1a85b0382/", label: "LinkedIn", color: "text-blue-700 hover:text-blue-800" },
//   { icon: <FaFacebook />, url: "https://www.facebook.com/share/1D9jCp7yeb/?mibextid=LQQJ4d", label: "Facebook", color: "text-blue-600 hover:text-blue-700" },
// ];

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");
//   const [sending, setSending] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("");
//     setSending(true);

//     try {
//       const res = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) {
//         const text = await res.text().catch(() => null);
//         throw new Error(text || `Request failed (${res.status})`);
//       }

//       const data = await res.json();
//       setStatus(data.message || "Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       setStatus("Error: " + (err.message || "Could not send message"));
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-6 text-center">

//         <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
//         <p className="mb-6 text-gray-700">Let's talk</p>

//         <form 
//           onSubmit={handleSubmit} 
//           className="flex flex-col gap-4 max-w-lg mx-auto mb-6"
//         >
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input 
//             type="email" 
//             placeholder="Your Email" 
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <button 
//             type="submit" 
//             disabled={sending}
//             aria-busy={sending}
//             className={`bg-green-700 text-white px-6 py-3 rounded-lg transition ${sending ? 'opacity-60 cursor-not-allowed' : 'hover:bg-green-800'}`}
//           >
//             {sending ? 'Sending...' : 'Send Message'}
//           </button>

//           {status && <p className="text-green-700 mt-2">{status}</p>}
//         </form>

//         {/* Contacts */}
//         <div className="flex justify-center items-center gap-6 mb-6 text-gray-700 text-lg">
//           <div className="flex items-center gap-2">
//             <FaPhone className="text-green-700" />
//             <span>08100829101</span>
//           </div>

//           <a
//             href="https://wa.me/2348100829101"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 hover:text-green-600 transition"
//           >
//             <FaWhatsapp className="text-green-500" />
//             <span>08100829101</span>
//           </a>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-6 text-2xl text-gray-700">
//           {socialLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`relative ${link.color} transition group`}
//             >
//               {link.icon}
//               <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                 {link.label}
//               </span>
//             </a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;
// import React, { useState } from "react";
// import { FaGithub, FaLinkedin,   FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

// const socialLinks = [
//   { icon: <FaGithub />, url: "https://github.com/adebolaadebisi", label: "GitHub", color: "hover:text-black" },
//   { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adebisi-odefemi-1a85b0382/", label: "LinkedIn", color: "text-blue-700 hover:text-blue-800" },
//   { icon: <FaFacebook />, url: "https://www.facebook.com/share/1D9jCp7yeb/?mibextid=LQQJ4d", label: "Facebook", color: "text-blue-600 hover:text-blue-700" },
// ];

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState({ success: "", error: "" });
//   const [submitting, setSubmitting] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     const sendMessage = async () => {
//       setSubmitting(true);
//       setStatus({ success: "", error: "" });
//       try {
//         await submitMessage(formData);
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setStatus({ success: "Message sent successfully!", error: "" });
//         setShowPopup(true);
//         setTimeout(() => setShowPopup(false), 3000);
//       } catch (err) {
//         setStatus({ success: "", error: err.message || "Something went wrong." });
//       } finally {
//         setSubmitting(false);
//       }
//     };
//     sendMessage();
//   };
//   return (
//     <section id="contact" className="py-20 bg-white relative">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
//         <p className="mb-6 text-gray-700">let's talk</p>
//         <form className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6" onSubmit={handleSubmit}>
//           <div className="col-span-2 sm:col-span-1">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>
//           <div className="col-span-2 sm:col-span-1">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>
//           <div className="col-span-2 sm:col-span-1">
//             <input
//               type="text"
//               name="phone"
//               placeholder="Your Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
//             />
//           </div>
//           <div className="col-span-2">
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               className={`border rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.message ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//           </div>
//           <button
//             type="submit"
//             disabled={submitting}
//             className={`col-span-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
//           >
//             {submitting ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//         {status.success && <p className="text-green-600 mb-4">{status.success}</p>}
//         {status.error && <p className="text-red-500 mb-4">{status.error}</p>}
//         <div className="flex justify-center items-center gap-6 mb-6 text-gray-700 text-lg">
//           <div className="flex items-center gap-2">
//             <FaPhone className="text-green-700" />
//             <span>08100829101</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaWhatsapp className="text-green-500" />
//             <span>08100829101</span>
//           </div>
//         </div>
//         <div className="flex justify-center gap-6 text-2xl text-gray-700 mb-6">
//           {socialLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`relative ${link.color} transition transform hover:scale-125 group`}
//             >
//               {link.icon}
//               <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                 {link.label}
//               </span>
//             </a>
//           ))}
//         </div>
//         {showPopup && (
//           <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg ">
//             Message Sent Successfully!
//           </div>
//         )}
//         <a
//           href="https://wa.me/08100829101"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
//         >
//           <FaWhatsapp size={24} />
//         </a>
//       </div>
//       <style>{`
//         @keyframes slide-up {
//           0% { transform: translateY(50px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
       
//       `}</style>
//     </section>
//   );
// };
// export default Contact;


import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/adebolaadebisi", label: "GitHub", color: "hover:text-black" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adebisi-odefemi-1a85b0382/", label: "LinkedIn", color: "text-blue-700 hover:text-blue-800" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/share/1D9jCp7yeb/?mibextid=LQQJ4d", label: "Facebook", color: "text-blue-600 hover:text-blue-700" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ success: "", error: "" });
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // --- submitMessage function ---
  const submitMessage = async (data) => {
    // Hardcoded backend URL for local dev
    const BACKEND_URL = "http://localhost:8000";

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

  // --- handle input changes ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // --- handle form submit ---
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const sendMessage = async () => {
      setSubmitting(true);
      setStatus({ success: "", error: "" });
      try {
        await submitMessage(formData);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus({ success: "Message sent successfully!", error: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
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
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-gray-700">Let's talk</p>

        {/* Form */}
        <form className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6" onSubmit={handleSubmit}>
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

        {/* Contact Info */}
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

        {/* Social Links */}
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
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
            Message Sent Successfully!
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/08100829101"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

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

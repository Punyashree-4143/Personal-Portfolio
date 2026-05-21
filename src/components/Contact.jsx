import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  const inputClasses = "w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-slate-500";
  const errorInputClasses = "border-red-400/50 focus:border-red-400 bg-red-400/5";
  const labelClasses = "block text-sm font-medium text-slate-300 mb-3";

  return (
    <SectionWrapper id="contact" bgClass="bg-[#0a0a0f]" paddingClass="pt-24 pb-32">
      <SectionHeader 
        title="Get in touch"
        subtitle="I'm always open to discussing new opportunities, collaborations, or interesting ideas."
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-white">
            Contact information
          </h3>

          <div className="space-y-5">
            {/* LOCATION */}
            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-center gap-5 p-5 rounded-2xl glass hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300 border border-cyan-400/20">
                <MdLocationOn className="text-cyan-300 text-2xl" />
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-1">Location</p>
                <p className="text-white font-medium text-lg">Bengaluru, Karnataka</p>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=punyashree978@gmail.com&su=Portfolio%20Contact&body=Hi%20Punyashree,%0A%0A"
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 8 }}
              className="flex items-center gap-5 p-5 rounded-2xl glass hover:border-cyan-400/30 transition-all duration-300 group block"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300 border border-cyan-400/20">
                <FaEnvelope className="text-cyan-300 text-2xl" />
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-1">Email</p>
                <p className="text-white font-medium text-lg group-hover:text-cyan-300 transition-colors">
                  punyashree978@gmail.com
                </p>
              </div>
            </motion.a>

            {/* SOCIAL LINKS */}
            <div className="pt-6">
              <p className="text-slate-500 text-sm mb-5">Connect with me</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Punyashree-4143"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl glass hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <FaGithub className="text-2xl text-white group-hover:text-cyan-300 transition-colors" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/punyashree-nagaraju-9675b62a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl glass hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-2xl text-white group-hover:text-cyan-300 transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className={`${inputClasses} ${errors.name ? errorInputClasses : ""}`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className={`${inputClasses} ${errors.email ? errorInputClasses : ""}`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                placeholder="Tell me about your project or just say hello..."
                className={`${inputClasses} resize-none ${errors.message ? errorInputClasses : ""}`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.02, y: -2 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              className={`w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                status === "sending"
                  ? "bg-slate-700 text-slate-300 cursor-not-allowed"
                  : status === "success"
                  ? "bg-green-500/20 text-green-300 border border-green-400/30"
                  : status === "error"
                  ? "bg-red-500/20 text-red-300 border border-red-400/30"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              }`}
            >
              {status === "sending" ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : status === "success" ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully!
                </span>
              ) : status === "error" ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Something went wrong
                </span>
              ) : (
                "Send message"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

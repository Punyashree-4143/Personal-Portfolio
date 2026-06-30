import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
`Hi Punyashree,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );

    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=punyashree978@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );

      setIsSubmitting(false);
      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 4500);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Punyashree-4143",
      icon: <Github className="w-4.5 h-4.5" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/punyashree-nagaraju-9675b62a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <Linkedin className="w-4.5 h-4.5" />,
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=punyashree602@gmail.com&su=Portfolio%20Contact&body=Hi%20Punyashree,%0A%0A",
      icon: <Mail className="w-4.5 h-4.5" />,
    },
  ];

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>05 // DISPATCH_COMMUNICATION</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-sans font-bold text-white mb-10 tracking-wide">
          Get In Touch
        </h2>

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-10"
        >
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none"
                />
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100" />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none"
                />
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100" />
              </div>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none resize-none"
              />
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100" />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 disabled:bg-zinc-800 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-400/10"
              >
                <span>
                  {isSubmitting ? "Opening Gmail..." : "Send Message"}
                </span>
                <Send className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Gmail opened successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-zinc-900">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
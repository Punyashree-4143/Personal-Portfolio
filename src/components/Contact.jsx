import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
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
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="bg-[#020617] text-white py-28 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* TOP TEXT */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold mb-4">
            Get in touch
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            I’m always open to discussing new opportunities, collaborations,
            or interesting ideas.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-slate-200">
              Contact information
            </h3>

            <div className="space-y-6 text-slate-400 text-sm">
              {/* LOCATION */}
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-cyan-300 text-lg" />
                <span>Bengaluru, Karnataka</span>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <MdEmail className="text-cyan-300 text-lg" />
                <a
                  href="mailto:yourname@email.com"
                  className="hover:text-cyan-300 transition"
                >
                  yourname@email.com
                </a>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex flex-col gap-4 pt-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-300 transition"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-300 transition"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white/5
                         border border-white/10
                         focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-white/5
                         border border-white/10
                         focus:outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg bg-white/5
                         border border-white/10
                         focus:outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-cyan-400/10
                         text-cyan-300 hover:bg-cyan-400/20 transition"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message sent ✓"
                : status === "error"
                ? "Something went wrong"
                : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

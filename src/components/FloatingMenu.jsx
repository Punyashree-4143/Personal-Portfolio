import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt, FaTimes } from "react-icons/fa";

const menuItems = [
  { href: "/RESUMEPUNYA.pdf", label: "Resume", icon: FaFileAlt },
  { href: "https://github.com/Punyashree-4143", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/punyashree-nagaraju-9675b62a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn", icon: FaLinkedin },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full glass flex items-center justify-center text-2xl text-white glow-subtle hover:glow transition-all duration-300"
      >
        ⋮
      </motion.button>

      {/* PANEL */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-24 right-8 z-50 glass-strong rounded-2xl p-4 w-64 space-y-2"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-sm font-medium text-slate-300">Quick Links</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-slate-400 hover:text-white" />
                </button>
              </div>

              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <item.icon className="text-lg group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.a>
              ))}

              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=punyashree978@gmail.com&su=Portfolio%20Contact&body=Hi%20Punyashree,%0A%0A"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-400/20 hover:border-cyan-400/40 text-cyan-300 hover:text-cyan-200 transition-all duration-300 group"
              >
                <FaEnvelope className="text-lg" />
                <span className="text-sm font-medium">Email Me</span>
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

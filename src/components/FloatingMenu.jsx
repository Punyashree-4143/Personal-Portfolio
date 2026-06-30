import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, FileText, X, ShieldAlert } from "lucide-react";

const menuItems = [
  { href: "/RESUMEPUNYA.pdf", label: "Resume", icon: FileText },
  { href: "https://github.com/Punyashree-4143", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/punyashree-nagaraju-9675b62a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn", icon: Linkedin },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TRIGGER BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass-panel border border-cyan-500/20 hover:border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg cursor-pointer pointer-events-auto"
      >
        <span className="mb-0.5 text-lg font-mono-tech">⋮</span>
      </motion.button>

      {/* MODAL PANEL */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed bottom-20 right-6 z-50 glass-panel border border-white/[0.08] rounded-2xl p-4 w-56 space-y-2 pointer-events-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3 px-1 font-mono-tech">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">quick_links</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/[0.05] border border-transparent hover:border-zinc-800 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-zinc-500 hover:text-white" />
                </button>
              </div>

              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/40 hover:border-cyan-500/20 text-zinc-400 hover:text-white transition-all duration-300 group"
                >
                  <item.icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-xs font-semibold font-mono-tech">{item.label.toLowerCase()}</span>
                </motion.a>
              ))}

              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=punyashree602@gmail.com&su=Portfolio%20Contact&body=Hi%20Punyashree,%0A%0A"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.12 }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 hover:from-cyan-500/20 hover:to-violet-500/20 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 hover:text-cyan-200 transition-all duration-300 group"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold font-mono-tech">email_me</span>
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

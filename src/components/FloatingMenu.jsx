import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-xl"
      >
        ⋮
      </button>

      {/* PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 bg-[#020617]/90 border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-4"
          >
            <a href="/resume.pdf" className="block text-slate-300 hover:text-white">Resume</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white">LinkedIn</a>
            <a href="mailto:your@email.com" className="block text-slate-300 hover:text-white">Email</a>

            <button
              onClick={() => setOpen(false)}
              className="text-xs text-slate-500 pt-2"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

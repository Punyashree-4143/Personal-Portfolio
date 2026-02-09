import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";



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
            <a href="/PunyaResume.pdf" className="block text-slate-300 hover:text-white">Resume</a>
            <a href="https://github.com/Punyashree-4143" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/punyashree-nagaraju-9675b62a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white">LinkedIn</a>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=punyashree978@gmail.com&su=Portfolio%20Contact&body=Hi%20Punyashree,%0A%0A"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 px-4 py-2
             bg-[#020617] border border-white/10
             rounded-xl text-slate-300 hover:text-cyan-300 transition"
>
  <FaEnvelope /> Email
</a>




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

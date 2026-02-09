import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("cover");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#020617]">

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setMenuOpen(true)}
        className="absolute top-6 right-6 z-30 flex flex-col gap-1.5"
        aria-label="Open menu"
      >
        <span className="w-7 h-[2px] bg-white" />
        <span className="w-7 h-[2px] bg-white" />
        <span className="w-7 h-[2px] bg-white" />
      </button>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur"
          >
            {/* CLOSE */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col items-center justify-center gap-10 text-2xl font-medium"
            >
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-300 transition"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-300 transition"
              >
                Skills
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-300 transition"
              >
                About
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIVE BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-black"
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_45%)]"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl">

        <p className="tracking-[0.35em] text-sm text-slate-400 mb-8">
          PUNYA SHREE
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Developer
        </h1>

        {/* ROLE WIPE */}
        <div className="relative inline-flex items-center text-2xl md:text-3xl font-semibold text-slate-300 overflow-hidden">
          <span className="mr-3 text-slate-400">+</span>

          <span className="relative z-10 whitespace-nowrap">
            {roles[roleIndex]}
          </span>

          <motion.div
            className="absolute left-6 top-0 h-full w-full bg-cyan-400 z-20 origin-left"
            initial={{ scaleX: 0 }}
            animate={
              phase === "cover"
                ? { scaleX: 1 }
                : phase === "reveal"
                ? { x: "100%" }
                : { scaleX: 0, x: 0 }
            }
            transition={{ duration: 0.55, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (phase === "cover") {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setPhase("reveal");
              }
              if (phase === "reveal") {
                setPhase("idle");
              }
            }}
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-cyan-400/40
                       text-cyan-300 hover:bg-cyan-400/10
                       transition backdrop-blur"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-white/5
                       text-slate-200 hover:bg-white/10
                       transition backdrop-blur"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

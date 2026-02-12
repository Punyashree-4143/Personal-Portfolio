import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React Engineer",
  "Backend Engineer",
  "DevOps Enthusiast",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden bg-[#0f172a] text-white">

      {/* === Background Glow Orbs === */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* === Main Content === */}
      <div className="relative z-10 max-w-4xl">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 text-lg tracking-widest mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Punyashree
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          {roles[index]}
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-slate-400 max-w-xl leading-relaxed"
        >
          I build scalable web applications and intelligent systems.
          Passionate about full stack development, automation, and AI-driven solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-medium shadow-lg shadow-cyan-500/20"
          >
            View Projects
          </a>

          <a
            href="/PunyaResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

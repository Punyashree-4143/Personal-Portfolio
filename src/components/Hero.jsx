import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, FileText, ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();

    const element = document.getElementById("projects");

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const roles = [
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
    "AI / ML Enthusiast",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const pitchText =
    "Building scalable web applications, real-time event-driven systems, and AI-powered platforms. Passionate about creating intuitive user experiences and efficient backend architectures.";

  const pitchWords = pitchText.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full px-6 relative z-10"
      >
        {/* Terminal Badge */}
        <motion.div
          variants={childVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-mono mb-10"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>system.status("EXEC_LOAD")</span>
        </motion.div>

        {/* Hello */}
        <motion.p
          variants={childVariants}
          className="text-cyan-400 uppercase tracking-[0.35em] font-mono text-sm mb-3"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={childVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.18em] text-white leading-none mb-6"
        >
          PUNYASHREE
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          variants={childVariants}
          className="h-10 sm:h-12 flex items-center mb-8"
        >
          <span className="text-cyan-400 text-xl font-mono mr-3">&gt;</span>

          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[currentRole]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl font-mono uppercase tracking-[0.15em] text-cyan-400"
            >
              {roles[currentRole]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="max-w-2xl text-zinc-400 text-base leading-8 mb-12"
        >
          {pitchWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 8,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-start gap-5"
        >
          <motion.a
            href="#projects"
            onClick={handleScrollToProjects}
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-mono font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>View Projects</span>

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <a
            href="/RESUMEPUNYA.pdf"
            download="Punyashree_Resume.pdf"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 text-zinc-300 font-mono text-xs uppercase tracking-[0.15em] transition-all"
          >
            <FileText className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform duration-300" />

            <span>Download Resume</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
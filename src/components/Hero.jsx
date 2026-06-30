import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileText, ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  // Splitting words for pitch reveal
  const pitchText = "Building scalable web applications, real-time event-driven systems, and AI-powered platforms.";
  const pitchWords = pitchText.split(" ");

  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center z-10 relative"
      >
        {/* Monospace Code Label */}
        <motion.div
          variants={childVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-cyan-500/25 bg-cyan-950/20 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-8"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>system.status("EXEC_LOAD")</span>
        </motion.div>

        {/* Title Stagger */}
        <motion.h1
          variants={childVariants}
          className="text-5xl sm:text-7xl font-sans font-black tracking-tight text-white mb-4"
        >
          Punyashree
        </motion.h1>

        {/* Subtitle / Role Stagger */}
        <motion.h2
          variants={childVariants}
          className="text-lg sm:text-2xl font-mono text-cyan-400 font-semibold mb-6 tracking-wide"
        >
          Full Stack & React Developer
        </motion.h2>

        {/* Pitch Stagger (Reveal word-by-word) */}
        <motion.p
          variants={childVariants}
          className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-sans"
        >
          {pitchWords.map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block mr-1"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Action Controls */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Looping pulse button */}
          <motion.a
            href="#projects"
            onClick={handleScrollToProjects}
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-400/10 cursor-pointer w-full sm:w-auto"
          >
            <span>Execute Search // View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>

          <a
  href="/RESUMEPUNYA.pdf"
  download="Punyashree_Resume.pdf"
  className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 text-zinc-300 font-mono text-xs uppercase tracking-wider w-full sm:w-auto"
>
  <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-3 transition-transform" />
  <span>Download Resume</span>
</a>
        </motion.div>

      </motion.div>
    </section>
  );
}

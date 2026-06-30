import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-24 border-y border-zinc-900 relative">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto px-6"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-4">
          <User className="w-3.5 h-3.5" />
          <span>01 // ORIGIN_DATA</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-sans font-bold text-white mb-6 tracking-wide">
          Engineering Mindset
        </h2>

        {/* Narrative Copy */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          I am an MCA graduate and software engineer focused on solving complex problems through clean system design and backend architecture. My work bridges the gap between scalable frontend interfaces and intelligent AI integrations. Currently, I’m focused on building impactful projects and contributing to strong, product-focused engineering teams.
        </p>
      </motion.div>
    </section>
  );
}

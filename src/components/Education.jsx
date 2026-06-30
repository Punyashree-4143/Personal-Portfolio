import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      degree: 'Master of Computer Applications (MCA)',
      university: 'Visvesvaraya Technological University',
      year: '2024 - 2026'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      university: 'University of Mysore',
      year: '2021 - 2024'
    }
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="education" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>04 // EDUCATION_INDEX</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-sans font-bold text-white mb-10 tracking-wide">
          Academic Timeline
        </h2>

        {/* Simple List Timeline */}
        <div className="flex flex-col relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
          {educationItems.map((item, idx) => (
            <motion.div
              key={item.degree}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="pl-8 pb-8 last:pb-0 relative"
            >
              {/* Dot */}
              <div className="absolute left-[12px] top-1.5 -translate-x-1/2 w-2 h-2 rounded-full border border-cyan-400 bg-zinc-950 shadow" />
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {item.degree}
                </h3>
                <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 font-semibold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  <Calendar className="w-3 h-3" />
                  <span>{item.year}</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-semibold">
                {item.university}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

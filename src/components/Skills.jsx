import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.IO', 'JWT']
    },
    {
      category: 'DevOps & AI',
      skills: ['FastAPI', 'Python', 'Machine Learning', 'CNNs', 'Git', 'Docker', 'CI/CD']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>02 // CAPABILITIES_MATRIX</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-sans font-bold text-white mb-8 tracking-wide">
          Technical Stack
        </h2>

        {/* Dense staggered pill groups */}
        <div className="flex flex-col gap-8">
          {skillGroups.map((group, idx) => (
            <div key={group.category} className="flex flex-col gap-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                {group.category}
              </span>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-2.5"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs hover:border-cyan-500/40 hover:text-cyan-400 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

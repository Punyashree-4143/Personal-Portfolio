import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SkillBadge from "./SkillBadge";

const ProjectCard = ({
  project,
  index,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.01
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 ${className}`}
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        
        {/* Header */}
        <div className="mb-5">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
          >
            {project.title}
          </motion.h3>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {project.short}
          </p>
        </div>

        {/* Details */}
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-7">
          {project.details}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <SkillBadge
              key={tech}
              skill={tech}
              index={i}
              variant="compact"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-5 border-t border-white/10">

          {/* GitHub */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-300"
          >
            <FaGithub />
            GitHub
          </motion.a>

          {/* Live Demo */}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-500/20 text-cyan-300 transition-all duration-300"
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          )}

          {/* Research Paper */}
          {project.paper && (
            <motion.a
              href={project.paper}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-300"
            >
              <FaExternalLinkAlt />
              Research Paper
            </motion.a>
          )}

          {/* Demo Links */}
          {project.demos && (
            <>
              <motion.a
                href={project.demos.customer}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-500/20 text-cyan-300 transition-all duration-300"
              >
                <FaExternalLinkAlt />
                Customer Demo
              </motion.a>

              <motion.a
                href={project.demos.vendor}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-500/20 text-cyan-300 transition-all duration-300"
              >
                <FaExternalLinkAlt />
                Vendor Demo
              </motion.a>

              <motion.a
                href={project.demos.delivery}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-500/20 text-cyan-300 transition-all duration-300"
              >
                <FaExternalLinkAlt />
                Delivery Demo
              </motion.a>
            </>
          )}
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
    </motion.div>
  );
};

export default ProjectCard;
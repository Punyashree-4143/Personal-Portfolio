import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import SkillBadge from "./ui/SkillBadge";

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: "🎨",
    skills: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    skills: ["Git & GitHub", "Vercel", "Render", "CI/CD", "Postman"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" bgClass="bg-[#0a0a0f]">
      <SectionHeader 
        title="Technical Skills"
        subtitle="Technologies and tools I use to build scalable applications."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8,
              scale: 1.02
            }}
            className="group relative overflow-hidden rounded-3xl glass hover:border-cyan-400/30 transition-all duration-500 p-6 md:p-8"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300 border border-cyan-400/20">
                <span className="text-3xl">{group.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <SkillBadge 
                  key={skill} 
                  skill={skill} 
                  index={idx} 
                  variant="glowing"
                />
              ))}
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

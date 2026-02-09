import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git & GitHub", "Vercel", "Render", "CI/CD Basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#020617] text-white pt-24 pb-24 px-6">


      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="font-medium mb-4 text-lg">
                {group.title}
              </h3>

              <ul className="space-y-2 text-slate-400 text-sm">
                {group.skills.map((skill, idx) => (
                  <li key={idx}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

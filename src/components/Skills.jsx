import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git & GitHub", "Vercel", "Render", "CI/CD", "Postman"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0f172a] text-white py-20 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Skills
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Technologies and tools I use to build scalable applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-lg font-semibold mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm rounded-lg bg-white/10 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

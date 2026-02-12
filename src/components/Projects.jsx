import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Precision Agriculture Advisor 🌾",
    short:
      "AI-driven system for crop planning, disease detection, irrigation, and yield prediction.",
    details:
      "End-to-end intelligent agriculture platform using ML models for crop recommendation, yield prediction, CNN-based disease detection, irrigation scheduling, weather API integration, and market trend analysis.",
    tech: [
      "React",
      "Node.js",
      "Python",
      "Machine Learning",
      "CNN",
      "Weather APIs",
    ],
    github:
      "https://github.com/Punyashree-4143/AI-Powered-Precision-Agriculture-Advisor",
    paper:
      "https://ijarcce.com/papers/ai-powered-precision-agriculture-advisor/",
  },
  {
    title: "Event-Driven Real-Time Hyperlocal Commerce System",
    short:
      "Real-time hyperlocal commerce platform built on event-driven architecture.",
    details:
      "Full-stack system with WebSocket-based real-time order lifecycle, atomic inventory updates, and role-based dashboards for customer, vendor, and delivery.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Event-Driven Architecture",
    ],
    github:
      "https://github.com/Punyashree-4143/Event-Driven-Real-Time-Hyperlocal-Commerce-Orchestration-System",
    demos: {
      customer: "https://hyperlocal-grocery-platform.vercel.app/",
      vendor: "https://hyperlocal-grocery-platform-8dad.vercel.app/",
      delivery: "https://hyperlocal-grocery-platform-csrd.vercel.app/",
    },
  },
  {
    title: "AI Code Quality & Security Gate with CI/CD Enforcement",
    short:
      "AI-driven code analysis system with automated CI/CD validation.",
    details:
      "AST-based multi-file analysis engine detecting security risks and architectural issues. Generates weighted risk scoring with PASS / WARN / BLOCK decisions and integrates with GitHub Actions for automated deployment control.",
    tech: [
      "React",
      "FastAPI",
      "Python",
      "AST Analysis",
      "Security Rules",
      "GitHub Actions",
      "CI/CD",
    ],
    github:
      "https://github.com/Punyashree-4143/AI-Code-Quality-and-Security-Gate-with-CI-CD-Enforcement",
    live: "https://ai-based-code-quality-and-security.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-20 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Systems I’ve designed, built, and deployed.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-3 text-sm md:text-base">
                {project.short}
              </p>

              <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                {project.details}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-md bg-white/10 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 flex-wrap">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  GitHub
                </a>

                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10 transition"
                  >
                    Research Paper
                  </a>
                )}

                {/* Multiple Demo Links */}
                {project.demos && (
                  <>
                    <a
                      href={project.demos.customer}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition"
                    >
                      Customer Demo
                    </a>

                    <a
                      href={project.demos.vendor}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition"
                    >
                      Vendor Demo
                    </a>

                    <a
                      href={project.demos.delivery}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition"
                    >
                      Delivery Demo
                    </a>
                  </>
                )}

                {/* Single Live Link */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

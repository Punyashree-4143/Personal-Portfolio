import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "AI-Powered Precision Agriculture Advisor 🌾",
    short:
      "AI-driven system for crop planning, disease detection, irrigation, and yield prediction.",
    details:
      "An end-to-end intelligent agriculture platform using machine learning and real-time data. It provides crop recommendations based on soil parameters, predicts yield using regression models, detects plant diseases using CNNs, suggests irrigation schedules, integrates live weather APIs, and analyzes crop market price trends to support sustainable farming decisions.",
    tech:
      "React · Node.js · Python · Machine Learning · CNN · Weather APIs",
    github: "https://github.com/Punyashree-4143/AI-Powered-Precision-Agriculture-Advisor",
    paper: "https://ijarcce.com/papers/ai-powered-precision-agriculture-advisor/",
    
  },
  {
    title: "Event-Driven Real-Time Hyperlocal Commerce System",
    short:
      "A real-time hyperlocal commerce platform built on event-driven architecture.",
    details:
      "A full-stack system enabling real-time ordering, inventory synchronization, and delivery orchestration using WebSockets (Socket.IO). Includes Customer/Admin, Vendor, and Delivery dashboards with live order lifecycle propagation, atomic inventory updates, and role-based access control. Designed for low latency, high consistency, and future AI-driven hyperlocal optimization.",
    tech:
      "React · Node.js · MongoDB · Socket.IO · JWT · Event-Driven Architecture",
    github: "https://github.com/Punyashree-4143/Event-Driven-Real-Time-Hyperlocal-Commerce-Orchestration-System",
    demos: {
      customer: "https://hyperlocal-grocery-platform.vercel.app/",
      vendor: "https://hyperlocal-grocery-platform-8dad.vercel.app/",
      delivery: "https://hyperlocal-grocery-platform-csrd.vercel.app/",
    },
  },
  {
    title: "AI-Based Code Quality & Security Analysis System",
    short:
      "AI-assisted multi-language code review and risk analysis platform.",
    details:
      "Analyzes source code at file and project level using AST-based analysis for Python, heuristic analysis for JavaScript, and generic rule engines for other languages. Detects cross-file issues, calculates risk scores, and produces transparent PASS / WARN / BLOCK decisions with explainable traces. Fully deployed with separate frontend and backend services.",
    tech:
      "React · Node.js · Python · AST Analysis · Security Rules · Render · Vercel",
    github: "https://github.com/Punyashree-4143/AI-Based-Code-Quality-and-Security-Analysis-System",
    live: "https://ai-based-code-quality-and-security.vercel.app/",
  },
];


export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openDemoIndex, setOpenDemoIndex] = useState(null);

  return (
    <section id="projects" className="bg-[#020617] text-white">
      {/* TITLE */}
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-slate-400 mt-2">
          Systems I’ve designed, built, and deployed
        </p>
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="md:hidden px-6 space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onViewportEnter={() => setActiveIndex(index)}
          >
            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0.6, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.6 }}
            >
              <h3 className="text-lg font-medium mb-2">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-3">
                {project.short}
              </p>

              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-slate-500 text-sm mb-4">
                    {project.details}
                  </p>

                  <p className="text-xs text-slate-600 mb-6">
                    {project.tech}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm rounded-lg border border-white/20
                                 hover:border-cyan-400 hover:text-cyan-300 transition"
                    >
                      GitHub
                    </a>

                    {project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 text-sm rounded-lg bg-white/5
                                   text-slate-300 hover:bg-white/10 transition"
                      >
                        Research Paper
                      </a>
                    )}

                    {project.demos && (
                      <div className="w-full">
                        <button
                          onClick={() =>
                            setOpenDemoIndex(
                              openDemoIndex === index ? null : index
                            )
                          }
                          className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10
                                     text-cyan-300 hover:bg-cyan-400/20 transition"
                        >
                          Live Demo {openDemoIndex === index ? "▲" : "▼"}
                        </button>

                        {openDemoIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-3 rounded-xl border border-white/10
                                       bg-white/5 p-3 space-y-2"
                          >
                            <a
                              href={project.demos.customer}
                              target="_blank"
                              rel="noreferrer"
                              className="block px-3 py-2 rounded-md text-sm
                                         hover:bg-white/10"
                            >
                              Customer / Admin
                            </a>
                            <a
                              href={project.demos.vendor}
                              target="_blank"
                              rel="noreferrer"
                              className="block px-3 py-2 rounded-md text-sm
                                         hover:bg-white/10"
                            >
                              Vendor
                            </a>
                            <a
                              href={project.demos.delivery}
                              target="_blank"
                              rel="noreferrer"
                              className="block px-3 py-2 rounded-md text-sm
                                         hover:bg-white/10"
                            >
                              Delivery Partner
                            </a>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {!project.demos && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10
                                   text-cyan-300 hover:bg-cyan-400/20 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:block max-w-4xl mx-auto py-24 px-6 space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-medium mb-3">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-3">
              {project.short}
            </p>

            <p className="text-slate-500 text-sm mb-4">
              {project.details}
            </p>

            <p className="text-xs text-slate-600 mb-6">
              {project.tech}
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm rounded-lg border border-white/20
                           hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                GitHub
              </a>

              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-white/5
                             text-slate-300 hover:bg-white/10 transition"
                >
                  Research Paper
                </a>
              )}

              {project.demos && (
                <div className="w-full">
                  <button
                    onClick={() =>
                      setOpenDemoIndex(
                        openDemoIndex === index ? null : index
                      )
                    }
                    className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10
                               text-cyan-300 hover:bg-cyan-400/20 transition"
                  >
                    Live Demo {openDemoIndex === index ? "▲" : "▼"}
                  </button>

                  {openDemoIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 rounded-xl border border-white/10
                                 bg-white/5 p-3 space-y-2"
                    >
                      <a
                        href={project.demos.customer}
                        target="_blank"
                        rel="noreferrer"
                        className="block px-3 py-2 rounded-md text-sm
                                   hover:bg-white/10"
                      >
                        Customer / Admin
                      </a>
                      <a
                        href={project.demos.vendor}
                        target="_blank"
                        rel="noreferrer"
                        className="block px-3 py-2 rounded-md text-sm
                                   hover:bg-white/10"
                      >
                        Vendor
                      </a>
                      <a
                        href={project.demos.delivery}
                        target="_blank"
                        rel="noreferrer"
                        className="block px-3 py-2 rounded-md text-sm
                                   hover:bg-white/10"
                      >
                        Delivery Partner
                      </a>
                    </motion.div>
                  )}
                </div>
              )}

              {!project.demos && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-cyan-400/10
                             text-cyan-300 hover:bg-cyan-400/20 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

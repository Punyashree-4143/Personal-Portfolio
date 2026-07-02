import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  FileText,
  Layers,
  Sprout,
  Users,
  ShoppingBag,
  ShieldAlert,
  Store,
  Truck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Projects() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const projects = [
    {
      title: 'AI-Powered Precision Agriculture Advisor 🌾',
      subtitle: 'AI-driven system for crop planning, disease detection, irrigation, and yield prediction.',
      description: 'End-to-end intelligent agriculture platform using ML models for crop recommendation, yield prediction, CNN-based disease detection, irrigation scheduling, weather API integration, and market trend analysis.',
      techStack: ['React', 'Node.js', 'Python', 'Machine Learning', 'CNN', 'Weather APIs'],
      icon: <Sprout className="w-5 h-5 text-cyan-400" />,
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com/Punyashree-4143/AI-Powered-Precision-Agriculture-Advisor', icon: <Github className="w-4 h-4" /> },
        { type: 'paper', label: 'Research Paper', url: "https://ijarcce.com/papers/ai-powered-precision-agriculture-advisor/", icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
  title: 'AI Recruiter 🤖',
  subtitle: 'AI-powered recruitment platform for intelligent candidate screening and hiring.',
  description: 'Built an end-to-end AI recruitment system that analyzes job descriptions, performs hybrid candidate retrieval using Semantic Search (ChromaDB) and BM25, ranks candidates with AI-based scoring, evaluates profiles using LLMs, identifies skill gaps, generates explainable recommendations, compares shortlisted candidates, and provides an AI-assisted hiring decision.',
  techStack: [
    'React',
    'FastAPI',
    'Python',
    'ChromaDB',
    'Sentence Transformers',
    'BM25',
    'Groq LLM'
  ],
  icon: <Users className="w-5 h-5 text-cyan-400" />,
  links: [
    {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/Punyashree-4143/AI-Recruiter',
      icon: <Github className="w-4 h-4" />
    },
    {
      type: 'demo',
      label: 'Live Demo',
      url: 'https://ai-recruiter-live.vercel.app',
      icon: <ExternalLink className="w-4 h-4" />
    }
  ]
},
    {
      title: 'Event-Driven Real-Time Hyperlocal Commerce System',
      subtitle: 'Real-time hyperlocal commerce platform built on event-driven architecture.',
      description: 'Full-stack system with WebSocket-based real-time order lifecycle, atomic inventory updates, and role-based dashboards for customer, vendor, and delivery.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Event-Driven Architecture'],
      icon: <ShoppingBag className="w-5 h-5 text-cyan-400" />,
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com/Punyashree-4143/Event-Driven-Real-Time-Hyperlocal-Commerce-Orchestration-System', icon: <Github className="w-4 h-4" /> },
        { type: 'demo', label: 'Customer Demo', url: "https://hyperlocal-grocery-platform.vercel.app/", icon: <Users className="w-3.5 h-3.5" /> },
        { type: 'demo', label: 'Vendor Demo', url: "https://hyperlocal-grocery-platform-8dad.vercel.app/", icon: <Store className="w-3.5 h-3.5" /> },
        { type: 'demo', label: 'Delivery Demo', url: "https://hyperlocal-grocery-platform-csrd.vercel.app/", icon: <Truck className="w-3.5 h-3.5" /> }
      ]
    },
    {
      title: 'AI Code Quality & Security Gate with CI/CD Enforcement',
      subtitle: 'AI-driven code analysis system with automated CI/CD validation.',
      description: 'AST-based multi-file analysis engine detecting security risks and architectural issues. Generates weighted risk scoring with PASS / WARN / BLOCK decisions and integrates with GitHub Actions for automated deployment control.',
      techStack: ['React', 'FastAPI', 'Python', 'AST Analysis', 'Security Rules', 'GitHub Actions', 'CI/CD'],
      icon: <ShieldAlert className="w-5 h-5 text-cyan-400" />,
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com/Punyashree-4143/AI-Code-Quality-and-Security-Gate-with-CI-CD-Enforcement', icon: <Github className="w-4 h-4" /> },
        { type: 'demo', label: 'Live Demo', url: "https://ai-based-code-quality-and-security.vercel.app/", icon: <ExternalLink className="w-4 h-4" /> }
      ]
    },
    {
      title: 'SkillTrade – AI-Powered Skill Exchange Platform',
      subtitle: 'Full-stack platform enabling users to exchange skills, connect, and collaborate through real-time interactions.',
      description: 'Built a modern barter-based skill exchange platform with JWT authentication, protected routes, user dashboards, notifications, messaging system, and swap request workflows. Designed responsive frontend and scalable backend APIs with FastAPI and MongoDB deployment architecture.',
      techStack: ['React', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST APIs'],
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com/Punyashree-4143/skilltrade' , icon: <Github className="w-4 h-4" /> },
        { type: 'demo', label: 'Live Demo', url: "https://skilltrade-eight.vercel.app", icon: <ExternalLink className="w-4 h-4" /> }
      ]
    }
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>03 // PRODUCTION_TIMELINE</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-sans font-bold text-white mb-10 tracking-wide">
          Featured Projects
        </h2>

        {/* Project timeline list */}
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative group overflow-visible rounded-xl border border-zinc-700/70 bg-zinc-900/45 backdrop-blur-sm p-6 sm:p-8 hover:scale-[1.01] hover:border-cyan-400/40 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
            >
              {/* Tracing border SVG (Perimeter tracing effect on hover) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                <rect 
                  x="0" 
                  y="0" 
                  width="100%" 
                  height="100%" 
                  rx="12" 
                  className="stroke-2 stroke-cyan-400/0 group-hover:stroke-cyan-400 [stroke-dasharray:1500] [stroke-dashoffset:1500] group-hover:[stroke-dashoffset:0] transition-all duration-1000 ease-out" 
                />
              </svg>

              <div>
                {/* Header Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 flex-shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-sans font-bold text-white tracking-wide leading-snug group-hover:text-cyan-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-[9px] font-mono text-cyan-400/80 font-bold uppercase tracking-wider mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                  {project.description}
                </p>
              </div>

              
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-400 border border-zinc-850"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-zinc-900">

  {/* Normal Links */}

  {project.links
    .filter(
      link =>
        link.type !== "demo" ||
        project.links.filter(l => l.type === "demo").length === 1
    )
    .map(link => (
      <a
        key={link.label}
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 hover:bg-cyan-400/10 border border-zinc-800 hover:border-cyan-400/30 text-[10px] font-mono font-bold text-zinc-300 hover:text-cyan-400 transition-all duration-200"
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ))}

  {/* Dropdown for Multiple Demos */}

  {project.links.filter(l => l.type === "demo").length > 1 && (

    <div className="relative">

      <button
        onClick={() =>
          setOpenDropdown(
            openDropdown === project.title
              ? null
              : project.title
          )
        }
        className="flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 hover:bg-cyan-400/10 border border-zinc-800 hover:border-cyan-400/30 text-[10px] font-mono font-bold text-zinc-300 hover:text-cyan-400 transition-all duration-200"
      >
        Live Demos

        {openDropdown === project.title ? (
          <ChevronUp className="w-3.5 h-3.5" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5" />
        )}

      </button>

      {openDropdown === project.title && (

        <div className="absolute left-0 mt-2 w-52 rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl overflow-hidden z-30">

          {project.links
            .filter(link => link.type === "demo")
            .map(link => (

              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-cyan-400 transition-colors"
              >
                {link.icon}
                {link.label}
              </a>

            ))}

        </div>

      )}

    </div>

  )}

</div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

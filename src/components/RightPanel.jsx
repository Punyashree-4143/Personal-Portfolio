import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, ArrowUpRight, Users, Store, Truck } from 'lucide-react';

export default function RightPanel() {
  const skillsData = [
    { category: 'Frontend', tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Backend', tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.IO', 'JWT'] },
    { category: 'DevOps & AI', tags: ['FastAPI', 'Python', 'Machine Learning', 'CNNs', 'Git', 'Docker', 'CI/CD'] }
  ];

  const projects = [
    {
      title: 'AI-Powered Precision Agriculture Advisor 🌾',
      subtitle: 'AI-driven system for crop planning, disease detection, irrigation, and yield prediction.',
      description: 'End-to-end intelligent agriculture platform using ML models for crop recommendation, yield prediction, CNN-based disease detection, irrigation scheduling, weather API integration, and market trend analysis.',
      techStack: ['React', 'Node.js', 'Python', 'Machine Learning', 'CNN', 'Weather APIs'],
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com', icon: <Github className="w-4 h-4" /> },
        { type: 'paper', label: 'Research Paper', url: '#', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      title: 'SkillTrade – AI-Powered Skill Exchange Platform',
      subtitle: 'Full-stack platform enabling users to exchange skills, connect, and collaborate through real-time interactions.',
      description: 'Built a modern barter-based skill exchange platform with JWT authentication, protected routes, user dashboards, notifications, messaging system, and swap request workflows. Designed responsive frontend and scalable backend APIs with FastAPI and MongoDB deployment architecture.',
      techStack: ['React', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST APIs'],
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com', icon: <Github className="w-4 h-4" /> },
        { type: 'demo', label: 'Live Demo', url: '#', icon: <ExternalLink className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Event-Driven Real-Time Hyperlocal Commerce System',
      subtitle: 'Real-time hyperlocal commerce platform built on event-driven architecture.',
      description: 'Full-stack system with WebSocket-based real-time order lifecycle, atomic inventory updates, and role-based dashboards for customer, vendor, and delivery.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Event-Driven Architecture'],
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com', icon: <Github className="w-4 h-4" /> },
        { type: 'demo', label: 'Customer Demo', url: '#', icon: <Users className="w-3.5 h-3.5" /> },
        { type: 'demo', label: 'Vendor Demo', url: '#', icon: <Store className="w-3.5 h-3.5" /> },
        { type: 'demo', label: 'Delivery Demo', url: '#', icon: <Truck className="w-3.5 h-3.5" /> }
      ]
    },
    {
      title: 'AI Code Quality & Security Gate with CI/CD Enforcement',
      subtitle: 'AI-driven code analysis system with automated CI/CD validation.',
      description: 'AST-based multi-file analysis engine detecting security risks and architectural issues. Generates weighted risk scoring with PASS / WARN / BLOCK decisions and integrates with GitHub Actions for automated deployment control.',
      techStack: ['React', 'FastAPI', 'Python', 'AST Analysis', 'Security Rules', 'GitHub Actions', 'CI/CD'],
      links: [
        { type: 'github', label: 'GitHub', url: 'https://github.com', icon: <Github className="w-4 h-4" /> },
        { type: 'demo', label: 'Live Demo', url: '#', icon: <ExternalLink className="w-4 h-4" /> }
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      university: 'Visvesvaraya Technological University',
      year: '2024 - 2026'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      university: 'Bangalore University',
      year: '2021 - 2024'
    }
  ];

  return (
    <div className="lg:w-3/5 w-full lg:py-24 py-12 flex flex-col gap-24 px-4 sm:px-8 lg:px-12">
      
      {/* 1. About Section */}
      <section id="about" className="flex flex-col gap-4 scroll-mt-24">
        <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase lg:hidden">
          About
        </h3>
        <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-sans">
          I am an MCA graduate and software engineer focused on solving complex problems through clean system design and backend architecture. My work bridges the gap between scalable frontend interfaces and intelligent AI integrations. Currently, I’m focused on building impactful projects and contributing to strong, product-focused engineering teams.
        </p>
      </section>

      {/* 2. Skills Section */}
      <section id="skills" className="flex flex-col gap-6 scroll-mt-24">
        <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
          Skills
        </h3>
        <div className="flex flex-col gap-5">
          {skillsData.map((group) => (
            <div key={group.category} className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-slate-800 text-teal-300 font-mono text-xs border border-slate-700/50 hover:border-slate-650 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="flex flex-col gap-6 scroll-mt-24">
        <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
          Projects
        </h3>
        
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/40 doc-card flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h4 className="text-[16px] font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-widest">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-800/50 text-slate-400 font-mono text-[10px] border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-800">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      onClick={(e) => link.url === '#' && e.preventDefault()}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/40 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-slate-300 hover:text-white transition-all duration-200"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education Section */}
      <section id="education" className="flex flex-col gap-6 scroll-mt-24">
        <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
          Education
        </h3>
        
        <div className="flex flex-col gap-4 border-l border-slate-800 pl-4">
          {education.map((item) => (
            <div key={item.degree} className="flex flex-col gap-1 py-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-sm font-bold text-slate-200">
                  {item.degree}
                </h4>
                <span className="text-[10px] font-mono text-teal-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
                  {item.year}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {item.university}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

export default function LeftPanel() {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Padding offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Punyashree-4143', icon: <Github className="w-5 h-5" /> },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'Email', href: 'mailto:contact@punya.dev', icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <header className="lg:w-2/5 w-full lg:sticky lg:top-0 lg:h-screen lg:py-24 py-12 flex flex-col justify-between z-10 px-4 sm:px-8 lg:px-12">
      
      {/* 1. Hero Block */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-slate-100">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Punyashree</a>
        </h1>
        <h2 className="text-lg sm:text-xl font-mono text-teal-300 font-medium mt-3">
          Full Stack & Frontend Developer
        </h2>
        <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-xs font-sans">
          I build scalable web applications, real-time event-driven systems, and AI-powered platforms.
        </p>

        {/* 2. Scroll Spy Nav List (Hidden on mobile) */}
        <nav className="hidden lg:block mt-16">
          <ul className="flex flex-col gap-5 w-fit">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group flex items-center gap-3 py-1 text-xs font-mono font-bold tracking-widest uppercase text-slate-500 hover:text-slate-200 transition-colors"
                >
                  <span className={`h-[1px] bg-slate-500 group-hover:bg-slate-200 group-hover:w-16 transition-all duration-300 ${
                    activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8'
                  }`} />
                  <span className={activeSection === item.id ? 'text-slate-200' : ''}>
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 3. Footer: Social Icons & Resume Link */}
      <div className="flex flex-col gap-6 mt-12 lg:mt-0">
        <a
          href="#resume"
          onClick={(e) => e.preventDefault()}
          className="group flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-slate-300 hover:text-teal-300 transition-colors w-fit"
        >
          <FileText className="w-4 h-4 text-teal-300" />
          <span>Download Resume</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

    </header>
  );
}

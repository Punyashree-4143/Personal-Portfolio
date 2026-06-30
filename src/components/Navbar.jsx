import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section check
      const scrollPosition = window.scrollY + 200;
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
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/60 shadow-lg shadow-black/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-white font-mono font-bold text-sm tracking-widest hover:text-cyan-400 transition-colors uppercase"
        >
          Punya<span className="text-cyan-400 font-bold">.SYS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3 py-1.5 text-xs font-mono font-medium tracking-wide transition-colors duration-250 ${
                    activeSection === item.id 
                      ? 'text-cyan-400 glow-text-cyan' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSystemTab"
                      className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all duration-200"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-6 py-6 md:hidden flex flex-col gap-4"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block text-xs font-mono py-1.5 transition-colors ${
                      activeSection === item.id ? 'text-cyan-400' : 'text-zinc-400'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full text-center py-2 text-xs font-mono font-bold text-slate-900 bg-cyan-400 rounded-lg"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

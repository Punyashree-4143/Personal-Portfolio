import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-zinc-950/40 border-t border-zinc-900 py-10">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between gap-6">
        
        {/* Branding copyright */}
        <div>
          <div className="font-mono font-bold text-white text-xs mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>punya.dev <span className="text-zinc-650 font-normal">v3.0.0</span></span>
          </div>
          <p className="text-[10px] text-zinc-500 font-sans">
            &copy; {new Date().getFullYear()} Punyashree. All rights reserved.
          </p>
        </div>

        {/* Back-To-Top Circular Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-zinc-950 shadow-lg shadow-cyan-400/20 cursor-pointer focus:outline-none transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </footer>
  );
}

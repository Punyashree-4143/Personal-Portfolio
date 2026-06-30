import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingMenu from "./components/FloatingMenu";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const moveX =
    typeof window !== "undefined"
      ? (mousePosition.x - window.innerWidth / 2) * 0.02
      : 0;

  const moveY =
    typeof window !== "undefined"
      ? (mousePosition.y - window.innerHeight / 2) * 0.02
      : 0;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-400 overflow-x-hidden relative">

      {/* Animated Background Grid */}
      <div
        className="fixed inset-0 z-0 shifting-grid pointer-events-none"
        style={{
          transform: `translate(${moveX}px, ${moveY}px)`,
          transition: "transform 0.3s cubic-bezier(0.1,0.8,0.2,1)",
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Floating Quick Navigation */}
      <FloatingMenu />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
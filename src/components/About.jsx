import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";

export default function About() {
  return (
    <SectionWrapper id="about" paddingClass="py-24 md:py-32" maxWidth="max-w-4xl" bgClass="bg-[#0a0a0f]">
      <SectionHeader 
        title="About Me"
        center={true}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="p-8 md:p-12 rounded-3xl glass hover:border-cyan-400/20 transition-all duration-500">
          <div className="space-y-8 text-slate-400 leading-relaxed text-base md:text-lg">
            <p className="text-white font-semibold text-xl md:text-2xl">
              Hi, I'm Punyashree.
            </p>

            <p>
              I’m an MCA graduate and Full Stack Engineer who enjoys building 
              real-world applications that solve practical problems. I work 
              across the stack — designing responsive user interfaces and 
              developing scalable backend services and APIs.
            </p>

            <p>
              Through my projects, I’ve built AI-powered systems, event-driven 
              applications, and multi-role platforms designed for different 
              stakeholders. My interests include scalable system design, 
              real-time architectures, and integrating AI into modern products.
            </p>

            <p>
              I’m continuously learning, refining my technical skills, and 
              looking to contribute to impactful engineering teams.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

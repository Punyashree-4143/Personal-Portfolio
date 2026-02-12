import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-16 md:py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <div className="space-y-5 text-slate-400 leading-relaxed text-sm md:text-base">
          <p className="text-white font-medium">
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
      </motion.div>
    </section>
  );
}

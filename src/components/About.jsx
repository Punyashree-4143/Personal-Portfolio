import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-[#020617] text-white pt-24 pb-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-slate-400 leading-relaxed space-y-6">
        <p className="text-white text-xl">
          Hi there
        </p>

        <p>
          I’m Punyashree, an MCA graduate and a full stack developer who enjoys
          building real-world applications and systems that solve practical
          problems. I like working across the stack — from designing clean,
          responsive user interfaces to developing reliable backend services and
          APIs. I’m particularly interested in scalable system design, real-time
          applications, and integrating AI into products. Through my projects,
          I’ve worked on AI-powered systems, event-driven architectures, and
          multi-role platforms designed for different stakeholders.
        </p>

        <p>
          I’m always eager to learn, improve my skills, and collaborate on
          meaningful projects that create real impact, so feel free to drop me a line.
        </p>
      </div>
    </motion.section>
  );
}

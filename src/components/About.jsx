import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#020617] text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 leading-relaxed"
        >
          I enjoy building web applications that feel real and useful. Working
          across the full stack helps me understand how ideas turn into products,
          from clean user interfaces to reliable backend systems. I’m especially
          curious about how applications behave in production and continuously
          work on improving my engineering and problem-solving skills.
        </motion.p>
      </div>
    </section>
  );
}

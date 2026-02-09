import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-[#020617] text-white py-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Contact
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-center">
          I’m open to internship opportunities, entry-level roles, and collaboration
          on meaningful projects. Feel free to reach out.
        </p>

        <div className="space-y-4 text-sm max-w-xl mx-auto">
          <p className="flex items-center justify-center gap-2">
            <span>📧</span>
            <a
              href="mailto:yourname@email.com"
              className="text-cyan-300 hover:underline"
            >
              yourname@email.com
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <span>💻</span>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline"
            >
              github.com/yourusername
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <span>🔗</span>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline"
            >
              linkedin.com/in/yourusername
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}

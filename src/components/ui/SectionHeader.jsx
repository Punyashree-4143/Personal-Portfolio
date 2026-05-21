import { motion } from "framer-motion";

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = "",
  center = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${center ? 'text-center' : ''} mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

import { motion } from "framer-motion";

const SkillBadge = ({ 
  skill, 
  index, 
  className = "",
  variant = "default" 
}) => {
  const variants = {
    default: "px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300",
    compact: "px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300",
    glowing: "px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 hover:text-cyan-200 transition-all duration-300 shadow-lg shadow-cyan-500/10"
  };

  return (
    <motion.span
      key={skill}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.08,
        y: -3
      }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant]} ${className}`}
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;

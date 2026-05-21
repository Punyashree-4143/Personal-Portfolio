import { motion } from "framer-motion";

const SectionWrapper = ({ 
  children, 
  id, 
  className = "", 
  bgClass = "bg-[#0a0a0f]",
  paddingClass = "py-24 md:py-32",
  maxWidth = "max-w-7xl"
}) => {
  return (
    <section
      id={id}
      className={`${bgClass} text-white ${paddingClass} px-6 ${className}`}
    >
      <div className={`${maxWidth} mx-auto`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

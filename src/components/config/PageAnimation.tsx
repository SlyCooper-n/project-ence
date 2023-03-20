import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageAnimationProps {
  className?: string;
  children: ReactNode;
}

export const PageAnimation = ({ className, children }: PageAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

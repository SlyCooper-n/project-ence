import { motion } from "framer-motion";

interface AnimatedBorderProps {
  top?: number;
  bottom?: number;
}

export const AnimatedBorder = ({ top, bottom }: AnimatedBorderProps) => {
  return (
    <motion.div
      initial={{
        top,
        bottom,
        width: 0,
      }}
      whileInView={{ width: "100%", top, bottom, transition: { delay: 0.3 } }}
      className="absolute left-0 h-px bg-white"
    />
  );
};

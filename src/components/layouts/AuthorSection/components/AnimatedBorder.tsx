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
        left: 0,
        width: 0,
        height: "1px",
        backgroundColor: "white",
      }}
      whileInView={{ width: "100%", transition: { delay: 0.3 } }}
      className="absolute"
    />
  );
};

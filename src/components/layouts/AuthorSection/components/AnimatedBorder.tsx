import clsx from "clsx";
import { motion } from "framer-motion";

interface AnimatedBorderProps {
  top?: boolean;
  bottom?: boolean;
}

export const AnimatedBorder = ({ top, bottom }: AnimatedBorderProps) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%", transition: { delay: 0.3 } }}
      className={clsx("absolute left-0 h-px bg-white", {
        "top-0": top,
        "bottom-0": bottom,
      })}
    />
  );
};

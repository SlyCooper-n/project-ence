import { Variants } from "framer-motion";

export const menuList: Variants = {
  hidden: {
    right: "-100%",
    transition: {
      delay: 0.4,
    },
  },
  show: {
    right: 0,
    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.5,
    },
  },
};

export const menuItems: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
};

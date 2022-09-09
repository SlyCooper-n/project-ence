import { Variants } from "framer-motion";

export const firstProfilePicVariants: Variants = {
  step0: {
    transform: "translateX(25%)",
    opacity: 1,
  },
  step1: {
    transform: "translateX(-20vw)",
    opacity: 1,
  },
  step2: {
    transform: "translateX(25%)",
    opacity: 0,
  },
};

export const secondProfilePicVariants: Variants = {
  step0: {
    transform: "translateX(-25%)",
    opacity: 1,
  },
  step1: {
    transform: "translateX(-25%)",
    opacity: 0,
  },
  step2: {
    transform: "translateX(-55vw)",
    opacity: 1,
  },
};

export const firstProfileBioVariants: Variants = {
  step0: {
    opacity: 0,
  },
  step1: {
    opacity: 1,
  },
  step2: {
    opacity: 0,
  },
};

export const secondProfileBioVariants: Variants = {
  step0: {
    opacity: 0,
  },
  step1: {
    opacity: 0,
  },
  step2: {
    opacity: 1,
  },
};

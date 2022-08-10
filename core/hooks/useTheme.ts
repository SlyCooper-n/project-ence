import { ThemeContext } from "@core/contexts/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  return useContext(ThemeContext);
};

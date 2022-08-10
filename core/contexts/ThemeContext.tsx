import { ThemeContextValues, ThemeProviderProps } from "@core/types";
import { createContext, useState } from "react";

export const ThemeContext = createContext({} as ThemeContextValues);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

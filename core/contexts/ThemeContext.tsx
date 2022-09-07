import { ThemeContextValues, ThemeProviderProps } from "@core/types";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";

export const ThemeContext = createContext({} as ThemeContextValues);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (parseCookies()["ence_studio_theme"] as "light" | "dark") ?? "light"
  );

  // function toggleTheme() {
  //   setTheme(theme === "light" ? "dark" : "light");

  //   setCookie(null, "ence_studio_theme", theme === "light" ? "dark" : "light", {
  //     maxAge: 86400 * 7,
  //     path: "/",
  //   });
  // }

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

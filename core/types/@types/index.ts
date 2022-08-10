export * from "./";

// Context values
export type ThemeContextValues = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

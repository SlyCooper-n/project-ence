import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {}

  return { theme };
};

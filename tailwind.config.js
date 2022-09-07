/** @type {import(tailwindcss).Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("tailwind-scrollbar"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#22223B",
          secondary: "#4A4E69",
          accent: "#9A8C98",
          neutral: "#000000",
          "base-100": "#FFFFFF",
          "base-content": "#22223B",
        },
      },
      // {
      //   dark: {
      //     primary: "#22223B",
      //     secondary: "#4A4E69",
      //     accent: "#9A8C98",
      //     neutral: "#000000",
      //     "base-100": "#22223B",
      //     "base-content": "#FFFFFF",
      //   },
      // },
    ],
  },
};

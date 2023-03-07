/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#8E8E8E",

        base: {
          300: "#000000",
          content: "#FFFFFF",
        },
      },

      backgroundImage: {
        "cto-graph": "url('/images/cto-graph-bg.png')",
      },
    },
  },
  plugins: [],
};

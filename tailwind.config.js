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

      fontSize: {
        "2xl": ["1.75rem", "2.25rem"],
        "3xl": ["2rem", "2.25rem"],
      },

      backgroundImage: {
        "cto-graph": "url('/images/cto-graph-bg.png')",
        "budget-slider": "url('/images/budget-slider-bg.png')",
      },

      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },

      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

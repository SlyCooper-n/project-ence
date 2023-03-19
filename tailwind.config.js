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

        graphSlide: {
          "0%": { transform: "translateX(-100vw)" },
          "25%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(0)", opacity: 0.9 },
          "88.5%": { opacity: 0 },
          "100%": { transform: "translateX(100vw)", opacity: 0 },
        },
        mobileGraphSlide: {
          "0%": { transform: "translateY(100vh)" },
          "25%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(0)", opacity: 0.9 },
          "88.5%": { opacity: 0 },
          "100%": { transform: "translateY(-100vh)", opacity: 0 },
        },
      },

      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "graph-slide": "graphSlide 5s ease infinite",
        "graph-slide-2": "graphSlide 5s ease infinite backwards",
        "graph-slide-3": "graphSlide 5s ease infinite 75ms backwards",
        "graph-slide-4": "graphSlide 5s ease infinite 150ms backwards",
        "graph-slide-5": "graphSlide 5s ease infinite 225ms backwards",
        "mobile-graph-slide": "mobileGraphSlide 5s ease infinite backwards",
        "mobile-graph-slide-2": "mobileGraphSlide 5s ease infinite backwards",
        "mobile-graph-slide-3":
          "mobileGraphSlide 5s ease infinite 75ms backwards",
        "mobile-graph-slide-4":
          "mobileGraphSlide 5s ease infinite 150ms backwards",
        "mobile-graph-slide-5":
          "mobileGraphSlide 5s ease infinite 225ms backwards",
      },
    },
  },
  plugins: [],
};

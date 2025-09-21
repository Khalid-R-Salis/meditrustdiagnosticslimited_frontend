/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: `0px 2px 5px 0px rgba(103, 110, 118, 0.08), 
                 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 
                 0px 1px 1px 0px rgba(0, 0, 0, 0.12)`,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease forwards",
        slideOut: "slideOut 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};

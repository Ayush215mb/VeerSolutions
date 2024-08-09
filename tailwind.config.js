/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          slideIn: {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0)" },
          },
          slideInLeft: {
            "0%": { transform: "translateX(-100%)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" },
          },
          slideInRight: {
            "0%": { transform: "translateX(100%)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" },
          },
          slideInTop: {
            "0%": { transform: "translateY(-100%)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
          scaleUp: {
            "0%": { transform: "scale(0.5)" },
            "100%": { transform: "scale(1)" },
          },
        },
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
          slideIn: "slideIn 1s ease-in-out",
          slideInLeft: "slideInLeft 1s ease-out",
          slideInRight: "slideInRight 1s ease-out",
          slideInTop: "slideInTop 1s ease-out",
          scaleUp: "scaleUp 1s ease-in-out",
        },
      },
    },
  },
  plugins: [],
};

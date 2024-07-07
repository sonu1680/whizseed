/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moving: {
          "0% ,100%": { transform: "translateY(40%)" },

          "50%": { transform: "translateY(-40%)" },
        },
      },
      animation: {
        moving: "moving 8s ease-in-out infinite",
      },
      colors: {
        primary: "#ffffff",
        yellowBright: "#d5eb34",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

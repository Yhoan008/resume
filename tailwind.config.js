/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        musicBar: {
          "0%": { transform: "scaleY(1)" },
          "15%": { transform: "scaleY(1.8)" },
          "30%": { transform: "scaleY(.8)" },
          "50%": { transform: "scaleY(1.8)" },
          "70%": { transform: "scaleY(.8)" },
          "85%": { transform: "scaleY(1.8)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      fontFamily: {
        irishGrover: ['"Irish Grover"', "system-ui"],
        itim: ['"Itim"', "cursive"],
      },
    },
  },
  plugins: [],
};

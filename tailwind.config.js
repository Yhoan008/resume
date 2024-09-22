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
        musicPulse: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        loading: {
          "20%": { transform: "scaleY(6)" },
          "40%": { transform: "scaleY(2)" },
          "100%": { transform: "scaleY(1)" },
        },
        rotate: {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "20%": { transform: "translateX(0px) translateY(200px)" },
          "40%": { transform: "translateX(200px) translateY(0px)" },
          "60%": { transform: "translateX(0px) translateY(-200px)" },
          "80%": { transform: "translateX(-200px) translateY(0px)" },
          "1000%": { transform: "translateX(0px) translateY(0px)" },
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

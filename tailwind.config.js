/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        irishGrover: ['"Irish Grover"', 'system-ui'],
        itim : ['"Itim"','cursive']
      },
    },
  },
  plugins: [],
};

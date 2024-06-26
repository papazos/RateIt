/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Montserrat"', "sans-serif"],
      },
      listStyleImage: {
        checkmark: "url('/img/checkmark.svg')",
        ellipse: "url('/img/ellipse.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

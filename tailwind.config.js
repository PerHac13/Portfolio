/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fed43a",
        secondary: "#00000",
        ternary: "#6c48c2",
      },
      fontFamily: {
        primary: ["Bebas Neue", "Roboto Condensed"],
        secondary: ["Darker Grotesque"],
      },
    },
  },
  plugins: [],
};

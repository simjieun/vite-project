/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#673ab7",
      },
      gridTemplateColumns: {
        35: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};

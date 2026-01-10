/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#DBFFD0",
        text: "#1C1C1C",
        primary: "#1B4332",
        secondary: "#2D6A4F",
        earth: "#7F5539",
        highlight: "#FFF3B0",
        brown: {
          500: '#8B4513',
          600: '#A0522D',
        }
      },
    },
  },
  plugins: [],
}

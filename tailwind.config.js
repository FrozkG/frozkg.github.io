/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,astro}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'principal-green': '#76b583',
        'second-green': '#a4d8b0',
        'white-principal': '#d3d3d3',
        'principal-dark': '#0E1011',
        'secundary-dark':'#292b3e',
      }
    },
  },
  plugins: [],
};

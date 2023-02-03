/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Comfortaa': ['Comfortaa', 'cursive'],
        'Maven Pro': ['Maven Pro', 'sans-serif'],
        'Roboto Mono': ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
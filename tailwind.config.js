/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#5D5CDE',
        brandLight: '#7D7CFE',
        bgDark: '#020414',
        surfDark: '#0B1120',
        btnDark: '#1E293B',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


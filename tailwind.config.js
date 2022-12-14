/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0 50px 25px -24px rgb(0 0 0 / 0.3)'
      },
      colors: {
        'isGray': '#5B6871',
        'isGray20': '#292D32',
        'isGray25': '#B0BABF',
        'isGray30': '#ECEDED',
        'isGray35': '#DDE2E4',
        'isOrange': '#FF8600',
        'isDarkGray': '#84919A',
        'isLightGray' : '#F8FAFC', 
        'isDark' : '#3B3B45',       
      }
    },
  },
  plugins: [],
}

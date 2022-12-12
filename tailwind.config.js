/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'isGray': '#5B6871',
        'isGray20': '#292D32',
        'isGray25': '#B0BABF',
        'isGray30': '#ECEDED',
        'isOrange': '#FF8600',
        'isDarkGray': '#84919A',
        'isLightGray' : '#F8FAFC',
        
      },
    },
  },
  plugins: [],
}

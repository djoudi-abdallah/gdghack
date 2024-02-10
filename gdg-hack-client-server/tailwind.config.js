/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#257EBC',
        
        customLightBlue: '#E7F1F8',
        orangeCustom: '#F05829',
        greenCustom: '#00AE52',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
        'sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}


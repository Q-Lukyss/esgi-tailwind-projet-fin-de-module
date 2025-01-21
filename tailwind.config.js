/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#262733",
        "vibrant-orange": "#e64a3b",
        "papyrus": "#eee2d4",
        "alternate-gray-blue": "#3b3c47",
        "mygray": "#a5a5aa",
      },
      fontFamily: {
        squarePig: ['Square Pig', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}


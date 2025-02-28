/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/*.html",
    "./components/*.partial",   // <- Ajouter si nécessaire
    "./assets/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
				background: 'rgb(42, 43, 55)',
				primary: 'rgb(230, 74, 59)',
				secondary: 'rgb(238, 226, 212)',

				'full-black': 'rgb(0, 0, 0)',
				'full-white': 'rgb(255, 255, 255)',
				'alternace-blue': 'rgb(59, 60, 71)',
				'new-gray': 'rgb(165, 165, 170)',

        "dark-blue": "#262733",
        "vibrant-orange": "#e64a3b",
        "papyrus": "#eee2d4",
        "alternate-gray-blue": "#3b3c47",
        "mygray": "#a5a5aa",
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				'square-peg': ['Square Peg', 'sans-serif']
			},
      backgroundImage: {
        'bg-meeting': "url('/assets/images/bg_meeting.png')",
      },
    },
  },
  plugins: [],
}


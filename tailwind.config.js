/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/*.html",
    "./components/*.partial",
    "./assets/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
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


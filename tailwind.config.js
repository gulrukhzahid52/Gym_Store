/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover1': "url('./components/cover.jpg')",
        'logo': "url('src/assets/Group 27.png')",
      },
      fontFamily:{
        'Libre':"Libre",
      },
    },
  },
  plugins: [],
}
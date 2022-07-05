/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      darkCyan: '#3c8067',
      cream   : '#f2ebe3',
      darkBlue: '#1c232b',
      grayBlue: '#6c7289',
      white   : '#ffffff'
    },
    fontFamily:{
      montserrat : ['Montserrat'],
      fraunces   : ['Fraunces']
    }
  },
  plugins: [],
}

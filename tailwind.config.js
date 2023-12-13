/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        white: '#fcfcfc',
        customBlack: '#161A30'
      },
      fontFamily: {
        'custom': ['Poppins', 'sans-serif',],
        'roboto': ['Roboto', 'sans-serif']
      },

    },
  },
  plugins: [],
}
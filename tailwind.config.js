/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#004F4A',
        'primary-dark': '#003936',
        'secundary': '#DDECE8',
        'grey-bg': '#F6F6F6'
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'r-total':
          '100px 0 100px #00000084',

      }
    },
  },
  plugins: [],
}


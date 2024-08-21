/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        blue_2EBAEE : '#2EBAEE',
        blue_46529D : '#46529D',
        blue_4D59A1 : '#4D59A1',
        blue_707FDD : '#707FDD',
        gray_EFEEEC : '#EFEEEC',
        gray_F7F7F7 : '#F7F7F7',
        gray_ECECEC : '#ECECEC',
        gray_787878 : '#787878',
      }
    },
  },
  plugins: [],
}

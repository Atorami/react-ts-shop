/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        josefin: ['Josefin Regular', 'sans-serif'],
        lato: ['Lato Regular', 'sans-serif'],
      },
      colors: {
        f_pink: '#fb2e86',
        f_red: '#fb2448',
        f_sky_blue: '#f2f0ff',
      },
    },
  },
  plugins: [],
};

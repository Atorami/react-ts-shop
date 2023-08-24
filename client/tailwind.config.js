/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '15rem',
    },
    extend: {
      fontFamily: {
        // josefin: ['Josefin Regular', 'sans-serif'],
        // lato: ['Lato Regular', 'sans-serif'],
      },
      colors: {
        f_pink: '#fb2e86',
        f_red: '#fb2448',
        f_sky_blue: '#f2f0ff',
        o_dark_blue: '#274C5B',
        o_green: '#7EB693',
        o_yellow: '#EFD372',
        o_grey: '#D4D4D4',
        o_light_grey: '#F9F8F8',
        o_light_green: '#EFF6F1',
        o_black: '#525C60',
      },
      backgroundImage: {
        'main-promo': 'url("../components/assets/img/bg/main_promo_bg.png")',
        'main-promo-layer':
          'url("../components/assets/img/bg/main_promo_layer_bg/png")',
      },
    },
  },
  plugins: [],
};

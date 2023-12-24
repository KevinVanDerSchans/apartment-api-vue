import tailwindcssSpinner from 'tailwindcss-spinner';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          navbar: '#296960',
          languageSelector: '#4bbdb0',
          pagination: '#212121',
          navbarLinks: '#edf2f2',
          green700: '#009483',
          grey300: '#B5B1B0',
          black500: '#252525',
        }
      }
    },
  },
  plugins: [
    tailwindcssSpinner(),
  ],
}


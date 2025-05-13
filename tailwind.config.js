/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
  },
  screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1142px',
  },
  fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      cinzel: ['"Cinzel Decorative"', 'serif'],
      fraktur: ['UnifrakturCook', 'cursive'],
      vixsa: ['Vixsa', 'cursive'],
  },
  colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF', // Blanc cassé
      black: '#000000', // Noir profond
      primary: 'red', // Rouge bordeaux sombre
      secondary: '#C0C0C0', // Argent
      gray: {
          DEFAULT: '#282828',
          dark: '#1C2331',
      },
  },
    extend: {},
  },
  plugins: [],
}


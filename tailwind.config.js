/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        spice: {
          turmeric: '#FFD700',
          chili: '#FF4500',
          coriander: '#228B22',
        },
      },
    },
  },
  plugins: [],
};
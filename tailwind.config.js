/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#243f40',
          forest: '#3f6f52',
          mint: '#86c37c',
          pale: '#e4eee7',
          gold: '#e9c86a',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #e4eee7 0%, #86c37c 45%, #3f6f52 100%)',
      },
    },
  },
  plugins: [],
};

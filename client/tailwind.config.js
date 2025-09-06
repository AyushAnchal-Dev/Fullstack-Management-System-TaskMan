/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6C47FF',
          50: '#F1EFFE',
          100: '#E3DEFE',
          600: '#5A38E0',
          700: '#4A2FC0'
        }
      }
    }
  },
  plugins: []
};

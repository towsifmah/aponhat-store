/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apon: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',
          600: '#00873E', // Brand Green
          700: '#047857',
          800: '#064E3B', // Forest Deep
          900: '#022c22',
        },
        dark: {
          bg: '#0B130E',
          card: '#122318',
          cardHover: '#182f21',
          border: '#1F3827',
          text: '#E2F0E5',
          muted: '#8CAE93'
        }
      },
      animation: {
        'bounce-short': 'bounce 0.5s ease-in-out 2',
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

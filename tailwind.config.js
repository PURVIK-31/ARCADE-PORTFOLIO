/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['"Press Start 2P"', 'system-ui'],
      },
      colors: {
        arcade: {
          purple: '#b829f7',
          blue: '#00f7ff',
          pink: '#ff00ff',
          dark: '#0a0a0f',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
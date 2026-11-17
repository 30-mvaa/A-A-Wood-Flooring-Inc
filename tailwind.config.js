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
        brand: {
          red: '#C92227',
          'red-bright': '#E52228',
          'red-hover': '#AB1B20',
          'red-glow': 'rgba(201, 34, 39, 0.4)',
          'red-light': '#FDF2F2',
          'dark-base': '#0B0B0E',
          'dark-surface': '#121217',
          'dark-card': '#18181F',
          'dark-border': '#262633',
          'dark-border-subtle': 'rgba(255, 255, 255, 0.08)',
          'dark-text-muted': '#8A8A99',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          'system-ui',
          'sans-serif'
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'red-glow': '0 0 35px -5px rgba(201, 34, 39, 0.45)',
        'red-subtle': '0 0 20px -2px rgba(201, 34, 39, 0.25)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      borderRadius: {
        'hud': '14px',
        'hud-card': '20px',
      }
    },
  },
  plugins: [],
}

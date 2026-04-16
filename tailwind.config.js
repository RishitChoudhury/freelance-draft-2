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
        'void-black': '#050505',
        'deep-charcoal': '#0a0a0a',
        'stark-white': '#ffffff',
        'muted-ash': '#a3a3a3',
        'luminous-radium': '#e0ff4f',
        'electric-cyan': '#00f0ff',
        'light-bg': '#fafafa',
        'light-gray': '#e5e5e5',
        'dark-text': '#111111',
        'dark-ash': '#5e5e5e',
        'light-radium': '#9cb81c',
        'light-cyan': '#0088cc',
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

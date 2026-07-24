/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#161410',
        paper: '#f4ecda',
        coral: '#a13a2e',
        gold: '#c99a4a',
        sage: '#4f6353',
        stone: '#1f1d17',
      },
      fontFamily: {
        serif: ['"Shippori Mincho"', '"Noto Serif", Georgia, serif'],
        sans: ['"Jost"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        seigaiha:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='28'%3E%3Cg fill='none' stroke='%23c99a4a' stroke-width='1'%3E%3Cpath d='M0 28a28 28 0 0 1 28-28 28 28 0 0 1 28 28'/%3E%3Cpath d='M-14 28a28 28 0 0 1 28-28' /%3E%3Cpath d='M42 28a28 28 0 0 1 28-28'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          base: '#0B1F3A',
          deep: '#07162A',
          900: '#0B1F3A',
          800: '#0F2847',
          700: '#1a2f4f',
          600: '#233d5f',
        },
        gold: {
          base: '#C9A24A',
          soft: '#E6D3A3',
          400: '#E6D3A3',
          500: '#C9A24A',
          600: '#B8922F',
        },
        red: {
          news: '#B21F2D',
        },
        gray: {
          text: '#D6DCE6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.5px',
      },
      backgroundImage: {
        'grain': "url('/bg/grain.svg')",
      },
    },
  },
  plugins: [],
};

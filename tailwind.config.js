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
          base: '#0E5944',
          deep: '#0B3D2E',
          900: '#0B3D2E',
          800: '#0E5944',
          700: '#137459',
          600: '#1B8F6E',
        },
        gold: {
          base: '#F0E0B8',
          soft: '#F7EFD4',
          400: '#F7EFD4',
          500: '#F0E0B8',
          600: '#D9C799',
        },
        red: {
          news: '#0B3D2E',
        },
        gray: {
          text: '#E8E4DC',
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

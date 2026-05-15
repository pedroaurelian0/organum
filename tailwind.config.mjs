/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#052e16',
          950: '#021608',
        },
        ink: {
          50:  '#f8f8f7',
          100: '#f0efed',
          200: '#e0deda',
          300: '#c8c5bf',
          400: '#a09c94',
          500: '#7c7870',
          600: '#5c5852',
          700: '#3e3b36',
          800: '#27241f',
          900: '#15130f',
          950: '#0a0906',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#27241f',
            '--tw-prose-headings': '#0a0906',
            '--tw-prose-links': '#16a34a',
            maxWidth: '68ch',
          },
        },
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sentia: {
          lila: '#C8B4E8',
          lilaLight: '#EDE4F7',
          lilaDark: '#9B77D1',
          crema: '#FFF8F0',
          coral: '#F4A58A',
          coralLight: '#FDDDD2',
          celeste: '#A8D8EA',
          celesteLight: '#DDF1F9',
          amarillo: '#FFD166',
          amarilloLight: '#FFF0C2',
          blanco: '#FFFFFF',
          gris: '#6B7280',
          dark: '#2D2A4A',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;

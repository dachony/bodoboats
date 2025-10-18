import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        green: {
          50: '#e8f5ea',
          400: '#6bc47d',
          500: '#4ea262',
          600: '#3d8a4f',
        },
      },
    },
  },
  plugins: [],
};

export default config;

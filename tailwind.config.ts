import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './client/src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { honey: { 500: '#f59e0b', 600: '#d97706' } } } },
  plugins: []
} satisfies Config;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#b9d7ff',
          300: '#8fbdff',
          400: '#5e9bff',
          500: '#3b82f6',
          600: '#2867d6',
          700: '#2053ad',
          800: '#1d478d',
          900: '#1d3b70'
        }
      }
    }
  },
  plugins: []
}

export default config

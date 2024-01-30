import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#00B37E",
          500: "#00875F",
          600: "#015F43"
        },
        red: {
          400: "#F75A68",
          500: "#AA2834"
        },
        gray: {
          200: "#E1E1E6",
          300: "#C4C4CC",
          400: "#7C7C8A",
          500: "#323238",
          600: "#29292E",
          700: "#202024",
          800: "#121214",
        }
      },
      zIndex: {
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        '100': '100',
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config

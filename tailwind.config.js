import config from './postcss.config.mjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'expande': 'transition delay-150 duration-300 ease-in-out',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config
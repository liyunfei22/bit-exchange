import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#3C432F',
          DEFAULT: '#000000'
        },
        brown: '#F0EAE0',
        green: '#D1E2BE',
        yellow: '#FAFF7B'
      },
      spacing: {
        18: '4.5rem',
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms')
  ],
};
export default config;

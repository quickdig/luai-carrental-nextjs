/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#dd2b1c"
        },
        secondary: {
          DEFAULT: "#141414"
        }
      },
      animation: {
        slide: 'scroll 60s linear infinite',
      },
      clipPath: {
        triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(+100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

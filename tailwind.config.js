/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-red": "hsl(0, 78%, 62%)",
        "tw-cyan": "hsl(180, 62%, 55%)",
        "tw-orange": "hsl(34, 97%, 64%)",
        "tw-blue": "hsl(212, 86%, 64%)",
        "tw-very-dark": "hsl(234, 12%, 34%)",
        "tw-grayish": "hsl(229, 6%, 66%)",
        "tw-light": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        primary: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

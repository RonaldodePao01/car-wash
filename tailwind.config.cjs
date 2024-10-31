/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "639px" },
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

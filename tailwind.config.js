/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "750px",
        xs: "330px",
        md: "1188px",
        lg: "1120px",
      },
      colors: {
        bgBlack: "rgb(30,30,30)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "650px",
        xs: "450px",
        md: "885px",
        "2xl": "1536px",
        "2xxl": "1177px",
        "3xl": "1920px", // Example of another new breakpoint
      },
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        LightGrayishCyan: "hsl(180, 52%, 96%)",
        LightGrayishCyan: "hsl(180, 31%, 95%)",
        DarkGrayishCyan: " hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

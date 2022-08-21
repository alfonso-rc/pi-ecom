/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Work": ['Raleway',"sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}

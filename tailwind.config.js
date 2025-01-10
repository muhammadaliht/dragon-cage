/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./public/index.html'],
  theme: {
    extend: {
      animation: {
        progress: "progress 3s linear", // Define the progress animation
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" }, // Start width at 0%
          "100%": { width: "100%" }, // End width at 100%
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
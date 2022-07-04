/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        redStoreTheme: {
          primary: "#f2633b",
          secondary: "#db5232f7",
          'primary-text': "#333",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

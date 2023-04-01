/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-background": "#ffcc38",
        "theme-input-bg": "#ffdd67",
        "theme-question-bg": "#ffeeB4",
        "theme-color": "#4a4a4a",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sora: ["Sora", "sans-serif"]
    },
    extend: {
      colors: {
        "brand-color": "#EB3850",
        "dark-10": "#333333",
        "dark-20": "#646466",
        "dark-30": "#F2F4FD",
        "dark-40": "#FFFFFF",
      },
    },
  },
  plugins: [],
}


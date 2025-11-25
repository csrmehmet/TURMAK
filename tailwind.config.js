/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D3B66",
        secondary: "#F0F4F8",
        third: "#f6a732",
        fourth:"#0078bd",
        accent: "#EE964B",
        dark: "#1A1A1A",
        light: "#FFFFFF",
        muted: "#6B7280",
      },
    },
  },
  plugins: [],
};

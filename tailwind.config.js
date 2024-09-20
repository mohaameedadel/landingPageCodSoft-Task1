/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        main: "#000F32",
        second:"#001A57",
        h: "#232323",
        p: "#555555",
      },
    },
  },
  plugins: [],
};

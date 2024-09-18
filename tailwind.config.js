/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: {
          lg: "1100px",
        },
      },
      colors: {
        main: "#000F32",
        h: "#232323",
        p: "#555555",
      },
    },
  },
  plugins: [],
};

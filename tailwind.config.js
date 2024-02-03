/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      t74: "74px",
      t67: "67px",
      t50: "50px",
      t44: "44px",
      t37: "37px",
      t34: "34px",
      t28: "28px",
      t26: "26px",
      t21: "21px",
      t18: "18px",
      t16: "16px",
      t14: "14px",
    },
    extend: {
      backgroundImage: {
        zara: "url('./src/assets/img/zara.svg')",
      },
      colors: {
        redUi: "#FF6F61",
        grayUi: "#1E2832",
        whiteUi: "#FFFFFF",
        blackUi: "#000000",
        baseUi: "#E3E3E3",
        specialUi: "#010204",
      },
    },
  },
  plugins: [],
};

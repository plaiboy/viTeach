module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fafafa", 200: "#ececec", 700: "#666666" },
        blue_gray: { 100: "#d9d9d9", 800: "#2f3f50", 900: "#333333" },
        blue: { 700: "#0d60db", "700_01": "#357ebd" },
        indigo: { 50: "#e2e7ed", 400: "#428bca", A700: "#3b4ef2" },
        black: { "900_3f": "#0000003f" },
        light_blue: { 800: "#0274be", A700: "#0984e3" },
        white: { A700_01: "#fffdfd", A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", roboto: "Roboto" },
      boxShadow: { bs: "2px 4px  6px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

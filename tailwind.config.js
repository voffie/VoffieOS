/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bar: "#1a1a1ab3",
        fileHover: "hsla(207, 30%, 72%, 25%)",
        fileFocus: "hsla(207, 60%, 72%, 35%)",
      },
    },
  },
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bar: "#1a1a1ab3",
        fileHover: "hsla(207, 30%, 72%, 25%)",
        fileFocus: "hsla(207, 60%, 72%, 35%)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script:  ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "serif"],
        heading: ["var(--font-heading)", "serif"],
        body:    ["var(--font-body)", "serif"],
      },
      colors: {
        gold:  "#C9A84C",
        ivory: "#FAF7F2",
        dark:  "#111111",
        blush: "#F2D7D5",
      },
    },
  },
  plugins: [],
};

export default config;

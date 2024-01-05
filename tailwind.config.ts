import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
      },
      colors: {
        dark: "#0B0D17",
        "light-blue": "#D0D6F9",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        barlowCondensed: ["var(--font-barlow-condensed)"],
        bellefair: ["var(--font-bellefair)"],
      },
    },
  },
  plugins: [],
};
export default config;

import "dotenv/config";
import tailwindcssMotion from "tailwindcss-motion";
import defaultTheme from "tailwindcss/defaultTheme";

const colorTheme = {
  colors: {
    "primary-400": "#FF8F5E",
    "primary-500": "#FF6600",
    "primary-600": "#E65B00",
    "primary-700": "#CC5000",
    "primary-800": "#B24500",
    "white-opacity-10": "#FFFFFF1A",
    "white-opacity-15": "#FFFFFF26",
    "white-opacity-20": "#FFFFFF33",
    "white-opacity-30": "#FFFFFF4D",
    "primary-opacity-80": "#FF6600CC",
    "primary-opacity-60": "#FF660099",
  },
  backgroundImage: {
    "primary-gradient": "linear-gradient(109deg, #333333, #1A1A1A)",
    "elipse-bl-gradient":
      "linear-gradient(223deg, rgba(255, 102, 0, 0.7) 14.05%, rgba(60, 30, 15, 0.7) 65.14%)",
    "elipse-tr-gradient":
      "linear-gradient(223deg, rgba(255, 166, 122, 1.0) 14.05%, rgba(255, 166, 122, 0.00) 65.14%)",
    "hover-gradient":
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(255, 102, 0, 0.20) 0%, rgba(255, 102, 0, 0.20) 100%)",
  },
};

const customTheme = {
  extend: {
    ...(colorTheme),
    basis: {
      "1/4minus8": "calc(25% - 2rem)",
      "1/2minus8": "calc(50% - 2rem)",
    },
    spacing: {
      "full-grid-size": `calc((min((100vw - (2 * 40px)), 1408px)))`,
      "inner-grid-half": `calc((min((100vw - (2 * 40px)), 1408px)) / 2 - ((min((100vw - (2 * 40px)), 1408px) - (11 * 20px)) / 12))`,
    },
  },
  screens: {
    bronze: "0px",
    silver: "768px",
    gold: "1280px",
    platinum: "1536px",
    diamond: "1920px",
    master: "2840px",
    challenger: "3840px",
  },
};
export default {
  content: ["./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    ...customTheme,
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography"), tailwindcssMotion],
};

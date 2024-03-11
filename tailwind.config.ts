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
      },
      colors: {
        offWhiteTint: "#FCFDFD",
        greyTint: "#384353",
        stormy: "#323334",
        opal: "#384353",
        oyster: "#DFDEDB",
        beige: "#F5F4F3",
      },
      padding: {
        extrasmall: "16px",
        small: "28px",
        medium: "58px",
      },
      margin: {
        small: "28px",
        medium: "58px",
      },
      width: {
        mobileContainer: "350px",
        tabletContainer: "768px",
        desktopContainer: "1280px",
      },
      maxWidth: {
        mobileContainer: "350px",
        tabletContainer: "768px",
        desktopContainer: "1280px",
      },
      borderRadius: {
        small: "8px",
        medium: "16px",
      },
    },
  },
  plugins: [],
};
export default config;

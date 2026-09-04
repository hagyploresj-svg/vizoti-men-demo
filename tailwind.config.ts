import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E10",
        charcoal: "#1C1B1A",
        paper: "#F5F3EF",
        paperdim: "#EAE7E0",
        denim: {
          DEFAULT: "#2B4A6F",
          light: "#5C7C9C",
          dark: "#1A3049",
        },
        stone: "#8C8A85",
        line: "#D8D5CE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1440px",
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

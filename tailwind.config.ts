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
        canvas: "#FBFBFA",
        surface: {
          DEFAULT: "#FCF9F8",
          dim: "#DCD9D9",
          bright: "#FCF9F8",
        },
        "surface-container": {
          lowest: "#FFFFFF",
          low: "#F6F3F2",
          DEFAULT: "#F0EDED",
          high: "#EAE7E7",
          highest: "#E5E2E1",
        },
        primary: {
          DEFAULT: "#9E412F",
          container: "#E87A64",
          fixed: "#FFDAD3",
          "fixed-dim": "#FFB4A5",
        },
        "on-primary": {
          DEFAULT: "#FFFFFF",
          container: "#611508",
          fixed: "#3E0400",
          "fixed-variant": "#7E2A1B",
        },
        secondary: {
          DEFAULT: "#51634E",
          container: "#D1E6CB",
          fixed: "#D3E8CE",
          "fixed-dim": "#B8CCB3",
        },
        "on-secondary": {
          DEFAULT: "#FFFFFF",
          container: "#556752",
          fixed: "#0F1F0F",
          "fixed-variant": "#394B38",
        },
        tertiary: {
          DEFAULT: "#6C5C43",
          container: "#AB977B",
          fixed: "#F6DFC0",
          "fixed-dim": "#D9C3A5",
        },
        "on-tertiary": {
          DEFAULT: "#FFFFFF",
          container: "#3D301A",
          fixed: "#251A07",
          "fixed-variant": "#53442E",
        },
        charcoal: "#222222",
        "on-surface": "#1B1C1C",
        "on-surface-variant": "#56423E",
        "inverse-surface": "#303030",
        "inverse-on-surface": "#F3F0EF",
        outline: "#89726D",
        "outline-variant": "#DCC0BB",
        border: "#EAEAEA",
        coral: "#E87A64",
        youtube: "#E02424",
        sage: "#8FA38B",
        sand: "#D9C3A5",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Newsreader", "Lora", "serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        arabic: ["var(--font-noto-arabic)", "Noto Serif Arabic", "Amiri", "serif"],
        quote: ["var(--font-newsreader)", "Newsreader", "serif"],
      },
      borderRadius: {
        card: "1rem", // 16px
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 8px 24px -4px rgba(34, 34, 34, 0.04), 0 2px 6px -1px rgba(34, 34, 34, 0.02)",
        paper: "0 1px 4px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};

export default config;

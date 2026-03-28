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
        bebas: ["var(--font-bebas)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        maroon: "var(--color-maroon)",
        "maroon-dark": "var(--color-maroon-dark)",
        "maroon-light": "var(--color-maroon-light)",
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        offwhite: "var(--color-offwhite)",
        "text-primary": "var(--color-text-primary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
      },
      backgroundImage: {
        "subtle-dark":
          "linear-gradient(180deg, var(--color-surface) 0%, var(--color-black) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

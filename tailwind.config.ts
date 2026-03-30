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
        heading: ["var(--font-heading)", "Georgia", "serif"],
        bebas: ["var(--font-heading)", "Georgia", "serif"],
        space: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        inter: [
          "var(--font-baskerville)",
          "Libre Baskerville",
          "Baskerville",
          "Georgia",
          "serif",
        ],
        playfair: [
          "var(--font-baskerville)",
          "Libre Baskerville",
          "Baskerville",
          "Georgia",
          "serif",
        ],
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
      borderRadius: {
        card: "3px",
      },
      backgroundImage: {
        "subtle-dark":
          "linear-gradient(180deg, var(--color-surface) 0%, var(--color-black) 100%)",
      },
    },
  },
  plugins: [
    function headingMetricsPlugin({ addUtilities }: { addUtilities: (u: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        ".font-heading": {
          lineHeight: "1.2",
          letterSpacing: "0.02em",
        },
      });
    },
  ],
};
export default config;

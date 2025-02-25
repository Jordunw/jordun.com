import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundlight: "var(--background-light)",
        cwhite: "var(--cwhite)",
        primary: "var(--primary)",
        primarylight: "var(--primary-light)",
        primarylight2: "var(--primary-light2)",
        secondary: "var(--secondary)",
        secondarylight: "var(--secondary-light)",
        tertiary: "var(--tertiary)"
      },
      animation: {
        flash: "flash 2s ease-out",
      },
      keyframes: {
        flash: {
          "0%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "var(--background-light)" },
          "100%": { backgroundColor: "transparent" },
        }
      }
    }
  },
  safelist: [
    'animate-flash',
  ],
  plugins: [],
} satisfies Config;

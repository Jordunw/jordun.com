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
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeOut: "fadeOut 2s ease-out forwards"
      },
      keyframes: {
        flash: {
          "0%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "var(--background-light)" },
          "100%": { backgroundColor: "transparent" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        }
      }
    }
  },
  safelist: [
    'animate-flash',
    'animate-fadeIn',
    'animate-fadeOut'
  ],
  plugins: [],
} satisfies Config;

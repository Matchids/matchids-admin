import type { Config } from "tailwindcss";

/**
 * Same token names as matchids-design-system / matchids-web, so the admin
 * dashboard feels like part of the same product rather than a bolted-on
 * tool. In production, import these from @matchids/design-system instead
 * of duplicating them.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1B3A",
        cream: "#FFF9F0",
        coral: { DEFAULT: "#FF6B6B", dark: "#E8524F" },
        gold: { DEFAULT: "#FFB627", dark: "#E89F0E" },
        teal: { DEFAULT: "#14B8A6", dark: "#0D9488" },
        violet: { DEFAULT: "#8B5CF6", dark: "#7C3AED" },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

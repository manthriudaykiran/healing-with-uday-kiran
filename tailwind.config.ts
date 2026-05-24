import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        brand: {
          gold: "#C9A24B",
          goldSoft: "#E7D6A8",
          emerald: "#4F8A78",
          emeraldSoft: "#A8C9BD",
          beige: "#F6F1E7",
          ivory: "#FBF9F4",
          ink: "#1F2A2E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "calm-gradient":
          "linear-gradient(135deg, #FBF9F4 0%, #F6F1E7 45%, #E7D6A8 100%)",
        "emerald-glow":
          "radial-gradient(circle at 30% 20%, rgba(168,201,189,0.45), transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(31,42,46,0.18)",
        glow: "0 0 0 1px rgba(201,162,75,0.25), 0 20px 60px -20px rgba(201,162,75,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

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
          // Repurposed semantic tokens — names kept so existing components keep working.
          gold: "#3B82F6",        // primary accent (electric blue)
          goldSoft: "#60A5FA",    // softer accent
          emerald: "#7DD3FC",     // cyan glow
          emeraldSoft: "#1E40AF", // deep blue
          beige: "#0F1437",       // raised surface
          ivory: "#05071A",       // page background (deep space)
          ink: "#F8FAFC",         // primary text (near-white)
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "calm-gradient":
          "linear-gradient(135deg, #05071A 0%, #0A1030 45%, #1E3A8A 100%)",
        "emerald-glow":
          "radial-gradient(circle at 30% 20%, rgba(125,211,252,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.25), transparent 55%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(96,165,250,0.35), 0 20px 60px -20px rgba(59,130,246,0.5)",
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

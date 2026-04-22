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
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        card: "var(--card)",
        gold: "var(--gold)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(212, 175, 55, 0.25)",
        card: "0 18px 45px -24px rgba(0, 0, 0, 0.75)",
      },
      backgroundImage: {
        "hero-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 45%, rgba(212,175,55,0.08) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;

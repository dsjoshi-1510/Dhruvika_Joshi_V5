import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Pastel Color Palette
        pastel: {
          // Greens
          mint: "#B8E6D5",
          sage: "#C8E4C2",
          seafoam: "#9FD8CB",

          // Blues
          sky: "#AED8F7",
          powder: "#B8D8E8",
          periwinkle: "#C7CEEA",

          // Pinks & Purples
          rose: "#F8C8DC",
          lavender: "#E0BBE4",
          lilac: "#D4C5E2",

          // Yellows & Peaches
          cream: "#FFF4E0",
          peach: "#FFD5C2",
          butter: "#FFF9C4",

          // Neutrals
          sand: "#F5E6D3",
          pearl: "#F0EDE5",
          cloud: "#E8E8E8",
        },
      },
      backgroundImage: {
        "pastel-gradient": "linear-gradient(135deg, #B8E6D5 0%, #AED8F7 50%, #E0BBE4 100%)",
        "pastel-gradient-soft": "linear-gradient(to bottom right, #F5E6D3 0%, #B8D8E8 100%)",
        "pastel-overlay": "linear-gradient(to bottom, rgba(184, 230, 213, 0.3), rgba(174, 216, 247, 0.3))",
        "pastel-mint-sky": "linear-gradient(135deg, #B8E6D5 0%, #AED8F7 100%)",
        "pastel-peach-rose": "linear-gradient(135deg, #FFD5C2 0%, #F8C8DC 100%)",
        "pastel-lavender-sky": "linear-gradient(135deg, #E0BBE4 0%, #AED8F7 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
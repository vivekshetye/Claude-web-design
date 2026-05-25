/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "#0A0A0F",
        "background-secondary": "#0D0D12",
        "background": "#10131c",
        "surface-card": "#1A1A1F",
        "surface": "#10131c",
        "surface-dim": "#10131c",
        "surface-container": "#1d1f28",
        "surface-container-low": "#191b24",
        "surface-container-high": "#272a33",
        "primary": "#b3c5ff",
        "primary-container": "#0066FF",
        "secondary": "#d0bcff",
        "secondary-container": "#571bc1",
        "accent-tertiary": "#06B6D4",
        "on-surface": "#e1e2ee",
        "on-surface-variant": "#c2c6d8",
        "text-heading": "#E5E5E5",
        "text-body": "#A0A0A0",
        "border-subtle": "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
        gutter: "1.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #0066ff, #d0bcff)",
        "gradient-ai": "linear-gradient(135deg, #0066FF 0%, #8B5CF6 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(0, 102, 255, 0.4)",
        "glow-secondary": "0 0 20px rgba(139, 92, 246, 0.4)",
        "glow-teal": "0 0 15px rgba(6, 182, 212, 0.3)",
        "glow-effect": "0 0 40px rgba(0, 102, 255, 0.15)",
        "glow-border": "inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(139, 92, 246, 0.1)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [],
};
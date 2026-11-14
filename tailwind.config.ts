import type { Config } from "tailwindcss";

/**
 * Every visual value resolves to a Material 3 token defined in styles/tokens.css.
 * Components use these utilities; they never hardcode colors, radii, or shadows.
 */
const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--md-sys-color-primary)",
        "on-primary": "var(--md-sys-color-on-primary)",
        "primary-container": "var(--md-sys-color-primary-container)",
        "on-primary-container": "var(--md-sys-color-on-primary-container)",
        secondary: "var(--md-sys-color-secondary)",
        "on-secondary": "var(--md-sys-color-on-secondary)",
        "secondary-container": "var(--md-sys-color-secondary-container)",
        "on-secondary-container": "var(--md-sys-color-on-secondary-container)",
        tertiary: "var(--md-sys-color-tertiary)",
        "on-tertiary": "var(--md-sys-color-on-tertiary)",
        "tertiary-container": "var(--md-sys-color-tertiary-container)",
        "on-tertiary-container": "var(--md-sys-color-on-tertiary-container)",
        error: "var(--md-sys-color-error)",
        "on-error": "var(--md-sys-color-on-error)",
        "error-container": "var(--md-sys-color-error-container)",
        "on-error-container": "var(--md-sys-color-on-error-container)",
        background: "var(--md-sys-color-background)",
        "on-background": "var(--md-sys-color-on-background)",
        surface: "var(--md-sys-color-surface)",
        "on-surface": "var(--md-sys-color-on-surface)",
        "surface-variant": "var(--md-sys-color-surface-variant)",
        "on-surface-variant": "var(--md-sys-color-on-surface-variant)",
        outline: "var(--md-sys-color-outline)",
        "outline-variant": "var(--md-sys-color-outline-variant)",
        "inverse-surface": "var(--md-sys-color-inverse-surface)",
        "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",
        "inverse-primary": "var(--md-sys-color-inverse-primary)",
        "surface-dim": "var(--md-sys-color-surface-dim)",
        "surface-bright": "var(--md-sys-color-surface-bright)",
        "surface-container-lowest": "var(--md-sys-color-surface-container-lowest)",
        "surface-container-low": "var(--md-sys-color-surface-container-low)",
        "surface-container": "var(--md-sys-color-surface-container)",
        "surface-container-high": "var(--md-sys-color-surface-container-high)",
        "surface-container-highest": "var(--md-sys-color-surface-container-highest)",
      },
      fontFamily: {
        sans: ["var(--font-roboto-flex)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xs: "var(--md-sys-shape-xs)",
        sm: "var(--md-sys-shape-sm)",
        md: "var(--md-sys-shape-md)",
        lg: "var(--md-sys-shape-lg)",
        xl: "var(--md-sys-shape-xl)",
        full: "var(--md-sys-shape-full)",
      },
      boxShadow: {
        "elevation-1": "var(--md-sys-elevation-1)",
        "elevation-2": "var(--md-sys-elevation-2)",
      },
      transitionDuration: {
        short: "var(--md-sys-motion-duration-short)",
        medium: "var(--md-sys-motion-duration-medium)",
      },
      transitionTimingFunction: {
        standard: "var(--md-sys-motion-easing-standard)",
        emphasized: "var(--md-sys-motion-easing-emphasized)",
      },
    },
  },
  plugins: [],
};

export default config;

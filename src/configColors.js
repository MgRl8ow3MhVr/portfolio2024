// =====================================================
// COLOR CONFIGURATION
// All colors used throughout the application
// =====================================================

export const colors = {
  // Background colors
  background: {
    main: "#f0e0cc", // Main beige background (warmer, closer to tan)
    white: "#ffffff", // Pure white
    black: "#000000", // Pure black
  },

  // Text colors - Simplified from 5 to 2 colors
  text: {
    primary: "rgba(46, 46, 46, 0.872)", // Main text (also used for icons)
    light: "#a0a0a0", // Secondary/subtle text
  },

  // Card backgrounds - Keep home and portfolio distinction
  cards: {
    home: "#303030", // Very dark gray for home cards
    portfolio: "#5c5c5c", // Medium gray for portfolio cards
  },

  // UI colors - Simplified warm palette
  ui: {
    tan: "#d8b4a0", // Buttons, highlights, borders (base tan color)
    tanHover: "#e4c4b3", // Hover states (lighter tan)
    green: "#6bd172", // Checkmarks and success states
    mutedGreen: "rgb(113, 138, 113)", // Muted green for video controls
  },

  // Grays - Consolidated gray scale (used by dice and other UI)
  gray: {
    light: "#aaabab", // Light gray
    medium: "#5c5c5c", // Medium gray (reuses cards.portfolio)
    veryLight: "#dddbdb", // Very light gray
    silver: "#c0c0c0", // Silver (for icons)
  },

  // Overlay - Simplified dark overlay system
  overlay: {
    dark: "rgba(0, 0, 0, 0.85)", // Dark overlays and gradient start
    medium: "rgba(0, 0, 0, 0.15)", // Gradient middle
    transparent: "rgba(0, 0, 0, 0)", // Gradient end
  },
};

import { colors } from "../config.js";

/**
 * Initialize all CSS color variables on the root element
 * This should be called once when the app mounts
 */
export const initializeCSSColorVariables = () => {
  const root = document.documentElement;

  // Background colors
  root.style.setProperty("--bg", colors.background.main);
  root.style.setProperty("--bg-white", colors.background.white);
  root.style.setProperty("--bg-black", colors.background.black);

  // Text colors (simplified)
  root.style.setProperty("--text-primary", colors.text.primary);
  root.style.setProperty("--text-light", colors.text.light);
  root.style.setProperty("--text-white", colors.background.white);
  root.style.setProperty("--text-dark", colors.text.primary);

  // UI colors (simplified warm tones)
  root.style.setProperty("--warm-tan", colors.ui.tan);
  root.style.setProperty("--warm-light-tan", colors.ui.tanHover);
  root.style.setProperty("--warm-medium-tan", colors.ui.tan);
  root.style.setProperty("--warm-tan-transparent", `${colors.ui.tan}4d`); // 30% opacity
  root.style.setProperty("--warm-tan-glow", `${colors.ui.tan}cc`); // 80% opacity

  // Dice colors (using consolidated grays)
  root.style.setProperty("--diceCol1", colors.gray.light);
  root.style.setProperty("--diceCol2", colors.gray.medium);
  root.style.setProperty("--diceCol3", colors.gray.veryLight);

  // Overlay colors (simplified)
  root.style.setProperty("--overlay-dark", colors.overlay.dark);
  root.style.setProperty("--overlay-gradient-start", colors.overlay.dark);
  root.style.setProperty("--overlay-gradient-middle", colors.overlay.medium);
  root.style.setProperty("--overlay-gradient-end", colors.overlay.transparent);

  // Accent colors
  root.style.setProperty("--accent-green", colors.ui.mutedGreen);
};

/**
 * Update the card background color based on current card set
 * @param {string} cardSet - Either "home" or "portfolio"
 */
export const updateCardBackgroundColor = (cardSet) => {
  const root = document.documentElement;
  const cardColor = cardSet === "home" ? colors.cards.home : colors.cards.portfolio;
  root.style.setProperty("--card-bg", cardColor);
};

export const wordsList = ["zzz", "lana", "portfolio"];

// Card colors
export const homeCardsColor = "#303030";
export const portfolioCardsColor = "#5c5c5c";

// Checkmark colors
export const homeCheckColor = "#6bd172";
export const portfolioCheckColor = "#7dd683";

// Square size ratios based on screen orientation
// Portrait mode (phone): ratio based on screen width (smallest dimension)
export const portraitSizeRatio = 0.31; // % of screen width

// Landscape mode (desktop/tablet): ratio based on screen height (smallest dimension)
export const landscapeSizeRatio = 0.22; // 22% of screen height

// Typography layout configuration
export const typographyConfig = {
  // Padding as a ratio of tile size (0.12 = 12% of tile size)
  paddingRatio: 0.1,

  // Letter spacing as a ratio of tile size (0.08 = 8% of tile size)
  letterSpacingRatio: 0.06,

  // Line spacing as a ratio of tile size (0.12 = 12% of tile size)
  lineSpacingRatio: 0.12,

  // Letter font size (also used for vertical centering calculations)
  letterFontSize: 16, // pixels for desktop
  letterFontSizeMobile: 12, // pixels for mobile

  // Customer name font size
  customerFontSize: 13, // pixels for desktop
  customerFontSizeMobile: 10, // pixels for mobile

  // Maximum random delay for letter transitions (in milliseconds)
  maxTransitionDelay: 120,
};

// Video player configuration
export const videoPlayerConfig = {
  // Curtain width as percentage of screen width
  curtainWidth: 8, // percentage (15 = 15%)
};

export const wordsList = ["zzz", "lana", "portfolio"];

// Card colors
export const homeCardsColor = "#303030";
export const portfolioCardsColor = "#5c5c5c";

// Checkmark colors
export const homeCheckColor = "#6bd172";
export const portfolioCheckColor = "#7dd683";

// Square size ratios based on screen orientation
export const portraitSizeRatio = 0.28; // % of screen height for lanscape

// Landscape mode (desktop/tablet): ratio based on screen height (smallest dimension)
export const landscapeSizeRatio = 0.28; // 22% of screen height for mobiles

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

// Layout flex proportions (landscape mode only)
export const layoutConfig = {
  titlesContainerFlex: 2, // Flex value for titles section
  gridProjectsFlex: 2, // Flex value for projects grid section
};

// Video player configuration
export const videoPlayerConfig = {
  // Animation timings (in milliseconds)
  darkOverlayDuration: 250, // Dark overlay fade duration
  videoPlayerDuration: 600, // Video container animation duration
  videoPlayerDelay: 100, // Video container animation delay
  controlBarDuration: 300, // Control bar animation duration
  controlBarDelay: 500, // Control bar animation delay (overlayDuration + videoPlayerDelay + videoPlayerDuration)
};

// Modal configuration
export const modalConfig = {
  descriptionStartingPoint: 16, // Description content starts at (100 - 84)% = 16% from top of modal
  arrowDirectionChangeOffset: 30, // Offset in pixels before reaching top to change arrow direction
};

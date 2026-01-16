// =====================================================
// LAYOUT & ANIMATION CONFIGURATION
// =====================================================

// Re-export colors from configColors
export { colors } from "./configColors.js";

// Square size ratios based on screen orientation
export const portraitSizeRatio = 0.31; // % of screen height for lanscape

// Landscape mode (desktop/tablet): ratio based on screen height (smallest dimension)
export const landscapeSizeRatio = 0.28; // 22% of screen height for mobiles

// Close to square configuration
export const closeToSquareThreshold = 0.25; // If aspect ratio difference from 1 is less than this, consider it "close to square"
export const closeToSquareRatio = 0.25; // Size ratio to use when screen is close to square

// Typography layout configuration
export const typographyConfig = {
  // Padding as a ratio of tile size (0.12 = 12% of tile size)
  paddingRatio: 0.1,

  // Letter spacing as a ratio of tile size (0.08 = 8% of tile size)
  letterSpacingRatio: 0.055,

  // Line spacing as a ratio of tile size (0.12 = 12% of tile size)
  lineSpacingRatio: 0.12,

  // Letter font size (also used for vertical centering calculations)
  letterFontSize: 18, // pixels for desktop
  letterFontSizeMobile: 15, // pixels for mobile

  // Customer name font size
  customerFontSize: 13, // pixels for desktop
  customerFontSizeMobile: 10, // pixels for mobile

  // Maximum random delay for letter transitions (in milliseconds)
  maxTransitionDelay: 120,
};

// Layout flex proportions
export const layoutConfig = {
  // Landscape mode (desktop)
  titlesContainerFlex: 2, // Flex value for titles section
  gridProjectsFlex: 2, // Flex value for projects grid section

  // Portrait mode (mobile)
  titlesContainerFlexPortrait: 1, // Flex value for titles section in portrait
  gridProjectsFlexPortrait: 5, // Flex value for projects grid section in portrait

  transitionTime: 0.85, // Transition time in seconds for card animations
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
  autoScrollDelay: 1300, // Delay in milliseconds before auto-scrolling description (home cards only)
};

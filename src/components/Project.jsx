import React, { useMemo } from "react";
import CheckBox from "./CheckBox.jsx";
import {
  typographyConfig,
  homeCardsColor,
  portfolioCardsColor,
} from "../config.js";
import "./Project.css";

function Project({
  project,
  show,
  hoverMe,
  hoverOff,
  openModale,
  checked,
  checkColor,
  currentCardSet,
  isGathering,
  size,
}) {
  // Destructure project properties
  const { gif, title = "", customer, color, icon } = project;
  // Calculate layout parameters based on tile size and config ratios
  const isMobile = window.innerWidth <= 850;
  const padding = size * typographyConfig.paddingRatio;
  const letterSpacing = size * typographyConfig.letterSpacingRatio;
  const lineSpacing = size * typographyConfig.lineSpacingRatio;
  const fontSize = isMobile
    ? typographyConfig.letterFontSizeMobile
    : typographyConfig.letterFontSize;
  const customerFontSize = isMobile
    ? typographyConfig.customerFontSizeMobile
    : typographyConfig.customerFontSize;
  const maxLettersPerLine = Math.floor((size - 2 * padding) / letterSpacing);

  // Split title into letters
  const lettersList = title.split("");

  // Generate stable random delays once per title
  const transitionDelays = useMemo(() => {
    return lettersList.map(
      () =>
        Math.floor(Math.random() * typographyConfig.maxTransitionDelay) + "ms"
    );
  }, [lettersList.length, title]);

  // Split text into lines without breaking words (max 2 lines)
  // Returns an array of {text, startIndex} objects
  const splitIntoLines = (text) => {
    const words = text.split(" ");
    if (text.length <= maxLettersPerLine) {
      return [{ text: text, startIndex: 0 }]; // Single line
    }

    // Try to split into 2 balanced lines
    let line1 = "";
    let currentLength = 0;
    let line1EndIndex = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordWithSpace = (currentLength > 0 ? " " : "") + word;

      if (currentLength + wordWithSpace.length <= maxLettersPerLine) {
        line1 += wordWithSpace;
        currentLength += wordWithSpace.length;
        // Calculate where this line ends in the original string
        line1EndIndex = text.indexOf(word, line1EndIndex) + word.length;
      } else {
        // Start second line with remaining words
        const line2 = words.slice(i).join(" ");
        // Line 2 starts after line1 ends (skip any spaces)
        const line2StartIndex = text.indexOf(line2, line1EndIndex);
        return [
          { text: line1, startIndex: 0 },
          { text: line2, startIndex: line2StartIndex },
        ];
      }
    }

    return [{ text: line1, startIndex: 0 }];
  };

  const lines = splitIntoLines(title);
  const totalLines = lines.length;

  // Position letters with absolute positioning, centered
  const positionMaker = (index) => {
    // Find which line and position in line for this letter
    // Use startIndex to properly map character positions
    let lineIndex = 0;
    let positionInLine = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineStart = line.startIndex;
      const lineEnd = lineStart + line.text.length;

      if (index >= lineStart && index < lineEnd) {
        lineIndex = i;
        positionInLine = index - lineStart;
        break;
      }
    }

    const currentLine = lines[lineIndex].text;
    const lineLength = currentLine.length;

    // Calculate vertical position (centered)
    // Account for letter height to properly center the text visually
    const totalHeight =
      totalLines === 1 ? fontSize : (totalLines - 1) * lineSpacing + fontSize;
    const startTop = size / 2 - totalHeight / 2;
    const top = startTop + lineIndex * lineSpacing;

    // Calculate horizontal position (centered)
    // Add small offset to account for letter width
    const lineWidth = lineLength * letterSpacing;
    const startLeft = size / 2 - lineWidth / 2;
    const left = startLeft + positionInLine * letterSpacing;

    const textTransform = index === 0 ? "uppercase" : "lowercase";
    const transitionDelay = transitionDelays[index];

    return {
      top: top + "px",
      left: left + "px",
      fontSize: fontSize + "px",
      textTransform,
      transitionDelay,
    };
  };

  const positionMakerShow = (index) => {
    // Find which line and position in line for this letter
    let lineIndex = 0;
    let positionInLine = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineStart = line.startIndex;
      const lineEnd = lineStart + line.text.length;

      if (index >= lineStart && index < lineEnd) {
        lineIndex = i;
        positionInLine = index - lineStart;
        break;
      }
    }

    const top = 2 + lineIndex * lineSpacing;
    const left = 5 + positionInLine * letterSpacing;
    const textTransform = index === 0 ? "uppercase" : "lowercase";
    const transitionDelay = transitionDelays[index];

    return {
      top: top + "px",
      left: left + "px",
      fontSize: fontSize + "px",
      textTransform,
      fontWeight: "400",
      transitionDelay,
    };
  };

  // Customer name (always single line)
  const customerLettersList = customer ? customer.split("") : [];
  const customerLength = customerLettersList.length;

  // Position customer name centered below the title
  const positionCustomerMaker = (index) => {
    // Calculate vertical position (below title, centered)
    const titleHeight =
      totalLines === 1 ? fontSize : (totalLines - 1) * lineSpacing + fontSize;
    const totalContentHeight = titleHeight + customerFontSize + lineSpacing; // gap between title and customer (same as line spacing)
    const top = size / 2 - totalContentHeight / 2 + titleHeight + lineSpacing;

    // Calculate horizontal position (centered)
    const lineWidth = customerLength * letterSpacing;
    const startLeft = size / 2 - lineWidth / 2;
    const left = startLeft + index * letterSpacing;

    return {
      top: top + "px",
      left: left + "px",
      fontSize: customerFontSize + "px",
      textTransform: "uppercase",
    };
  };

  // Customer moves to bottom on hover
  const positionCustomerMakerShow = (index) => {
    // Position at bottom of tile
    const top = size - customerFontSize - 10;

    // Calculate horizontal position (centered)
    const lineWidth = customerLength * letterSpacing;
    const startLeft = size / 2 - lineWidth / 2;
    const left = startLeft + index * letterSpacing;

    return {
      top: top + "px",
      left: left + "px",
      fontSize: customerFontSize + "px",
      textTransform: "uppercase",
      fontWeight: "400",
    };
  };

  return (
    <div
      className="cart"
      onMouseEnter={() => {
        hoverMe();
      }}
      onMouseLeave={() => {
        hoverOff();
      }}
      style={color && { backgroundColor: color }}
    >
      {checked && <CheckBox checkColor={checkColor} />}

      {/* Display icon if icon property is set */}
      {icon && (
        <div
          className="icon-container"
          onClick={openModale}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        >
          {React.createElement(icon, {
            size: size * 0.33,
            color:
              currentCardSet === "home" ? homeCardsColor : portfolioCardsColor,
          })}
        </div>
      )}

      {/* Display title and customer only if no icon */}
      {!icon && !isGathering && (
        <div className={show ? "titlesin" : "titlesout"}>
          {lettersList.map((letter, index) => (
            <div
              key={index + letter}
              className="letter projectLetter"
              style={!show ? positionMaker(index) : positionMakerShow(index)}
            >
              {letter}
            </div>
          ))}
          {customer &&
            customerLettersList.map((letter, index) => (
              <div
                key={index + letter + "customer"}
                className="letter customerLetter"
                style={
                  !show
                    ? positionCustomerMaker(index)
                    : positionCustomerMakerShow(index)
                }
              >
                {letter}
              </div>
            ))}
        </div>
      )}

      {/* Display gif only if no icon */}
      {!icon && show && !isGathering && (
        <div className="gifcard">
          <img
            src={gif}
            alt="gif"
            onClick={() => {
              openModale();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Project;

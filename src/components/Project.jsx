import { useMemo } from "react";
import CheckBox from "./CheckBox.jsx";
import "./Project.css";

function Project({
  gif,
  show,
  hoverMe,
  hoverOff,
  title,
  color,
  openModale,
  checked,
  checkColor,
  isGathering,
}) {
  const lettersList = title.split("");
  const big = window.innerWidth > 850;
  const size = big ? 170 : 115;
  const padding = big ? 17 : 12;
  const spacing = big ? 11 : 8;
  const linespacing = big ? 17 : 12;
  const maxperline = Math.round((size - 2 * padding) / spacing) - 2;

  // Generate stable random delays once per title
  const transitionDelays = useMemo(() => {
    return lettersList.map(() => Math.floor(Math.random() * 120) + "ms");
  }, [lettersList.length, title]);

  // Position letters centered vertically
  const positionMaker = (index) => {
    const lines = lettersList.length > maxperline ? 2 : 1;
    const myline = index > maxperline ? 2 : 1;
    const myposinline = myline === 2 ? index - maxperline : index;

    // Vertical position - centered
    let top = size / 2 - padding;
    if (myline === 2) {
      top += linespacing;
    }
    if (lines === 2) {
      top -= linespacing / 1.5;
    }

    // Horizontal position
    const mylineletters = lines === 1 ? lettersList.length : (myline === 1 ? maxperline : lettersList.length - maxperline);
    let left = (myposinline + 1) * spacing;
    left += ((maxperline - mylineletters) / 2 + 0.5) * spacing;

    const textTransform = index === 0 ? "uppercase" : "lowercase";
    const transitionDelay = transitionDelays[index];

    return {
      top: top + "px",
      left: left + "px",
      textTransform,
      transitionDelay,
    };
  };

  const positionMakerShow = (index) => {
    const lines = lettersList.length > maxperline ? 2 : 1;
    const myline = index > maxperline ? 2 : 1;
    const myposinline = myline === 2 ? index - maxperline : index;

    let top = 2;
    if (myline === 2) {
      top += linespacing;
    }

    const left = 5 + myposinline * spacing;
    const textTransform = index === 0 ? "uppercase" : "lowercase";

    return {
      top: top + "px",
      left: left + "px",
      textTransform,
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
      {!isGathering && (
        <div className={show ? "titlesin" : "titlesout"}>
          {lettersList.map((letter, index) => (
            <div
              key={index + letter}
              className="letter smallLetter"
              style={!show ? positionMaker(index) : positionMakerShow(index)}
            >
              {letter}
            </div>
          ))}
        </div>
      )}

      {show && !isGathering && (
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

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
  bigletter,
  openModale,
  checked,
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
  }, [title]);

  // to center line 1
  const positionMaker = (index) => {
    let top, left;
    // mb for myblock
    const mb =
      index < bigletter
        ? {
            pos: "top",
            myindex: index,
            length: bigletter - 2,
          }
        : {
            pos: "bot",
            myindex: index - bigletter,
            length: lettersList.length - 1 - bigletter,
          };

    mb.lines = mb.length > maxperline ? 2 : 1;
    mb.myline = mb.myindex > maxperline ? 2 : 1;
    mb.myposinline = mb.myline === 2 ? mb.myindex - maxperline : mb.myindex;
    mb.mylineletters =
      mb.lines === 1
        ? mb.length
        : mb.myline === 1
        ? maxperline
        : mb.length - maxperline;
    // V. BLOCK POS
    top = mb.pos === "top" ? padding : size - 2.5 * padding;
    if (mb.myline === 2) {
      top += linespacing;
    } // V. LINE SPACING
    if (mb.lines === 2) {
      top -= linespacing / 1.5;
    } // V. LINE RECENTER

    // H. GLOBALE POS
    left = (mb.myposinline + 1) * spacing;
    // H. CENTER
    left += ((maxperline - mb.mylineletters) / 2 + 0.5) * spacing;

    // IF NO BIG LETTER, SIMPLY RECENTER VERT
    if (bigletter === -1) {
      top -= size / 2 - 2 * padding;
    }
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
    let top, left;
    const lines = lettersList.length > maxperline ? 2 : 1;
    const myline = index > maxperline ? 2 : 1;
    const myposinline = myline === 2 ? index - maxperline : index;
    top = 2;
    if (myline === 2) {
      top += linespacing;
    } // V. LINE SPACING
    // H. GLOBALE POS
    left = 5 + myposinline * spacing;
    const textTransform = index === bigletter ? "uppercase" : "lowercase";

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
      {checked && <CheckBox />}
      <div className={show ? "titlesin" : "titlesout"}>
        {lettersList.map((letter, index) => {
          // # # # # BIG LETTER # # # # #
          if (index === bigletter && !show) {
            return (
              <div key={index + letter} className="letter bigLetter">
                {letter}
              </div>
            );
            // # # # # SMALL # # # # #
          } else {
            return (
              <div
                key={index + letter}
                className={`letter smallLetter`}
                style={!show ? positionMaker(index) : positionMakerShow(index)}
              >
                {letter}
              </div>
            );
          }
        })}
      </div>

      {show && (
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

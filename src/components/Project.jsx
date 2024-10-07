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
  const size = window.innerWidth > 850 ? 170 : 115;
  const padding = 17;
  const spacing = 11;
  const linespacing = 15;
  const maxperline = Math.round((size - 2 * padding) / spacing) - 2;

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
    top = mb.pos === "top" ? padding : size - 2 * padding;
    if (mb.myline === 2) {
      top += linespacing;
    } // V. LINE SPACING
    if (mb.lines === 2) {
      top -= linespacing / 1.5;
    } // V. LINE RECENTER

    // H. GLOBALE POS
    left = (mb.myposinline + 1) * spacing;
    // H. CENTER
    left += ((maxperline - mb.mylineletters) / 2) * spacing;

    // IF NO BIG LETTER, SIMPLY RECENTER VERT
    if (bigletter === -1) {
      top -= size / 2 - 2 * padding;
    }

    return { top: top + "px", left: left + "px" };
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
          const isBigLetter = index === bigletter;
          // # # # # BIG LETTER # # # # #
          if (isBigLetter) {
            return <div className="letter bigLetter">{letter}</div>;
            // # # # # SMALL # # # # #
          } else {
            return (
              <div
                className={`letter smallLetter`}
                style={positionMaker(index)}
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

import React, { useEffect } from "react";
import Fade from "./Fade.jsx";

function Project({ gif, show, setCarts, title, color, bigletter, openModale }) {
  useEffect(() => {
    const img = document.createElement("img");
    img.src = gif;
  }, []);

  const pos = bigletter !== undefined ? bigletter : -1;
  const emptyBoard = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  return (
    <div
      className="cart"
      onMouseEnter={() => {
        setCarts();
      }}
      onMouseLeave={() => {
        setCarts(emptyBoard);
      }}
      style={color && { backgroundColor: color }}
    >
      <div className={show ? "titlesin" : "titlesout"}>
        <div className={show ? "t2h" : "t2"}>{title.substring(0, pos)}</div>
        <div className={show ? "t1h" : "t1"}>{title.charAt(pos)}</div>
        <div className={show ? "t2h" : "t2"}>{title.substring(pos + 1)}</div>
      </div>

      <Fade show={show}>
        <img
          src={gif}
          alt="gif"
          onClick={() => {
            openModale();
          }}
        />
      </Fade>
    </div>
  );
}

export default Project;

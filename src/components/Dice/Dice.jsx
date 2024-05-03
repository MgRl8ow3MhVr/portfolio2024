import { useEffect } from "react";
import "./Dice.css";

const Dice = ({ word }) => {
  console.log(word);
  if (!word) return null;
  return (
    <div className="container">
      <div className="cube-container">
        <div
          className="cube"
          id="cube"
          onClick={() => {
            const c1 = document.getElementById("cube");
            c1.style["-webkit-animation-duration"] = "1s";
            setTimeout(() => {
              c1.style["-webkit-animation-duration"] = "50s";
            }, 870);
          }}
        >
          <div className="box box1 front">{word.charAt(0)}</div>
          <div className="box box1 right">{word.charAt(1)}</div>
          <div className="box box1 top">{word.charAt(2)}</div>
          <div className="box box1 bottom">{word.charAt(3)}</div>
          <div className="box box1 left">{word.charAt(4)}</div>
          <div className="box box1 back">{word.charAt(5)}</div>
        </div>
      </div>
    </div>
  );
};

export default Dice;

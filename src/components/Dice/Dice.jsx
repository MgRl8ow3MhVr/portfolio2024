import { useEffect } from "react";
import "./Dice.css";

const Dice = () => {
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
          <div className="box box1 front">Click</div>
          <div className="box box1 right">Shuffle</div>
          <div className="box box1 top">Click</div>
          <div className="box box1 bottom">Random</div>
          <div className="box box1 left">Me</div>
          <div className="box box1 back">Click</div>
        </div>
      </div>
    </div>
  );
};

export default Dice;

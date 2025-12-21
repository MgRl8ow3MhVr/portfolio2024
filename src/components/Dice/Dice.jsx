import "./Dice.css";

const Dice = ({ word = "", isGathering = false }) => {
  return (
    <div className="container">
      <div className="cube-container">
        <div className={`cube ${isGathering ? "fast-spin" : ""}`} id="cube">
          <div className="box box1 front">{word.charAt(0) || ""}</div>
          <div className="box box1 right">{word.charAt(1) || ""}</div>
          <div className="box box1 top">{word.charAt(2) || ""}</div>
          <div className="box box1 bottom">{word.charAt(3) || ""}</div>
          <div className="box box1 left">{word.charAt(4) || ""}</div>
          <div className="box box1 back">{word.charAt(5) || ""}</div>
        </div>
      </div>
    </div>
  );
};

export default Dice;

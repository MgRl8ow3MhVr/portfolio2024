import "./Dice.css";

const Dice = ({ titles = [], isGathering = false }) => {
  return (
    <div className="dice-wrapper">
      <div className="cube-container">
        <div className={`cube ${isGathering ? "fast-spin" : ""}`} id="cube">
          <div className="box front">{titles[0] || ""}</div>
          <div className="box right">{titles[1] || ""}</div>
          <div className="box top">{titles[2] || ""}</div>
          <div className="box bottom">{titles[3] || ""}</div>
          <div className="box left">{titles[4] || ""}</div>
          <div className="box back">{titles[5] || ""}</div>
        </div>
      </div>
    </div>
  );
};

export default Dice;

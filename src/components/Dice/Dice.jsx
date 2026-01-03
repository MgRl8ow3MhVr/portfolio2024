import "./Dice.css";

const Dice = ({ titles = [], isGathering = false }) => {
  return (
    <div className="container">
      <div className="cube-container">
        <div className={`cube ${isGathering ? "fast-spin" : ""}`} id="cube">
          <div className="box box1 front">{titles[0] || ""}</div>
          <div className="box box1 right">{titles[1] || ""}</div>
          <div className="box box1 top">{titles[2] || ""}</div>
          <div className="box box1 bottom">{titles[3] || ""}</div>
          <div className="box box1 left">{titles[4] || ""}</div>
          <div className="box box1 back">{titles[5] || ""}</div>
        </div>
      </div>
    </div>
  );
};

export default Dice;

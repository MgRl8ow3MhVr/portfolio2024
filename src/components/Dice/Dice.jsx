import "./Dice.css";

const Dice = ({ titles = [], isGathering = false, onClick, isInitialLoad }) => {
  return (
    <div
      className="dice"
      style={{
        animation: isInitialLoad ? "appear 0.3s ease-in 0.3s both" : "none",
      }}
    >
      <div onClick={onClick} style={{ cursor: "pointer" }}>
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
      </div>
    </div>
  );
};

export default Dice;

const Header = ({ currentCardSet, gatherToCenter, isInitialLoad }) => {
  return (
    <>
      <div
        className="header"
        style={{
          animation: isInitialLoad ? "appear 0.3s ease-in" : "none",
        }}
      >
        PIERRE MALLERET
      </div>
      <div
        className="subtitle"
        style={{
          opacity: gatherToCenter ? 0 : 1,
          transition: `opacity ${gatherToCenter ? "0.5s" : "0.6s"} ease-out`,
          animation: isInitialLoad ? "appear 0.3s ease-in 0.15s both" : "none",
        }}
      >
        <span>
          {currentCardSet === "home" ? "SOLUTIONS NUMÉRIQUES " : "PORTFOLIO"}
        </span>
      </div>
    </>
  );
};

export default Header;

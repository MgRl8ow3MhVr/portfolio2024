import CheckBox from "./CheckBox.jsx";

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
  const pos = bigletter !== undefined ? bigletter : -1;
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
      {/* <div className="checked"> ✅ </div> */}
      {checked && <CheckBox />}
      <div className={show ? "titlesin" : "titlesout"}>
        {title.substring(0, pos)
          ? title
              .substring(0, pos)
              .split(show ? " " : "$")
              .map((w) => <div className={show ? "t2h" : "t2"}>{w}</div>)
          : !show && <div className="hideme">{``}</div>}
        <div className={show ? "t1h" : "t1"}>{title.charAt(pos)}</div>
        {title.substring(pos + 1)
          ? title
              .substring(pos + 1)
              .split(show ? " " : "$")
              .map((w) => <div className={show ? "t2h" : "t2"}>{w}</div>)
          : !show && <div className="hideme">{``}</div>}
      </div>

      {/* <Fade show={show}> */}
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
      {/* </Fade> */}
    </div>
  );
}

export default Project;

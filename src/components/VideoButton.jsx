export default ({ buttonvideo, setPlayvideo }) => {
  return (
    <div
      className="videobutton"
      onClick={() => {
        setPlayvideo(true);
      }}
    >
      <div className="triangle-play-button-small"></div>
      {buttonvideo}
    </div>
  );
};

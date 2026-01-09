export default ({ buttonvideo, setPlayvideo, setCurrentVideoLink, linkvideo }) => {
  return (
    <div
      className="videobutton"
      onClick={() => {
        setCurrentVideoLink(linkvideo);
        setPlayvideo(true);
      }}
    >
      <div className="triangle-play-button-small"></div>
      {buttonvideo}
    </div>
  );
};

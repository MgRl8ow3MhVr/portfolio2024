import { forwardRef } from "react";
import "./ControlBar.css";

const ControlBar = forwardRef(
  ({ isPlaying, togglePlayPause, progress, handleSeek, duration, formatTime, setPlayvideo }, ref) => {
    return (
      <div className="controls" ref={ref}>
        <div className="duration">{formatTime(duration)}</div>
        <div className="playcontainer" onClick={togglePlayPause}>
          {!isPlaying ? (
            <div className="triangle-play-button"></div>
          ) : (
            <div className="pause-button">
              <div></div>
              <div></div>
            </div>
          )}
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />

        <div
          className="close-video"
          onClick={(e) => {
            e.stopPropagation();
            setPlayvideo(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
          </svg>
        </div>
      </div>
    );
  }
);

ControlBar.displayName = "ControlBar";

export default ControlBar;

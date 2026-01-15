import { forwardRef } from "react";
import "./ControlBar.css";

const ControlBar = forwardRef(
  ({ isPlaying, togglePlayPause, progress, handleSeek, duration, formatTime, controlBarDuration, controlBarDelay }, ref) => {
    return (
      <div
        className="controls"
        ref={ref}
        style={{
          "--control-duration": `${controlBarDuration}ms`,
          "--control-delay": `${controlBarDelay}ms`
        }}
      >
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
      </div>
    );
  }
);

ControlBar.displayName = "ControlBar";

export default ControlBar;

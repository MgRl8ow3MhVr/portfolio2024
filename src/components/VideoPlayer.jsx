import { useRef, useState, forwardRef } from "react";
import Close from "../assets/svg/close";
import "./VideoPlayer.css";

const VideoPlayer = forwardRef(({ linkvideo, setPlayvideo }, ref) => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Toggle play/pause
  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar as video plays
  const handleProgress = () => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  // Seek to a specific time
  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(event.target.value);
  };

  return (
    <div className="videoplayer" ref={ref}>
      <div
        className="closeModal"
        onClick={(e) => {
          e.stopPropagation();
          setPlayvideo(false);
        }}
      >
        <Close size={25} />
      </div>
      <div className="controls"></div>
      <div className="videoContainer">
        <video
          ref={videoRef}
          src={linkvideo}
          onTimeUpdate={handleProgress}
          onClick={togglePlayPause}
          width="100%"
          // preload="none"
          controls={false} // Hide default controls to use custom controls
        />
      </div>

      <div className="controls">
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
    </div>
  );
});

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;

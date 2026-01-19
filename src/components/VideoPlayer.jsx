import { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { videoPlayerConfig } from "../config";
import ControlBar from "./ControlBar";
import Close from "../assets/svg/close.jsx";
import "./VideoPlayer.css";

// Component that includes CSSTransition for both video and controls
const VideoPlayerWithTransition = ({ isOpen, linkvideo, setPlayvideo }) => {
  const videoPlayerRef = useRef(null);
  const controlBarRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Reset video state when video source changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, [linkvideo]);

  // Format time in mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    return `${Math.floor(seconds).toString().padStart(2, "0")}s`;
  };

  // Toggle play/pause
  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress bar as video plays
  const handleProgress = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // Handle when metadata is loaded to get duration
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Seek to a specific time
  const handleSeek = (event) => {
    if (videoRef.current) {
      const seekTime = (event.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(event.target.value);
    }
  };

  // Close video when clicking on curtain
  const handleCurtainClick = (e) => {
    e.stopPropagation();
    setPlayvideo(false);
  };

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={
          videoPlayerConfig.videoPlayerDelay +
          videoPlayerConfig.videoPlayerDuration
        }
        classNames="videoanim"
        unmountOnExit
        nodeRef={videoPlayerRef}
      >
        <div
          ref={videoPlayerRef}
          className="videoContainer"
          onClick={handleCurtainClick}
          style={{
            "--video-duration": `${videoPlayerConfig.videoPlayerDuration}ms`,
            "--video-delay": `${videoPlayerConfig.videoPlayerDelay}ms`,
          }}
        >
          <video
            ref={videoRef}
            src={linkvideo}
            onTimeUpdate={handleProgress}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlayPause}
            width="100%"
            height="100%"
            controls={false}
          />
          <div
            className="video-close-button"
            onClick={(e) => {
              e.stopPropagation();
              setPlayvideo(false);
            }}
          >
            <Close size={50} />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={
          videoPlayerConfig.controlBarDelay +
          videoPlayerConfig.controlBarDuration
        }
        classNames="controlanim"
        unmountOnExit
        nodeRef={controlBarRef}
      >
        <ControlBar
          ref={controlBarRef}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          progress={progress}
          handleSeek={handleSeek}
          duration={duration}
          formatTime={formatTime}
          controlBarDuration={videoPlayerConfig.controlBarDuration}
          controlBarDelay={videoPlayerConfig.controlBarDelay}
        />
      </CSSTransition>
    </>
  );
};

export default VideoPlayerWithTransition;

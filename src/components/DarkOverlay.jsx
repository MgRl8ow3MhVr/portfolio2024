import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { videoPlayerConfig } from "../config";
import "./DarkOverlay.css";

const DarkOverlay = ({ isOpen }) => {
  const overlayRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={videoPlayerConfig.darkOverlayDuration}
      classNames="overlay"
      unmountOnExit
      nodeRef={overlayRef}
    >
      <div
        ref={overlayRef}
        className="dark-overlay"
        style={{
          "--overlay-duration": `${videoPlayerConfig.darkOverlayDuration}ms`
        }}
      />
    </CSSTransition>
  );
};

export default DarkOverlay;

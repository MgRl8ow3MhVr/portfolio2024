import React, { useEffect, useState, forwardRef, useRef } from "react";
import "./Modale.css";
import Chevron from "./Chevron";
import Description from "./Description";
import Close from "../assets/svg/close.jsx";
import VideoButton from "./VideoButton.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import { CSSTransition } from "react-transition-group";

const Modale = forwardRef(({ project, closeModal }, ref) => {
  const videoPlayerRef = useRef(null);
  //Detect when top of Scroll then change chevrons direction
  useEffect(() => {
    const el = document.querySelector(".description");
    const limitscroll = () => {
      const limitpx = document.body.clientWidth < 850 ? 250 : 400;
      if (el.scrollTop > limitpx) {
        document.querySelector(".chevron").classList.add("chevronDown");
      } else {
        document.querySelector(".chevron").classList.remove("chevronDown");
      }
    };
    if (el) {
      el.addEventListener("scroll", limitscroll);
    }
    return () => {
      removeEventListener("scroll", limitscroll);
    };
  }, []);
  const [playvideo, setPlayvideo] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState("");

  const handleChevronClick = () => {
    const el = document.querySelector(".description");
    const chevron = document.querySelector(".chevron");
    if (el && chevron) {
      // If chevron is pointing down, scroll to top; if pointing right, scroll to max
      if (chevron.classList.contains("chevronDown")) {
        el.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        el.scrollTo({
          top: el.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="modale" ref={ref}>
      <img src={project.img ? project.img : project.gif} alt="img" />
      <div className="description">
        <div>
          <div className="closeModal" onClick={closeModal}>
            <Close size={35} />
          </div>
          <div className="chevron-container">
            <Chevron className="chevron" onClick={handleChevronClick} />
          </div>
          <div className="descriptionContainer">
            <Description text={project.description} />
          </div>
          <div className="buttons">
            {project.link1 && (
              <a href={project.link1} target="_blank" className="button-link">
                {project.button1}
              </a>
            )}

            {project.link2 && (
              <a href={project.link2} target="_blank" className="button-link">
                {project.button2}
              </a>
            )}
            {project.buttonvideo && (
              <VideoButton
                buttonvideo={project.buttonvideo}
                setPlayvideo={setPlayvideo}
                setCurrentVideoLink={setCurrentVideoLink}
                linkvideo={project.linkvideo}
              />
            )}
            {project.buttonvideo2 && (
              <VideoButton
                buttonvideo={project.buttonvideo2}
                setPlayvideo={setPlayvideo}
                setCurrentVideoLink={setCurrentVideoLink}
                linkvideo={project.linkvideo2}
              />
            )}
          </div>

          <CSSTransition
            in={playvideo}
            timeout={300} // Duration of the animation
            classNames="videoanim"
            unmountOnExit // Unmount the component after animation
            nodeRef={videoPlayerRef}
          >
            <VideoPlayer
              ref={videoPlayerRef}
              setPlayvideo={setPlayvideo}
              linkvideo={currentVideoLink}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
});

Modale.displayName = "Modale";

export default Modale;

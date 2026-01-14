import React, { useEffect, forwardRef, useRef } from "react";
import "./Modale.css";
import Chevron from "./Chevron";
import Description from "./Description";
import Close from "../assets/svg/close.jsx";
import VideoButton from "./VideoButton.jsx";
import { CSSTransition } from "react-transition-group";

const Modale = forwardRef(
  (
    { project, closeModal, setPlayvideo, setCurrentVideoLink, firstTime },
    ref
  ) => {
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
              <Chevron
                className="chevron"
                onClick={handleChevronClick}
                color="#b0b0b0"
              />
              {firstTime && (
                <span className="chevron-hint">cliquer pour tout lire</span>
              )}
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
          </div>
        </div>
      </div>
    );
  }
);

Modale.displayName = "Modale";

// Wrapper component that includes CSSTransition
const ModaleWithTransition = ({
  isOpen,
  project,
  closeModal,
  pos,
  setPlayvideo,
  setCurrentVideoLink,
  firstTime,
}) => {
  const modaleRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={1100}
      classNames={`slide${pos}`}
      unmountOnExit
      nodeRef={modaleRef}
    >
      <Modale
        ref={modaleRef}
        project={project}
        closeModal={closeModal}
        setPlayvideo={setPlayvideo}
        setCurrentVideoLink={setCurrentVideoLink}
        firstTime={firstTime}
      />
    </CSSTransition>
  );
};

export default ModaleWithTransition;

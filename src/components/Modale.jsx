import React, { useEffect, forwardRef, useRef, useState } from "react";
import "./Modale.css";
import Description from "./Description";
import CloseButton from "./CloseButton.jsx";
import VideoButton from "./VideoButton.jsx";
import { CSSTransition } from "react-transition-group";
import { modalConfig } from "../config.js";

const Modale = forwardRef(
  (
    { project, closeModal, setPlayvideo, setCurrentVideoLink, calculatedSize, currentCardSet },
    ref
  ) => {
    const [arrowDirection, setArrowDirection] = useState("up");

    // Auto-scroll description for home cards
    useEffect(() => {
      if (currentCardSet === "home") {
        const timeoutId = setTimeout(() => {
          handleButtonClick();
        }, modalConfig.autoScrollDelay);

        return () => clearTimeout(timeoutId);
      }
    }, [currentCardSet]);

    //Detect when top of Scroll then change arrow direction
    useEffect(() => {
      const el = document.querySelector(".description");
      const limitscroll = () => {
        // Calculate scroll threshold: projectscontenair height minus description starting point minus offset buffer
        // projectscontenair is 3 rows * calculatedSize
        // description starts at (100 - modalConfig.descriptionStartingPoint)% from top
        const scrollThresholdBeforeClose =
          3 *
            calculatedSize *
            ((100 - modalConfig.descriptionStartingPoint) / 100) -
          modalConfig.arrowDirectionChangeOffset;
        console.log(
          "scrollThresholdBeforeClose",
          scrollThresholdBeforeClose,
          el.scrollTop
        );

        if (el.scrollTop > scrollThresholdBeforeClose) {
          setArrowDirection("left");
        } else {
          setArrowDirection("up");
        }
      };
      if (el) {
        el.addEventListener("scroll", limitscroll);
      }
      return () => {
        if (el) {
          el.removeEventListener("scroll", limitscroll);
        }
      };
    }, [calculatedSize]);

    const handleButtonClick = () => {
      const el = document.querySelector(".description");
      if (el) {
        // If arrow is pointing up, scroll to top; if pointing down, scroll to max
        if (arrowDirection === "up") {
          el.scrollTo({
            top: el.scrollHeight,
            behavior: "smooth",
          });
        } else {
          closeModal();
        }
      }
    };

    return (
      <div className="modale" ref={ref}>
        <img src={project.img ? project.img : project.gif} alt="img" />
        <div className="description">
          <div
            style={{
              marginTop: `${100 - modalConfig.descriptionStartingPoint}%`,
            }}
          >
            <div className="scroll-button-container">
              <div style={{ marginTop: "8px" }}>
                <CloseButton
                  size={20}
                  onClick={handleButtonClick}
                  direction={arrowDirection}
                  absolute={false}
                />
              </div>
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
  calculatedSize,
  currentCardSet,
  // firstTime,
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
        calculatedSize={calculatedSize}
        currentCardSet={currentCardSet}
        // firstTime={firstTime}
      />
    </CSSTransition>
  );
};

export default ModaleWithTransition;

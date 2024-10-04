import React, { useEffect, useState } from "react";
import Chevron from "./Chevron";
import Description from "./Description";
import Close from "../assets/svg/close.jsx";
import VideoButton from "./VideoButton.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import { CSSTransition } from "react-transition-group";

const Modale = ({ project, closeModal, pos }) => {
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

  return (
    <div className="modale">
      {/* <div className="modale" style={{ animationName: `slide${pos}` }}> */}
      <img src={project.img ? project.img : project.gif} alt="img" />
      <div className="description">
        <div>
          <span>Scroll</span>
          <div className="closeModal" onClick={closeModal}>
            <Close size={35} />
          </div>
          <Chevron className="chevron" />
          <div>
            <Description text={project.description} />
          </div>
          <div className="buttons">
            {project.link1 && (
              <a href={project.link1} target="_blank">
                {project.button1}
              </a>
            )}

            {project.link2 && (
              <a href={project.link2} target="_blank">
                {project.button2}
              </a>
            )}
            {project.buttonvideo && (
              <VideoButton
                buttonvideo={project.buttonvideo}
                setPlayvideo={setPlayvideo}
              />
            )}
            {project.buttonvideo2 && (
              <VideoButton
                buttonvideo={project.buttonvideo2}
                setPlayvideo={setPlayvideo}
              />
            )}
          </div>

          <CSSTransition
            in={playvideo}
            timeout={300} // Duration of the animation
            classNames="videoanim"
            unmountOnExit // Unmount the component after animation
          >
            <VideoPlayer
              setPlayvideo={setPlayvideo}
              linkvideo={project.linkvideo}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
export default Modale;

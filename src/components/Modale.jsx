import React, { useEffect } from "react";
import Chevron from "./Chevron";
import Description from "./Description";

const Modale = ({ project }) => {
  useEffect(() => {
    const el = document.querySelector(".description");
    if (el) {
      // console.log("yes");
      // console.log(el.scrollTop)
      el.addEventListener("scroll", () => {
        console.log(el.scrollTop);
        if (el.scrollTop > 445) {
          document.querySelector(".chevron").classList.add("chevronDown");
        } else {
          document.querySelector(".chevron").classList.remove("chevronDown");
        }
      });
    }
    return () => {
      console.log("bye");
    };
  }, []);
  //Detect when top of Scroll then change chevrons direction

  return (
    <div className="modale">
      {/* this div to set a background gradient */}
      <img src={project.img ? project.img : project.gif} alt="img" />
      <div className="description">
        <div>
          <span>Scroll</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modale;

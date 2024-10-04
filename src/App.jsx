import React, { useState, useEffect } from "react";

import "./App.css";
import "./animations/anims.css";
import Project from "./components/Project.jsx";
import cartes from "./Cartes.jsx";
import sortProjects from "./components/SortLetters.jsx";
import Modale from "./components/Modale";
import Dice from "./components/Dice/Dice.jsx";
import { CSSTransition } from "react-transition-group";

function App() {
  // const wordsList = [
  //   "web apps",
  //   "mobile",
  //   "code",
  //   "no code",
  //   "pierre",
  //   "malleret",
  // ];
  const wordsList = [
    "bienvenue",
    "sur le",
    "portfolio",
    "de",
    "pierre",
    "malleret",
    "applis",
    "web",
    "mobile",
    "code",
    "no code",
  ];

  // DECOUVREZ AU FIL DE CES CARTES MES SAVOIR FAIRE, MES PROJETS REALISES, AINSI QUE LES TECHNOLOGIES QUE JE MAITRISE, DU DEVELOPEMENT WEB AUX CMS EN PASSANT PAR LE NO CODE

  const [hovercart, setHoverCart] = useState(null);
  const [wordNum, setWordNum] = useState(-1);
  const [projetsList, setProjectList] = useState(
    JSON.parse(JSON.stringify(cartes))
  );
  const [modaleNum, setModaleNum] = useState([0, 0]);
  const [openModal, setOpenModal] = useState(false);
  const [showTryThis, setShowTryThis] = useState(true);

  const closeModal = () => {
    const el = document.querySelector(".description");
    el.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setOpenModal(false);
  };

  //pick the next word from the list and reorganize the projecList with new order and new bigletters
  const pickAWord = () => {
    //pick next word or first one if end of list
    let num = wordNum;
    if (num === wordsList.length - 1) {
      num = 0;
    } else {
      num++;
    }
    setWordNum(num);

    // Change the list according to the new picked word
    setProjectList(sortProjects(wordsList[num], projetsList));
    if (showTryThis) {
      setShowTryThis(false);
    }
  };

  //and use it with first word of the list at landing
  useEffect(() => {
    pickAWord(wordNum);
    setTimeout(() => {
      setShowTryThis(true);
    }, 200);
  }, []);

  return (
    <div className="app" onClick={closeModal}>
      <div className="header">PIERRE MALLERET</div>
      <div className="subtitle">
        <span>DÉVELOPPEUR WEB</span>
      </div>
      <div className="dice">
        {showTryThis && (
          <div className="trythis">
            <span>Cliquez!</span> <div>{`>`}</div> <div>{`>`}</div>{" "}
            <div>{`>`}</div>
          </div>
        )}
        <div
          onClick={() => {
            pickAWord();
          }}
        >
          <Dice word={wordsList[wordNum]} />
        </div>
        {showTryThis && <div className="trythis"></div>}
      </div>
      <div
        className="gridprojects"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <CSSTransition
          in={openModal}
          timeout={1100} // Duration of the animation
          classNames={`slide${modaleNum[1]}`} // Prefix for class names
          unmountOnExit // Unmounts the component after the animation
        >
          <Modale
            project={cartes[modaleNum[0]]}
            closeModal={closeModal}
            pos={modaleNum[1]}
          />
        </CSSTransition>

        <div className="projectscontenair">
          {/* We Map according to the previous ProjecList so the positions don't change instantly
        Positions will then progressively translate to new ProjectList because we give them classes according to the new projectList order*/}
          {cartes.map((projet, index) => {
            //Search position of the current project in the new Array Projectlist and set it to the class.
            const pos = projetsList.findIndex((p) => p.id === projet.id);
            const size = window.innerWidth > 850 ? 170 : 115;
            const bigLetter = projetsList[pos].bigletter;
            const row = Math.floor(pos / 3);
            const col = pos % 3;
            return (
              <div
                key={projet.title}
                className="project"
                style={{
                  top: `${row * size}px`,
                  left: `${col * size}px`,
                }}
              >
                <Project
                  gif={projet.gif}
                  description={projet.description}
                  title={projet.title}
                  color={projet.color}
                  link={projet.link}
                  show={hovercart === index}
                  hoverMe={() => {
                    setHoverCart(index);
                  }}
                  hoverOff={() => {
                    setHoverCart(null);
                  }}
                  index={index}
                  bigletter={bigLetter}
                  openModale={() => {
                    setOpenModal(true);
                    setModaleNum([index, pos]);
                  }}
                />
              </div>
            );
          })}
        </div>
        {/* end of gridProject */}
      </div>
      <p className="footer"> &#169; Pierre Malleret 2024</p>
      {/* end of App */}
    </div>
  );
}

export default App;

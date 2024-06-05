import React, { useState, useEffect } from "react";

import "./App.css";
import Project from "./components/Project.jsx";
import cartes from "./Cartes.jsx";
import sortProjects from "./components/SortLetters.jsx";
import Modale from "./components/Modale";
import Dice from "./components/Dice/Dice.jsx";

function App() {
  // const wordsList = [
  //   "fullstack",
  //   "malleret",
  //   "react",
  //   "algorithm",
  //   "pierre",
  //   "frontend",
  //   "html",
  //   "node.js",
  //   "backend",
  //   "mongo.db",
  //   "express",
  //   "algorithm",
  //   "git",
  //   "github",
  // ];
  const wordsList = [
    "bienvenue",
    "sur   le",
    "portfolio",
    "de    dev",
    "de pierre",
    "malleret",
    "je sais",
    "faire des",
    "apps  et",
    "web   apps",
    "design",
    "creatif",
    "responsiv",
    "react",
    "javascript",
    "contacte",
    "moi !",
  ];
  const [carts, setCarts] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [wordNum, setWordNum] = useState(-1);
  const [justLanded, setJustLanded] = useState(true);
  const [projetsList, setProjectList] = useState(cartes);
  const [prevProjList, setPrevProjList] = useState(cartes);
  const [modaleNum, setModaleNum] = useState(null);
  const [showTryThis, setShowTryThis] = useState(true);

  //pick the next word from the list and reorganize the projecList with new order and new bigletters
  const pickAWord = () => {
    //first save previous project list
    setPrevProjList(projetsList);

    //pick next word or first one if end of list
    let num = wordNum;
    if (num === wordsList.length - 1) {
      num = 0;
    } else {
      num++;
    }
    setWordNum(num);

    // Change the list according to the new picked word
    setProjectList(sortProjects(wordsList[num], cartes));
    if (showTryThis) {
      setShowTryThis(false);
    }
  };

  //and use it with first word of the list at landing
  useEffect(() => {
    pickAWord(wordNum);
    setTimeout(() => {
      setJustLanded(false);
      setShowTryThis(true);
    }, 200);
  }, []);

  //open one card. set all other card state to false
  const setACart = (num) => {
    const newValue = !carts[num];
    let arr = [];
    for (let i = 0; i < 9; i++) {
      if (i === num) {
        arr.push(newValue);
      } else arr.push(false);
    }
    setCarts(arr);
  };

  // Search the position of a cart in the sorted project List. to be used in the map where we need to set previous positions
  const search = (id) => {
    for (let i = 0; i < 9; i++) {
      if (id === projetsList[i].id) {
        return i;
      }
    }
  };
  /* # # # # # # APP # # # # # # # # # # # # # # # # # # # # # # # # # # */

  return (
    <div
      className="app"
      onClick={() => {
        setModaleNum(null);
      }}
    >
      <div className="header">PIERRE MALLERET</div>
      <div className="subtitle">
        <span>PROJETS CHOISIS</span>
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
        {/* MODAL TO WATCH ONE */}
        {modaleNum !== null && <Modale project={projetsList[modaleNum]} />}

        <div className="projectscontenair">
          {/* We Map according to the previous ProjecList so the positions don't change instantly
        Positions will then progressively translate to new ProjectList because we give them classes according to the new projectList order*/}
          {prevProjList.map((projet, index) => {
            //Search position of the current project in the new Array Projectlist and set it to the class.
            const pos = search(projet.id);
            // const currProj = prevProjList[pos];
            return (
              <div
                key={index}
                className={
                  !justLanded
                    ? "project projectPos" + pos
                    : "project projectPos1"
                }
              >
                <Project
                  gif={projet.gif}
                  description={projet.description}
                  title={projet.title}
                  color={projet.color}
                  link={projet.link}
                  show={carts[index]}
                  setCarts={() => {
                    setACart(index);
                  }}
                  bigletter={projet.bigletter}
                  openModale={() => {
                    setModaleNum(pos);
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

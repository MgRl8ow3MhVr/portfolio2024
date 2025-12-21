import React, { useState, useMemo } from "react";

import "./App.css";
import "./animations/anims.css";
import "./components/Header.css";
import "./components/Footer.css";
import "./components/DiceContainer.css";
import Project from "./components/Project.jsx";
import cartes from "./Cartes.jsx";
import CartesPortfolio from "./CartesPortfolio.jsx";
import Modale from "./components/Modale";
import Dice from "./components/Dice/Dice.jsx";
import { CSSTransition } from "react-transition-group";

function App() {
  const [hovercart, setHoverCart] = useState(null);
  const [checkedCarts, setCheckedCarts] = useState([]);
  const [modaleNum, setModaleNum] = useState([0, 0]);
  const [openModal, setOpenModal] = useState(false);

  // Portfolio navigation states
  const [isGathering, setIsGathering] = useState(false);
  const [gatherToCenter, setGatherToCenter] = useState(false);
  const [currentCardSet, setCurrentCardSet] = useState("home");
  const [activeCartes, setActiveCartes] = useState(cartes);
  const [clickedCardIndex, setClickedCardIndex] = useState(null);

  // Generate stable random delays for each card transition
  const cardDelays = useMemo(() => {
    return activeCartes.map((_, index) => {
      // Clicked card gets 0 delay, others get random delay
      if (index === clickedCardIndex) return "0ms";
      return Math.floor(Math.random() * 120) + 10 + "ms";
    });
  }, [activeCartes, clickedCardIndex]);

  const closeModal = () => {
    if (!openModal) return null;
    const el = document.querySelector(".description");
    el.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      const checkedCp = [...checkedCarts];

      checkedCp.push(modaleNum[0]);
      setCheckedCarts(checkedCp);
    }, 1100);

    setOpenModal(false);
  };

  // Handle card navigation with gather/spread animation
  const handleCardSetSwitch = (newCartes, newCardSet) => {
    if (isGathering) return; // Prevent clicks during animation

    // Close modal if open
    if (openModal) {
      setOpenModal(false);
    }

    // Start gathering animation
    setIsGathering(true);
    setGatherToCenter(true);

    // After 850ms (wait for gather animation to complete), swap cards
    setTimeout(() => {
      setActiveCartes(newCartes);
      setCurrentCardSet(newCardSet);
      // Keep gathered for a brief moment before spreading
      setTimeout(() => {
        setGatherToCenter(false);
      }, 50);
    }, 750);

    // After 1700ms (animation complete), re-enable interactions
    setTimeout(() => {
      setIsGathering(false);
    }, 1700);
  };

  const handlePortfolioClick = () =>
    handleCardSetSwitch(CartesPortfolio, "portfolio");
  const handleHomeClick = () => handleCardSetSwitch(cartes, "home");

  return (
    <div className="app" onClick={closeModal}>
      <div className="header">PIERRE MALLERET</div>
      <div className="subtitle">
        <span>DÉVELOPPEUR WEB</span>
      </div>
      <div className="dice">
        <div>
          <Dice word={"TOTOTO"} isGathering={isGathering} />
        </div>
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
            project={activeCartes[modaleNum[0]]}
            closeModal={closeModal}
            pos={modaleNum[1]}
          />
        </CSSTransition>

        <div
          className="projectscontenair"
          style={{
            pointerEvents: isGathering ? "none" : "auto",
          }}
        >
          {/* We Map according to the previous ProjecList so the positions don't change instantly
        Positions will then progressively translate to new ProjectList because we give them classes according to the new projectList order*/}
          {(() => {
            // Calculate size once for all cards to prevent layout thrashing
            const size = window.innerWidth > 850 ? 170 : 115;
            const centerPos = size; // Center is at position 1,1

            return activeCartes.map((projet, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;

              return (
                <div
                  key={projet.title}
                  className="project"
                  style={{
                    top: gatherToCenter ? `${centerPos}px` : `${row * size}px`,
                    left: gatherToCenter ? `${centerPos}px` : `${col * size}px`,
                    transitionDelay: cardDelays[index],
                    zIndex: index === clickedCardIndex ? 10 : 1,
                  }}
                >
                  <Project
                    checked={checkedCarts.includes(index)}
                    gif={projet.gif}
                    description={projet.description}
                    title={projet.title}
                    color={projet.color}
                    link={projet.link}
                    show={hovercart === index}
                    isGathering={gatherToCenter && index !== clickedCardIndex}
                    hoverMe={() => {
                      setHoverCart(index);
                    }}
                    hoverOff={() => {
                      setHoverCart(null);
                    }}
                    index={index}
                    openModale={() => {
                      // Check if this is Portfolio card
                      if (projet.id === 8 && currentCardSet === "home") {
                        setClickedCardIndex(index);
                        handlePortfolioClick();
                      }
                      // Check if this is Home card
                      else if (
                        projet.id === 10 &&
                        currentCardSet === "portfolio"
                      ) {
                        setClickedCardIndex(index);
                        handleHomeClick();
                      } else {
                        setOpenModal(true);
                        setModaleNum([index, index]);
                      }
                    }}
                  />
                </div>
              );
            });
          })()}
        </div>
        {/* end of gridProject */}
      </div>
      <p className="footer"> &#169; Pierre Malleret 2026</p>
      {/* end of App */}
    </div>
  );
}

export default App;

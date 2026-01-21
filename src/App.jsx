import { useState, useMemo, useEffect } from "react";
import {
  handleCardSetSwitch,
  handleDiceClick,
  generateCardDelays,
  generateCardAppearDelays,
} from "./utils/appUtils.js";
import {
  initializeCSSColorVariables,
  updateCardBackgroundColor,
} from "./utils/cssVariables.js";

import "./App.css";
import "./animations/anims.css";
import "./components/Header.css";
import "./components/Footer.css";
import Project from "./components/Project.jsx";
import cartesHome from "./data/CartesHome.jsx";
import CartesPortfolio from "./data/CartesPortfolio.jsx";
import Modale from "./components/Modale";
import Dice from "./components/Dice/Dice.jsx";
import Header from "./components/Header.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";
import DarkOverlay from "./components/DarkOverlay.jsx";
import {
  portraitSizeRatio,
  landscapeSizeRatio,
  closeToSquareThreshold,
  closeToSquareRatio,
  layoutConfig,
  colors,
} from "./config.js";

function App() {
  const [hovercart, setHoverCart] = useState(null);
  const [checkedCartsHome, setCheckedCartsHome] = useState([]);
  const [checkedCartsPortfolio, setCheckedCartsPortfolio] = useState([]);
  const [modaleNum, setModaleNum] = useState([0, 0]);
  const [openModal, setOpenModal] = useState(false);

  // Video player states
  const [playvideo, setPlayvideo] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState("");

  // Portfolio navigation states
  const [isGathering, setIsGathering] = useState(false);
  const [gatherToCenter, setGatherToCenter] = useState(false);
  const [currentCardSet, setCurrentCardSet] = useState("home");
  const [activeCartes, setActiveCartes] = useState(cartesHome);
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Dice lottery animation
  const [isRolling, setIsRolling] = useState(false);
  const [highlightedCard, setHighlightedCard] = useState(null);

  // Initialize CSS color variables from config on mount
  useEffect(() => {
    initializeCSSColorVariables();
  }, []);

  // Update card background color when card set changes
  useEffect(() => {
    updateCardBackgroundColor(currentCardSet);
  }, [currentCardSet]);

  // Generate stable random delays for each card transition
  const cardDelays = useMemo(
    () => generateCardDelays(activeCartes.length, clickedCardIndex),
    [activeCartes.length, clickedCardIndex],
  );

  // Generate linear appearance delays for initial load
  const cardAppearDelays = useMemo(
    () => generateCardAppearDelays(activeCartes.length),
    [activeCartes.length],
  );

  const closeModal = () => {
    if (!openModal) return null;
    const el = document.querySelector(".description");
    el.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      if (currentCardSet === "home") {
        const checkedCp = [...checkedCartsHome];
        checkedCp.push(modaleNum[0]);
        setCheckedCartsHome(checkedCp);
      } else {
        const checkedCp = [...checkedCartsPortfolio];
        checkedCp.push(modaleNum[0]);
        setCheckedCartsPortfolio(checkedCp);
      }
    }, 1100);

    setOpenModal(false);
  };

  // Handle card navigation with gather/spread animation
  const onCardSetSwitch = (newCartes, newCardSet) => {
    handleCardSetSwitch(newCartes, newCardSet, {
      isGathering,
      openModal,
      isInitialLoad,
      setOpenModal,
      setIsInitialLoad,
      setIsGathering,
      setGatherToCenter,
      setActiveCartes,
      setCurrentCardSet,
    });
  };

  // Handle dice click - lottery animation
  const onDiceClick = () =>
    handleDiceClick({
      isRolling,
      isGathering,
      openModal,
      currentCardSet,
      checkedCartsHome,
      checkedCartsPortfolio,
      activeCartes,
      setIsRolling,
      setHighlightedCard,
      setOpenModal,
      setModaleNum,
    });

  // Calculate size for CSS variable
  const isPortrait = window.innerHeight > window.innerWidth;

  // Check if screen is close to square (aspect ratio near 1:1)
  const aspectRatio = window.innerHeight / window.innerWidth;
  const isCloseToSquare = Math.abs(aspectRatio - 1) < closeToSquareThreshold;
  // Use closeToSquareRatio if screen is nearly square, otherwise use normal ratios
  const sizeRatio = isCloseToSquare
    ? closeToSquareRatio
    : isPortrait
      ? portraitSizeRatio
      : landscapeSizeRatio;

  const calculatedSize = isPortrait
    ? window.innerWidth * sizeRatio
    : window.innerHeight * sizeRatio;
  return (
    <div
      className="app"
      onClick={closeModal}
      style={{
        "--sizeProject": `${calculatedSize}px`,
        "--transTime": `${layoutConfig.transitionTime}s`,
        flexDirection: isPortrait ? "column" : "row",
      }}
    >
      <div
        className="titlesContainer"
        style={{
          flex: isPortrait
            ? layoutConfig.titlesContainerFlexPortrait
            : layoutConfig.titlesContainerFlex,
        }}
      >
        <Header
          currentCardSet={currentCardSet}
          gatherToCenter={gatherToCenter}
          isInitialLoad={isInitialLoad}
        />
        <Dice
          titles={activeCartes.map((carte) => carte.title)}
          isGathering={isRolling || isGathering}
          onClick={onDiceClick}
          isInitialLoad={isInitialLoad}
        />
      </div>

      <div
        className="gridProjects"
        style={{
          flex: isPortrait
            ? layoutConfig.gridProjectsFlexPortrait
            : layoutConfig.gridProjectsFlex,
        }}
      >
        <div
          className="projectscontenair"
          onClick={(event) => {
            event.stopPropagation();
          }}
          style={{
            pointerEvents: isGathering ? "none" : "auto",
          }}
        >
          <Modale
            isOpen={openModal}
            project={activeCartes[modaleNum[0]]}
            closeModal={closeModal}
            pos={modaleNum[1]}
            setPlayvideo={setPlayvideo}
            setCurrentVideoLink={setCurrentVideoLink}
            calculatedSize={calculatedSize}
            currentCardSet={currentCardSet}
            onPortfolioClick={() => {
              closeModal();
              setTimeout(() => {
                onCardSetSwitch(CartesPortfolio, "portfolio");
              }, 750);
            }}
          />
          {(() => {
            const centerPos = calculatedSize; // Center is at position 1,1

            return activeCartes.map((projet, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;

              // Get checked state based on current card set
              const checkedCarts =
                currentCardSet === "home"
                  ? checkedCartsHome
                  : checkedCartsPortfolio;

              const isHighlighted = highlightedCard === index;

              return (
                <div
                  key={projet.id}
                  className="project"
                  style={{
                    top: gatherToCenter
                      ? `${centerPos}px`
                      : `${row * calculatedSize}px`,
                    left: gatherToCenter
                      ? `${centerPos}px`
                      : `${col * calculatedSize}px`,
                    transitionDelay: isGathering ? cardDelays[index] : "0ms",
                    zIndex: index === clickedCardIndex ? 10 : 1,
                    boxShadow: isHighlighted
                      ? `0 0 12.5px 4px ${colors.ui.tan}cc`
                      : "none",
                    transform: isHighlighted ? "scale(1.05)" : "scale(1)",
                    animation: isInitialLoad
                      ? `appear 0.2s ease-in ${cardAppearDelays[index]}s both`
                      : "none",
                  }}
                >
                  <Project
                    project={projet}
                    checked={checkedCarts.includes(index)}
                    checkColor={colors.ui.green}
                    currentCardSet={currentCardSet}
                    show={hovercart === index}
                    isGathering={gatherToCenter && index !== clickedCardIndex}
                    size={calculatedSize}
                    hoverMe={() => {
                      setHoverCart(index);
                    }}
                    hoverOff={() => {
                      setHoverCart(null);
                    }}
                    openModale={() => {
                      // Check if this card navigates to portfolio
                      if (projet.goToPortfolio) {
                        setClickedCardIndex(index);
                        onCardSetSwitch(CartesPortfolio, "portfolio");
                      }
                      // Check if this card navigates back to home
                      else if (projet.backToHome) {
                        setClickedCardIndex(index);
                        onCardSetSwitch(cartesHome, "home");
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
        <p className="footer"> &#169; Pierre Malleret 2026</p>
      </div>

      <DarkOverlay isOpen={playvideo} />

      <VideoPlayer
        isOpen={playvideo}
        setPlayvideo={setPlayvideo}
        linkvideo={currentVideoLink}
      />
    </div>
  );
}

export default App;

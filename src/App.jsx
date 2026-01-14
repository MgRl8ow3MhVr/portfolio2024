import { useState, useMemo } from "react";

import "./App.css";
import "./animations/anims.css";
import "./components/Header.css";
import "./components/Footer.css";
import "./components/DiceContainer.css";
import Project from "./components/Project.jsx";
import cartesHome from "./data/CartesHome.jsx";
import CartesPortfolio from "./data/CartesPortfolio.jsx";
import Modale from "./components/Modale";
import Dice from "./components/Dice/Dice.jsx";
import Header from "./components/Header.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";
import {
  homeCheckColor,
  portfolioCheckColor,
  portraitSizeRatio,
  landscapeSizeRatio,
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
  // const [currentCardSet, setCurrentCardSet] = useState("portfolio");
  // const [activeCartes, setActiveCartes] = useState(CartesPortfolio);
  const [currentCardSet, setCurrentCardSet] = useState("home");
  const [activeCartes, setActiveCartes] = useState(cartesHome);
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Dice lottery animation
  const [isRolling, setIsRolling] = useState(false);
  const [highlightedCard, setHighlightedCard] = useState(null);

  // Generate stable random delays for each card transition
  const cardDelays = useMemo(() => {
    return activeCartes.map((_, index) => {
      // Clicked card gets 0 delay, others get random delay
      if (index === clickedCardIndex) return "0ms";
      return Math.floor(Math.random() * 120) + 10 + "ms";
    });
  }, [activeCartes, clickedCardIndex]);

  // Generate linear appearance delays for initial load
  const cardAppearDelays = useMemo(() => {
    return activeCartes.map((_, index) => {
      return 0.8 + index * 0.08; // Linear delay: 0.8s, 0.88s, 0.96s, etc. (80ms increments)
    });
  }, [activeCartes.length]);

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
  const handleCardSetSwitch = (newCartes, newCardSet) => {
    if (isGathering) return; // Prevent clicks during animation

    // Close modal if open
    if (openModal) {
      setOpenModal(false);
    }

    // Disable initial load animations after first navigation
    if (isInitialLoad) {
      setIsInitialLoad(false);
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
  const handleHomeClick = () => handleCardSetSwitch(cartesHome, "home");

  // Handle dice click - lottery animation
  const handleDiceClick = () => {
    if (isRolling || isGathering || openModal) return;

    // Get unchecked cards (exclude Portfolio/Retour navigation cards)
    const checkedCarts =
      currentCardSet === "home" ? checkedCartsHome : checkedCartsPortfolio;
    const uncheckedCards = activeCartes
      .map((carte, index) => ({ carte, index }))
      .filter(
        ({ carte, index }) =>
          !checkedCarts.includes(index) &&
          carte.id !== 8 && // Exclude Portfolio card
          carte.id !== 10 // Exclude Retour card
      );

    if (uncheckedCards.length === 0) return; // No cards to select

    setIsRolling(true);

    // Create decelerating highlight sequence
    const totalDuration = 2000; // 2 seconds total
    const highlights = [];
    let elapsed = 0;
    let delay = 50; // Start with 50ms between highlights
    const deceleration = 1.15; // Multiply delay by this factor each step

    // Build the sequence with decelerating intervals
    while (elapsed < totalDuration - 200) {
      // Leave 200ms for final selection
      const randomCard =
        uncheckedCards[Math.floor(Math.random() * uncheckedCards.length)];
      highlights.push({ cardIndex: randomCard.index, time: elapsed });
      elapsed += delay;
      delay *= deceleration;
    }

    // Final selected card
    const finalCard =
      uncheckedCards[Math.floor(Math.random() * uncheckedCards.length)];
    highlights.push({ cardIndex: finalCard.index, time: totalDuration - 200 });

    // Execute the highlight sequence
    highlights.forEach(({ cardIndex, time }) => {
      setTimeout(() => {
        setHighlightedCard(cardIndex);
      }, time);
    });

    // Open the final card after 2 seconds
    setTimeout(() => {
      setHighlightedCard(null);
      setIsRolling(false);
      setOpenModal(true);
      setModaleNum([finalCard.index, finalCard.index]);
    }, totalDuration);
  };

  // Calculate size for CSS variable
  const isPortrait = window.innerHeight > window.innerWidth;
  const calculatedSize = isPortrait
    ? window.innerWidth * portraitSizeRatio
    : window.innerHeight * landscapeSizeRatio;

  return (
    <div
      className="app"
      onClick={closeModal}
      style={{ "--sizeProject": `${calculatedSize}px` }}
    >
      <Header
        currentCardSet={currentCardSet}
        gatherToCenter={gatherToCenter}
        isInitialLoad={isInitialLoad}
        handleHomeClick={handleHomeClick}
        playvideo={playvideo}
        setPlayvideo={setPlayvideo}
      />
      <Dice
        titles={activeCartes.map((carte) => carte.title)}
        isGathering={isRolling || isGathering}
        onClick={handleDiceClick}
        isInitialLoad={isInitialLoad}
      />
      <div
        className="gridprojects"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Modale
          isOpen={openModal}
          project={activeCartes[modaleNum[0]]}
          closeModal={closeModal}
          pos={modaleNum[1]}
          setPlayvideo={setPlayvideo}
          setCurrentVideoLink={setCurrentVideoLink}
          firstTime={checkedCartsHome.length === 0 && checkedCartsPortfolio.length === 0}
        />

        <div
          className="projectscontenair"
          style={{
            pointerEvents: isGathering ? "none" : "auto",
          }}
        >
          {(() => {
            // Calculate size once for all cards to prevent layout thrashing
            const isPortrait = window.innerHeight > window.innerWidth;
            const size = isPortrait
              ? window.innerWidth * portraitSizeRatio
              : window.innerHeight * landscapeSizeRatio;
            const centerPos = size; // Center is at position 1,1

            return activeCartes.map((projet, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;

              // Get checked state and color based on current card set
              const checkedCarts =
                currentCardSet === "home"
                  ? checkedCartsHome
                  : checkedCartsPortfolio;
              const checkColor =
                currentCardSet === "home"
                  ? homeCheckColor
                  : portfolioCheckColor;

              const isHighlighted = highlightedCard === index;

              return (
                <div
                  key={projet.title}
                  className="project"
                  style={{
                    top: gatherToCenter ? `${centerPos}px` : `${row * size}px`,
                    left: gatherToCenter ? `${centerPos}px` : `${col * size}px`,
                    transitionDelay: isGathering ? cardDelays[index] : "0ms",
                    zIndex: index === clickedCardIndex ? 10 : 1,
                    boxShadow: isHighlighted
                      ? "0 0 12.5px 4px rgba(216, 180, 160, 0.8)"
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
                    checkColor={checkColor}
                    show={hovercart === index}
                    isGathering={gatherToCenter && index !== clickedCardIndex}
                    size={size}
                    hoverMe={() => {
                      setHoverCart(index);
                    }}
                    hoverOff={() => {
                      setHoverCart(null);
                    }}
                    index={index}
                    openModale={() => {
                      // Check if this card navigates to portfolio
                      if (projet.goToPortfolio) {
                        setClickedCardIndex(index);
                        handlePortfolioClick();
                      }
                      // Check if this card navigates back to home
                      else if (projet.backToHome) {
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

      <VideoPlayer
        isOpen={playvideo}
        setPlayvideo={setPlayvideo}
        linkvideo={currentVideoLink}
      />

      {/* end of App */}
    </div>
  );
}

export default App;

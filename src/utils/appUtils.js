/**
 * Generate stable random delays for each card transition
 * Clicked card gets 0 delay, others get random delays
 */
export const generateCardDelays = (cardsCount, clickedCardIndex) => {
  return Array.from({ length: cardsCount }, (_, index) => {
    // Clicked card gets 0 delay, others get random delay
    if (index === clickedCardIndex) return "0ms";
    return Math.floor(Math.random() * 120) + 10 + "ms";
  });
};

/**
 * Generate linear appearance delays for initial load animation
 * Returns delays in seconds: 0.8s, 0.88s, 0.96s, etc. (80ms increments)
 */
export const generateCardAppearDelays = (cardsCount) => {
  return Array.from({ length: cardsCount }, (_, index) => {
    return 0.8 + index * 0.08; // Linear delay: 0.8s, 0.88s, 0.96s, etc.
  });
};

/**
 * Handle switching between card sets (home/portfolio) with animation
 */
export const handleCardSetSwitch = (
  newCartes,
  newCardSet,
  {
    isGathering,
    openModal,
    isInitialLoad,
    setOpenModal,
    setIsInitialLoad,
    setIsGathering,
    setGatherToCenter,
    setActiveCartes,
    setCurrentCardSet,
  }
) => {
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

/**
 * Handle dice click - lottery animation to select random card
 */
export const handleDiceClick = (
  {
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
  }
) => {
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

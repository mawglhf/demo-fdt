const createMissedCards = (allRounds, cards) => {
  const sortMissedCards = () => {
    // Gather all the missed cards arrays from each round and concat them into one array
    const allMissedCards = allRounds.reduce((acc, roundObj) => {
      return acc.concat(roundObj["missedCardsList"]);
    }, []);

    // Count how many times each missed card appears by adding it to an object
    const countedObj = allMissedCards.reduce((obj, currentCard) => {
      if (!obj[currentCard]) {
        obj[currentCard] = 1;
      } else {
        obj[currentCard]++;
      }
      return obj;
    }, {});

    // To sort the object from Most missed to least missed, convert to an array and then sort
    return Object.entries(countedObj).sort((a, b) => {
      return b[1] - a[1];
    });
  };
  const sortedMissedCards = sortMissedCards();

  // For every missed card in the sortedMissedCards array, find it's answer
  const addAnswersToCards = () => {
    const cardsWithAnswers = sortedMissedCards.map(card => {
      cards.forEach(roundCard => {
        if (card[0] === roundCard.notation) {
          card.push(roundCard.answer);
        }
      });
      return card;
    });
    return cardsWithAnswers;
  };

  return addAnswersToCards();
};

export default createMissedCards;

const getRoundCardsList = (choices, correct, cards) => {
  return cards.map((card, i) => {
    return [card.notation, card.answer, choices[i], correct[i].toString()];
  });
};

const getMissedCardsList = cardsList => {
  const missedCardsList = cardsList.filter(card => card[3] === "false");
  return missedCardsList.map(card => card[0]);
};

const createPostRoundData = (roundObj, choices, correct, cards, score) => {
  const postRoundData = Object.assign({}, roundObj);

  const roundCardsList = getRoundCardsList(choices, correct, cards);
  postRoundData["roundCardsList"] = roundCardsList;

  const missedCardsList = getMissedCardsList(roundCardsList);
  postRoundData["missedCardsList"] = missedCardsList;

  postRoundData["score"] = score;
  postRoundData["percent"] = Math.round(score / cards.length * 100);
  postRoundData["date"] = new Date();

  return postRoundData;
};

export default createPostRoundData;

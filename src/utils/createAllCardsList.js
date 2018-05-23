import _ from "lodash";

import allData from "./t7data.json";
import filterMoves from "./filterMoves";

/**
 * Filters charData to return only a list of moves that will be used in the round
 * @param {array} charData
 * @param {string} filterName
 * @returns {array} Array of Objects - List of Filtered Moves
 */

const filterMovelist = (charData, filterName) => {
  return filterMoves(charData, filterName);
};

/**
 * Returns a list of possible choices based on the propName
 * @param {array} charData
 * @param {string}  propertyName
 * @return {array}  Array of Strings - List of Move Properties
 */
const getAllChoices = (charData, propertyName) => {
  return _.shuffle(charData.map(move => move[propertyName]));
};

/**
 * Creates a property on the card object called choices which is an array of strings
 * @param {string}  cardAnswer The property of that card
 * @param {array} allChoices list of move choices
 */
const createCardChoices = (cardAnswer, allChoices) => {
  const choicesArray = [cardAnswer];
  for (let i = 0; choicesArray.length < 4; i += 1) {
    let shuffled = _.shuffle(allChoices);
    if (!choicesArray.includes(shuffled[i])) {
      choicesArray.push(shuffled[i]);
    }
  }
  return _.shuffle(choicesArray);
};

/**
 * Gets the image for the card or sets the cards image to the cards notation in an array
 * (so later functions know if it has an image based on string (yes) or array (no))
 */

const getCardImage = moveObj => {
  if (!moveObj.image) {
    return [moveObj.notation];
  }
  return moveObj.image;
};

/**
 * Creates a list of cards for the round
 * @param {string} character
 * @param {string} filter
 * @param {string} property
 * @returns {array} Array of Objects - Each object is a Card
 * Each Card object has properties .image, .answer, .header, and .choices
 */

const createAllCards = (characterName, filterName, propertyName) => {
  const charData = allData[characterName].data;

  const filteredMoves = filterMovelist(charData, filterName);
  const allChoices = getAllChoices(charData, propertyName);

  const moveToCard = moveObj => {
    const card = Object.assign({}, moveObj);
    card.answer = moveObj[propertyName];
    card.choices = createCardChoices(card.answer, allChoices);
    card.image = getCardImage(moveObj);
    return card;
  };

  const createCardsList = filteredMoves => {
    return filteredMoves.map(moveObj => moveToCard(moveObj));
  };

  return createCardsList(filteredMoves);
};

export default createAllCards;

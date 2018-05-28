import React, { Component } from "react";
import _ from "lodash";
import Circle from "react-circle";

import RoundsPlayedHistory from "./RoundsPlayedHistory";
import MostMissedCards from "./MostMissedCards";
import HistoryHeader from "./HistoryHeader";

const TotalAverageScore = props => {
  const reducedScores = props.roundsList.reduce((average, roundObj) => {
    return average + roundObj["percent"];
  }, 0);
  const averagedScores = Math.floor(reducedScores / props.roundsList.length);

  return (
    <div>
      <h3>
        {" "}
        Average:{" "}
        <Circle
          progress={averagedScores}
          bgColor="red"
          textStyle={{ font: "bold 8rem Helvetica, Arial, sans-serif" }}
        />{" "}
      </h3>
    </div>
  );
};

const TotalRoundsPlayed = props => {
  return <h3>Total # of Rounds Played: {props.roundsList.length}</h3>;
};

const MostRecentScore = props => {
  return (
    <h3>
      Recent:{" "}
      <Circle
        progress={props.roundsList.slice(-1)[0]["percent"]}
        bgColor="red"
        textStyle={{ font: "bold 8rem Helvetica, Arial, sans-serif" }}
      />{" "}
    </h3>
  );
};

/**
 * Creates an array of missed cards with the notation and number of times missed
 * @returns Array of [Key, Value] pairs representing each missed Card.
 */

const RenderMissedCards = props => {
  const allRounds = props.roundsList;
  const cards = props.roundsList[0].cards;

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

  const allMissedCards = addAnswersToCards();

  return <MostMissedCards missedCards={allMissedCards} />;
};

export default class RoundHistory extends Component {
  render() {
    const { history, character, filter, property } = this.props;
    // Need to refactor this out of this function and place it into state of something higher
    const roundTypeExists = _.get(
      history,
      [character, filter, property],
      false
    );
    if (!roundTypeExists) {
      return (
        <h2>
          Currently, you do not have any recorded round data with the selected
          options
        </h2>
      );
    } else {
      const roundsList = history[character][filter][property];
      return (
        <div style={{ textAlign: "center" }}>
          <HistoryHeader />
          <h2>
            Statistics for {character} {filter} {property}
          </h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MostRecentScore roundsList={roundsList} />
            <TotalRoundsPlayed roundsList={roundsList} />
            <TotalAverageScore roundsList={roundsList} />
          </div>
          <RenderMissedCards roundsList={roundsList} />
          <RoundsPlayedHistory roundsList={roundsList} />
        </div>
      );
    }
  }
}

/**
 * history
 * This is the object in localStorage containing all of a User's Round History
 * Array of Objects
 * Each Object has userName, score, property, filter, character, percent
 * roundCardsList = Array of Arrays, each inner Array has notation, answer, choice, correct
 *    ["f+2", "3", "-2", false]
 * missedCardsList = Array of Strings, containing the notation of each missed Card
 * cards = Array of Objects containing all info for each Card
 */

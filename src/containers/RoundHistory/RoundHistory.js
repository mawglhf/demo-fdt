import React, { Component } from "react";

import RoundsPlayedHistory from "./RoundsPlayedHistory";

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

const TotalAverageScore = props => {
  const reducedScores = props.history.reduce((average, roundObj) => {
    return average + roundObj["percent"];
  }, 0);
  const averagedScores = Math.floor(reducedScores / props.history.length);

  return <h3> Average Score: {averagedScores}% </h3>;
};

const TotalRoundsPlayed = props => {
  return <h3>Total # of Rounds Played: {props.history.length}</h3>;
};

const MostRecentScore = props => {
  return <h3> Most Recent Score: {props.history.slice(-1)[0]["percent"]}%</h3>;
};

const MostMissedCards = props => {
  const allRounds = props.history;

  const sortMissedCards = () => {
    // Gather all the missed cards arrays from each round and concat them into one array
    const allMissedCards = allRounds.reduce((acc, roundObj) => {
      return acc.concat(roundObj["missedCardsList"]);
    }, []);

    // Count how many times each missed card appears by adding it to an object
    const countedObj = allMissedCards.reduce((obj, currentLetter) => {
      if (!obj[currentLetter]) {
        obj[currentLetter] = 1;
      } else {
        obj[currentLetter]++;
      }
      return obj;
    }, {});
    // To sort the object from Most missed to least missed, convert to an array and then sort
    return Object.entries(countedObj).sort((a, b) => {
      return b[1] - a[1];
    });
    // Final returned object is an Array of [Key, Value] pairs
  };
  const allMissedCards = sortMissedCards();

  return (
    <div>
      <h3>Top 3 Most Missed Moves</h3>
      <h5>
        Move: {allMissedCards[0][0]} # of times Missed: {allMissedCards[0][1]}
      </h5>
      <h5>
        Move: {allMissedCards[1][0]} # of times Missed: {allMissedCards[1][1]}
      </h5>
      <h5>
        Move: {allMissedCards[2][0]} # of times Missed: {allMissedCards[2][1]}
      </h5>
    </div>
  );
};

export default class RoundHistory extends Component {
  render() {
    const { history } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <MostRecentScore history={history} />
          <TotalAverageScore history={history} />
          <TotalRoundsPlayed history={history} />
        </div>
        <MostMissedCards history={history} />
        <RoundsPlayedHistory history={history} />
      </div>
    );
  }
}

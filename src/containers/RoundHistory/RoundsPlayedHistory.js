import React, { Component } from "react";

import ScoreTable from "../Trainer/components/ScoreView/ScoreTable";
import RoundSummary from "../Trainer/components/ScoreView/RoundSummary";

export default class RoundsPlayedHistory extends Component {
  allRounds = this.props.history.reverse();

  allRoundCardsLists = this.allRounds.reduce((acc, roundObj) => {
    acc.push(roundObj["roundCardsList"]);
    return acc;
  }, []);

  renderRoundsPlayedHistory = () => {
    return this.allRoundCardsLists.map((cardsList, i) => {
      return (
        <div key={"div" + i}>
          <RoundSummary key={"summary" + i} postRoundData={this.allRounds[i]} />
          <ScoreTable key={"scoretable" + i} roundCardsList={cardsList} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Rounds Played History</h2>
        <div>{this.renderRoundsPlayedHistory()}</div>
      </div>
    );
  }
}

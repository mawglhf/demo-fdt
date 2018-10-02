// Refactor, at the very least split presentation from logic

import React, { Component } from "react";

import ScoreTable from "../Trainer/components/ScoreView/ScoreTable";
import RoundSummary from "../Trainer/components/ScoreView/RoundSummary";

export default class RoundsPlayedHistory extends Component {
  allRounds = this.props.roundsList.reverse();

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 10
          }}
        >
          <h2>History - All {this.props.roundsList.length} Rounds</h2>
        </div>

        <div>{this.renderRoundsPlayedHistory()}</div>
      </div>
    );
  }
}

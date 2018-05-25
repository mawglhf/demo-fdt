import React, { Component } from "react";

// Needed props = character, filter, property, score,
export default class RoundSummary extends Component {
  render() {
    const { postRoundData } = this.props;

    return (
      <div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <h3 style={{ marginTop: 5 }}>
              {" "}
              Correct {postRoundData["score"]} / {postRoundData["cards"].length}
            </h3>
            <h3 style={{ marginTop: 5 }}>
              {" "}
              Score {postRoundData["percent"]}%{" "}
            </h3>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4> {postRoundData["character"]} </h4>
          <h4> {postRoundData["filter"]} </h4>
          <h4> {postRoundData["property"]} </h4>
        </div>
      </div>
    );
  }
}

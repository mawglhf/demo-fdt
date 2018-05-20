import React, { Component } from "react";

export default class RoundProgressBar extends Component {
  render() {
    const { total, score, remaining } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h4>
          Correct: {score} / {total}
        </h4>
        <h4> Remaining: {remaining} </h4>
      </div>
    );
  }
}

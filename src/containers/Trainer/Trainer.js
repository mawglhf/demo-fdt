import React, { Component } from "react";

import InitialView from "./components/InitialView/InitialView";
import RoundView from "./components/RoundView/RoundView";
import ScoreView from "./components/ScoreView/ScoreView";

class Trainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundStart: false,
      roundEnd: false
    };
  }

  handleClick = () => {
    this.props.updateCards();
    this.setState({
      roundStart: true
    });
  };

  render() {
    const { roundStart, roundEnd, postRoundData } = this.state;
    const { round, updateCards } = this.props;

    if (roundEnd && postRoundData) {
      return (
        <ScoreView
          postRoundData={postRoundData}
          playAgain={() => this.handleClick()}
        />
      );
    }

    if (!roundStart)
      return (
        <InitialView
          onStartPress={() => this.handleClick()}
          updateCards={() => updateCards()}
        />
      );

    if (roundStart)
      return (
        <RoundView
          round={round}
          updatePostRoundData={data => {
            this.setState({
              postRoundData: data
            });
          }}
          endRound={() =>
            this.setState({
              roundEnd: true,
              roundStart: false
            })
          }
        />
      );
  }
}

export default Trainer;

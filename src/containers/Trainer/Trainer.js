import React, { Component } from "react";

import InitialView from "./components/InitialView/InitialView";
import RoundView from "./components/RoundView/RoundView";
import ScoreView from "./components/ScoreView/ScoreView";

class Trainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundStart: false,
      roundEnd: false,
      round: this.props.round
    };
  }

  render() {
    const { roundStart, roundEnd, postRoundData } = this.state;
    const { round } = this.props;

    if (roundEnd && postRoundData) {
      return <ScoreView postRoundData={postRoundData} />;
    }

    if (!roundStart)
      return (
        <InitialView
          onStartPress={() => {
            this.setState({ roundStart: true });
          }}
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

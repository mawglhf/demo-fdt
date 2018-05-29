import React, { Component } from "react";
import { Button } from "react-bootstrap";

import ScoreTable from "./ScoreTable";
import StoreDataButton from "./StoreDataButton";
import RoundSummary from "./RoundSummary";

export default class ScoreView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStored: false
    };
  }

  render() {
    const { postRoundData, playAgain } = this.props;
    return (
      <div>
        <RoundSummary postRoundData={postRoundData} />
        <ScoreTable roundCardsList={postRoundData["roundCardsList"]} />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <StoreDataButton
            style={{ textAlign: "center" }}
            postRoundData={postRoundData}
            updateDataStored={() => this.setState({ dataStored: true })}
          />

          <Button bsStyle="primary" onClick={() => playAgain()}>
            {" "}
            Play Again{" "}
          </Button>
        </div>
      </div>
    );
  }
}

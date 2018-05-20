import React, { Component } from "react";
import { Button } from "react-bootstrap";

import ScoreTable from "./ScoreTable";
import StoreDataButton from "./StoreDataButton";
import RoundSummary from "./RoundSummary";
import RoundHistory from "../../../RoundHistory/RoundHistory";

export default class ScoreView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStored: false
    };
  }

  checkForData = () => {
    if (this.state.dataStored && localStorage["userRoundsHistory"]) {
      return (
        <RoundHistory
          history={JSON.parse(localStorage.getItem("userRoundsHistory"))}
        />
      );
    } else if (!localStorage["userRoundsHistory"]) {
      return <div>Round History Does Not Yet Exist</div>;
    } else {
      return <div>Click Store Round Data to Show History!</div>;
    }
  };

  render() {
    const { postRoundData } = this.props;

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
          <Button href="//localhost:3000" id="reset-trainer-button">
            Reset Trainer
          </Button>
        </div>

        <div>{this.checkForData()}</div>
      </div>
    );
  }
}

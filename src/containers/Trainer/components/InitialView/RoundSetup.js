// Should not be exporting InitialView with this component name
// Especially considering another component in the same folder has that file name
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class InitialView extends Component {
  render() {
    const { round, onStartPress } = this.props;
    const cards = round.cards;
    return (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            maxWidth: 750,
            margin: "auto"
          }}
        >
          <Button
            style={{ width: "40%", margin: "auto", marginBottom: 10 }}
            bsStyle="success"
            bsSize="large"
            onClick={() => onStartPress()}
            block
          >
            Start Round
          </Button>
          <p>
            If the Round Information below looks correct, click "Start Round"
          </p>
          <h2>Character: {round.character}</h2>
          <h2>Filter: {round.filter}</h2>
          <h2>Property: {round.property}</h2>
          <h2>Number of Moves in Round: {cards.length}</h2>
        </div>
      </div>
    );
  }
}

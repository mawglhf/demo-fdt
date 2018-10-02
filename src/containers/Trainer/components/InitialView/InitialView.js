// At the very least, separate the card creation logic from a component that renders tabs and text
import React, { Component } from "react";
import { Button, Alert, Tabs, Tab } from "react-bootstrap";

import RoundSetup from "./RoundSetup";

export default class InitialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsCreated: false
    };
  }

  handleClick = () => {
    this.props.updateCards();
    return this.setState({
      cardsCreated: true
    });
  };

  render() {
    const { cardsCreated } = this.state;
    const { onStartPress, round } = this.props;

    if (cardsCreated) {
      return <RoundSetup round={round} onStartPress={() => onStartPress()} />;
    }

    return (
      <div>
        <div
          style={{
            maxWidth: 750,
            margin: "auto"
          }}
        >
          <Button
            style={{ width: "40%", margin: "auto", marginBottom: 10 }}
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.handleClick()}
            block
          >
            Setup Round
          </Button>

          <p>
            After choosing character, filter, and property, click "Setup Round".
          </p>

          <Alert bsStyle="info" style={{ marginTop: 20 }}>
            FDT is constantly being improved. At the moment, only Dragunov's
            Most Popular moves have working GIFs!
          </Alert>

          <Tabs defaultActiveKey={0} style={{ fontSize: 18 }}>
            <Tab eventKey={1} title="Trainer Setup - Quick Start">
              <p>
                In the trainer, you are shown a series of moves and are tested
                on how well you know the correct frame data. The trainer is
                completely customizable. Use the NavBar to choose the character,
                filter, and property based on your needs.
              </p>

              <p>
                After selecting the character, select a filter to narrow down
                their movelist. To learn a new character, the "Most Popular"
                filter is a good starting point. Finally, select which data you
                wish to learn. Looking to punish? Select the "on_block"
                property. Curious about startup? Select the "speed" property.
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

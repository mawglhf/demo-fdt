import React, { Component } from "react";
import { Button } from "react-bootstrap";
/**
 * Should take in choices array and return buttons
 */
export default class CardButtons extends Component {
  renderButtons = choices => {
    return choices.map((choice, i) => {
      return (
        <Button
          style={styles.choiceButtons}
          value={choice}
          key={i}
          onClick={() => this.props.clickFunction(choice)}
        >
          {choice}
        </Button>
      );
    });
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {this.renderButtons(this.props.choices)}
      </div>
    );
  }
}

const styles = {
  choiceButtons: {
    minHeight: 20,
    minWidth: 130
  }
};

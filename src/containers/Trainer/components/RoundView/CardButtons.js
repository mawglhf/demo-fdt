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
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          maxWidth: 640,
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {this.renderButtons(this.props.choices)}
      </div>
    );
  }
}

const styles = {
  choiceButtons: {
    minHeight: 20,
    width: "1vw",
    flexGrow: 1
  }
};

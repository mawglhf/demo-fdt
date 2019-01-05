// See what you can do to make it so that you don't need this comment.
// Assuming a simple amount of renaming needed if even that
import React, { Component } from "react";

import CardButtons from "./CardButtons";
import CardImage from "./CardImage";
/**
 * Responsible for Displaying the Components of a single card
 * Should get passed in 1 object = 1 card
 * Property should be called card
 */
export default class RenderCard extends Component {
  render() {
    const { notation, image, choices, answer } = this.props.card;
    console.log(this.props.card);
    return (
      <div key={notation}>
        <h2
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: 10
          }}
        >
          {" "}
          {notation}{" "}
        </h2>
        <CardImage image={image} character={this.props.character} />
        <CardButtons
          afterChoice={this.props.afterChoice}
          answer={answer}
          choices={choices}
          clickFunction={this.props.buttonFunction}
        />
      </div>
    );
  }
}

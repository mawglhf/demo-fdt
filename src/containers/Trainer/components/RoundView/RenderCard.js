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
    const { notation, image, choices } = this.props.card;
    return (
      <div>
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
          choices={choices}
          clickFunction={this.props.buttonFunction}
        />
      </div>
    );
  }
}

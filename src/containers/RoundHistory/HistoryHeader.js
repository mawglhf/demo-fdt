import React, { Component } from "react";
import { Image } from "react-bootstrap";

/**
 * TODO: Refactor from harcoded example to variable
 */

export default class HistoryHeader extends Component {
  getCharacterImg = charName => {
    const lowercase = charName.toLowerCase();
    return "../../assets/char_thumbnails/" + lowercase + "_thumbnail.png";
  };

  render() {
    const { character, filter, property } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ textAlign: "left" }}>
          {character} {filter} {property}
        </h3>

        <Image
          src={this.getCharacterImg(character)}
          style={{
            maxWidth: 250,
            height: "auto",
            alignSelf: "flex-end"
          }}
          responsive
        />
      </div>
    );
  }
}

/**
 *           minHeight: 150,
          background: "no-repeat right",
          backgroundImage: `url(${drag})`
 */

import React, { Component } from "react";
import { Image } from "react-bootstrap";

import thumbs from "../../assets/importAssets";
/**
 * TODO: Refactor from harcoded example to variable
 */

export default class HistoryHeader extends Component {
  /**
   *  Takes in charName {string} and
   *  returns corresponding thumbnail {string}
   */
  getCharacterThumbnail = charName => {
    return thumbs[
      charName
        .split("-")
        .join("")
        .toLowerCase()
    ];
  };

  render() {
    const { character, filter, property } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ textAlign: "left" }}>
          {character} {filter} {property}
        </h3>

        <Image
          src={this.getCharacterThumbnail(character)}
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

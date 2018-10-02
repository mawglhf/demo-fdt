// Presentational so move to components

import React, { Component } from "react";
import { Image } from "react-bootstrap";

import getCharThumbnail from "../../utils/getCharThumbnail";

export default class HistoryHeader extends Component {
  render() {
    const { character, filter, property } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ textAlign: "left" }}>
          {character} {filter} {property}
        </h3>

        <Image
          src={getCharThumbnail(character)}
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

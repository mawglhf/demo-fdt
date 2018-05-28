import React, { Component } from "react";
import { Image } from "react-bootstrap";

import drag from "../../utils/dragunov_thumbnail.png";

export default class HistoryHeader extends Component {
  render() {
    return (
      <div style={{ height: "auto" }}>
        <Image
          src={drag}
          style={{ width: "100%", height: "auto", maxWidth: 500 }}
        />
      </div>
    );
  }
}

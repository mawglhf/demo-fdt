import React, { Component } from "react";

export default class RoundTypeBar extends Component {
  render() {
    const { filter, property } = this.props.round;
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h4> Filter: {filter} </h4>
        <h4> Property: {property} </h4>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class StoreDataButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStored: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { postRoundData, updateDataStored } = this.props;
    const { dataStored } = this.state;
    // Don't store data more than once
    if (dataStored) {
      console.log("Data for this round has already been stored");
    } else {
      const userRoundsHistory = localStorage["userRoundsHistory"]
        ? JSON.parse(localStorage.getItem("userRoundsHistory"))
        : [];

      userRoundsHistory.push(postRoundData);

      localStorage.setItem(
        "userRoundsHistory",
        JSON.stringify(userRoundsHistory)
      );

      // In order for the user to know we stored the data, we start by changing component state to true
      this.setState({ dataStored: true });
      updateDataStored();
    }
  }

  render() {
    const { dataStored } = this.state;
    return (
      <Button
        onClick={this.handleClick}
        bsStyle={dataStored ? "success" : "info"}
      >
        {dataStored ? "Round Data Stored" : "Store Round Data"}
      </Button>
    );
  }
}

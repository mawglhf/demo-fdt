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

    const userRoundsHistory = localStorage["userRoundsHistory"]
      ? JSON.parse(localStorage.getItem("userRoundsHistory"))
      : [];

    userRoundsHistory.push(postRoundData);

    localStorage.setItem(
      "userRoundsHistory",
      JSON.stringify(userRoundsHistory)
    );

    console.log(JSON.parse(localStorage.getItem("userRoundsHistory")));

    // In order for the user to know we stored the data, we start by changing component state to true
    this.setState({ dataStored: true });
    updateDataStored();
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

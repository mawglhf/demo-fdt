import React, { Component } from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";

export default class StoreDataButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStored: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  createUserRoundsHistory = roundData => {
    const { character, filter, property } = roundData;
    const userRoundsHistory = localStorage["userRoundsHistory"]
      ? JSON.parse(localStorage.getItem("userRoundsHistory"))
      : {};

    const roundTypeExists = _.get(
      userRoundsHistory,
      [character, filter, property],
      false
    );

    if (!roundTypeExists) {
      _.set(userRoundsHistory, [character, filter, property], []);
    }

    userRoundsHistory[character][filter][property].push(roundData);

    localStorage.setItem(
      "userRoundsHistory",
      JSON.stringify(userRoundsHistory)
    );

    this.setState({ dataStored: true });
    this.props.updateDataStored();
  };

  handleClick() {
    const { postRoundData } = this.props;
    const { dataStored } = this.state;

    if (dataStored) {
      console.log("Data for this round has already been stored");
    } else {
      this.createUserRoundsHistory(postRoundData);
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

/**
 * userRoundsHistory === Array of Objects = List of Rounds
 * Each Round is an Object with properties:
 * cards, character, date, filter, missedCardsList, percent, property, roundCardsList, score, userName
 *
 * We need to change it to separate rounds based on Char/Filt/Prop
 *
 * userRoundsHistory = {
 *  "Dragunov": {
 *    "Most Popular": {
 *      "on_block": {
 *
 *       }
 *     }
 *   }
 * }
 */

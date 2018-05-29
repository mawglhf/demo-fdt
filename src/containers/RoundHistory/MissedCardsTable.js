import React, { Component } from "react";
import { Table } from "react-bootstrap";

/**
 * @param {array} missedCards = List of Cards = Array of Arrays,
 * Each inner array has three items [ movenotationString, timesmissedNumber, correctanswerString]
 */

export default class MissedCardsTable extends Component {
  renderTable = slicedCards => {
    return slicedCards.map(card => {
      return (
        <tr>
          <td>{card[0]}</td>
          <td>{card[1]}</td>
          <td>{card[2]}</td>
        </tr>
      );
    });
  };

  render() {
    const { missedCards } = this.props;

    // {renderTable(missedCards.slice(0, 5))}
    return (
      <div>
        <h3>Top 5 Most Missed Moves</h3>
        <Table
          bordered
          condensed
          hover
          style={{
            marginTop: 10,
            fontSize: 18
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Move Notation</th>
              <th style={{ textAlign: "center" }}>Times Missed</th>
              <th style={{ textAlign: "center" }}>Correct Answer</th>
            </tr>
          </thead>
          <tbody>{this.renderTable(missedCards.slice(0, 5))}</tbody>
        </Table>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class MostMissedCards extends Component {
  render() {
    const { missedCards } = this.props;
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
          <tbody>
            <tr>
              <td>{missedCards[0][0]}</td>
              <td>{missedCards[0][1]}</td>
              <td>{missedCards[0][2]}</td>
            </tr>
            <tr>
              <td>{missedCards[1][0]}</td>
              <td>{missedCards[1][1]}</td>
              <td>{missedCards[1][2]}</td>
            </tr>
            <tr>
              <td>{missedCards[2][0]}</td>
              <td>{missedCards[2][1]}</td>
              <td>{missedCards[2][2]}</td>
            </tr>
            <tr>
              <td>{missedCards[3][0]}</td>
              <td>{missedCards[3][1]}</td>
              <td>{missedCards[3][2]}</td>
            </tr>
            <tr>
              <td>{missedCards[4][0]}</td>
              <td>{missedCards[4][1]}</td>
              <td>{missedCards[4][2]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

import React, { Component } from "react";
import ReactTable from "react-table";

export default class ScoreTable extends Component {
  render() {
    const { roundCardsList } = this.props;

    const columns = [
      {
        Header: "Move",
        id: "notation",
        accessor: item => item[0]
      },
      {
        Header: "Answer",
        id: "answer",
        accessor: item => item[1]
      },
      {
        Header: "Your Choice",
        id: "choice",
        accessor: item => item[2]
      },
      {
        Header: "Correct",
        id: "correct",
        accessor: item => item[3]
      }
    ];

    return (
      <ReactTable
        data={roundCardsList}
        columns={columns}
        defaultPageSize={roundCardsList.length}
        style={{ height: 700 }}
        className="-highlight"
        getTrProps={(state, rowInfo, column) => {
          return {
            style: {
              background: rowInfo.row.correct === "true" ? "#dff0d8" : "#f2dede"
            }
          };
        }}
      />
    );
  }
}

//  defaultPageSize={postRoundData["roundCardsList"].length}

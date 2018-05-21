import React, { Component } from "react";
import { Button, Alert } from "react-bootstrap";

export default class InitialView extends Component {
  render() {
    return (
      <div>
        <h1 style={{ marginTop: 5 }}> Frame Data Trainer </h1>
        <h3 style={{ textAlign: "right" }}> Training Mode On The Go </h3>

        <p>
          To begin, use the navbar to select a character, a filter, and a
          property, then press Start Trainer.
        </p>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            style={{ width: "40%" }}
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.props.onStartPress()}
            block
          >
            {" "}
            Start Trainer{" "}
          </Button>
        </div>

        <Alert bsStyle="info" style={{ marginTop: 20 }}>
          FDT is constantly being improved. At the moment, only Dragunov's Most
          Popular moves have working GIFs!
        </Alert>
      </div>
    );
  }
}

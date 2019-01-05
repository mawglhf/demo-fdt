import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isClicked: true
    }));
    this.props.clickFunction();
  }

  render() {
    const { clickedStyle, value } = this.props;
    return (
      <Button
        style={styles.choiceButtons}
        onClick={this.handleClick}
        bsStyle={this.state.isClicked ? { clickedStyle } : "default"}
      >
        {value}
      </Button>
    );
  }
}

const styles = {
  choiceButtons: {
    minHeight: 20,
    width: "1vw",
    flexGrow: 1
  }
};

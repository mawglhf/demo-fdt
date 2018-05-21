import React, { Component } from "react";

export default class CardImage extends Component {
  render() {
    return (
      <div style={styles.imageContainer}>
        <img src={this.props.image} alt={""} style={styles.image} />
      </div>
    );
  }
}
const styles = {
  imageContainer: {
    textAlign: "center"
  },
  image: {
    height: "auto",
    width: "auto",
    minWidth: 315,
    maxHeight: 360,
    maxWidth: 640
  }
};

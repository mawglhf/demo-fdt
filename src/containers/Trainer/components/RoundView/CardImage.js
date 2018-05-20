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
    maxHeight: 500,
    height: "auto",
    width: "auto",
    maxWidth: "100%",
    minHeight: 360,
    minWidth: 640
  }
};

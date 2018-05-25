import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class CardImage extends Component {
  checkForImage = () => {
    const { image } = this.props;
    if (typeof image === "string") {
      return <Image src={image} alt={""} style={styles.image} responsive />;
    } else {
      return <h1>{image[0]}</h1>;
    }
  };

  render() {
    return <div style={styles.imageContainer}>{this.checkForImage()}</div>;
  }
}
const styles = {
  imageContainer: {
    justifyContent: "center",
    textAlign: "center"
  },
  image: {
    maxHeight: 360,
    maxWidth: 640,
    margin: "auto",
    height: "auto",
    width: "100%"
  }
};

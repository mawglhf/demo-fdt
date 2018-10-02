// Refactor to extract the logic to check for an image
import React, { Component } from "react";
import { Image } from "react-bootstrap";

import getCharThumbnail from "../../../../utils/getCharThumbnail";

export default class CardImage extends Component {
  checkForImage = () => {
    const { image } = this.props;
    if (typeof image === "string") {
      return <Image src={image} alt={""} style={styles.image} responsive />;
    } else {
      let thumbnail = getCharThumbnail(this.props.character);
      return <Image src={thumbnail} alt={""} style={styles.image} responsive />;
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

import React, { Component } from "react";

export default class CardImage extends Component {
  checkForImage = () => {
    const { image } = this.props;
    if (typeof image === "string") {
      return <img src={image} alt={""} style={styles.image} />;
    } else {
      return <h1>{image[0]}</h1>;
    }
  };

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

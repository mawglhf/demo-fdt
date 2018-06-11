import thumbs from "../assets/importAssets";

/**
 *  Takes in charName {string} and
 *  returns corresponding thumbnail {string}
 */

const getCharThumbnail = charName => {
  return thumbs[
    charName
      .split("-")
      .join("")
      .toLowerCase()
  ];
};
export default getCharThumbnail;

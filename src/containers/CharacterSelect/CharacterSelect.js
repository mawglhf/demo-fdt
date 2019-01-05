import React from "react";
import PropTypes from "prop-types";

function CharacterSelect(props) {
  const renderCharacterCell = characters => {
    return characters.map(char => {
      return (
        <div
          key={char[0]}
          className="charSelectCell"
          style={{ backgroundImage: `url(${char[1]})` }}
          onClick={() => props.selectCharacter(char[0])}
        >
          <span>{char[0]}</span>
        </div>
      );
    });
  };

  return (
    <div className="charSelectContainer">
      {renderCharacterCell(props.characters)}
    </div>
  );
}

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired,
  selectCharacter: PropTypes.func.isRequired
};

export default CharacterSelect;

/**
 * Component should take in an array of objects
 * Each object is contains a character's
 * Name & Thumbnail
 */

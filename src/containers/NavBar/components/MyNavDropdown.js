import React, { Component } from "react";
import { NavDropdown, MenuItem } from "react-bootstrap";

/**
 * Create and Render a NavDropdown with selectable menu items
 * @param {string} Type - "Character" - Will be the title of the dropdown until a specific character is selectedEx: "Character"
 * @param {array} List - ["Akuma", "Dragunov", ...] - List of all character names
 * @param {function} Select Takes in a string, then this.setState of NavBar: { character: "Dragunov" }
 */

export default class MyNavDropdown extends Component {
  constructor(props) {
    super(props);
    const { type } = this.props;
    this.state = {
      title: type
    };
  }

  updateTitle = choice => {
    this.setState({
      title: choice
    });
    return choice;
  };

  renderMenuItems = (list, select) => {
    return list.map(item => {
      return (
        <MenuItem key={item} onClick={() => select(this.updateTitle(item))}>
          {item}
        </MenuItem>
      );
    });
  };

  render() {
    const { type, list, select } = this.props;
    const { title } = this.state;
    return (
      <NavDropdown title={title} id={type}>
        {this.renderMenuItems(list, select)}
      </NavDropdown>
    );
  }
}

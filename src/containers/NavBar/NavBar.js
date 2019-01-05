import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  characterNames,
  filterNames,
  propertyNames
} from "../../utils/constants";
import MyNavDropdown from "./components/MyNavDropdown";

export default class NavBar extends Component {
  render() {
    const { updateCharacter, updateFilter, updateProperty } = this.props;

    return (
      <Navbar
        inverse
        collapseOnSelect
        style={{ marginBottom: 5, backgroundColor: "#2c383d" }}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> FDT </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <span style={{ display: "flex", justifyContent: "center" }}>
          <Navbar.Collapse>
            <Nav>
              <MyNavDropdown
                type={"Character"}
                list={characterNames}
                select={choice => updateCharacter(choice)}
              />
              <MyNavDropdown
                type={"Filter"}
                list={filterNames}
                select={choice => updateFilter(choice)}
              />
              <MyNavDropdown
                type={"Property"}
                list={propertyNames}
                select={choice => updateProperty(choice)}
              />
              <li>
                <Link to="/trainer"> Trainer </Link>
              </li>
              <li>
                <Link to="/history"> User Stats </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </span>
      </Navbar>
    );
  }
}

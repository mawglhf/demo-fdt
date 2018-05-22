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
    return (
      <Navbar inverse collapseOnSelect style={{ marginBottom: 5 }}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> FDT </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <MyNavDropdown
              type={"Character"}
              list={characterNames}
              select={choice => {
                this.setState({
                  character: choice
                });
              }}
            />
            <MyNavDropdown
              type={"Filter"}
              list={filterNames}
              select={choice => {
                this.setState({
                  filter: choice
                });
              }}
            />
            <MyNavDropdown
              type={"Property"}
              list={propertyNames}
              select={choice => {
                this.setState({
                  property: choice
                });
              }}
            />
            <li>
              <Link to="/history"> User Stats </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

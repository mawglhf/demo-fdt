import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <NavDropdown title="Character" id={"char-drop"} />
            <NavDropdown title="Filter" id={"filt-drop"} />
            <NavDropdown title="Property" id={"prop-drop"} />
            <li>
              <Link to="/history"> User Stats </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

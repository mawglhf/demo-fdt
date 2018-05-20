import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect style={{ marginBottom: 10 }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="//localhost:3000">FDT</a>
          </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Character" id={"char-drop"} />
            <NavDropdown title="Filter" id={"filt-drop"} />
            <NavDropdown title="Property" id={"prop-drop"} />
          </Nav>
          <Nav pullRight />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

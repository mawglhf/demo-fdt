import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

import Home from "./containers/Home/Home";
import Trainer from "./containers/Trainer/Trainer";
import NavBar from "./containers/NavBar/NavBar";
import RoundHistory from "./containers/RoundHistory/RoundHistory";
import createAllCards from "../src/utils/createAllCardsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "userName",
      character: "Dragunov",
      filter: "Most Popular",
      property: "on_block",
      cards: [],
      round: {}
    };
  }

  createRound = () => {
    const { userName, character, filter, property, cards } = this.state;
    const round = {
      userName: userName,
      character: character,
      filter: filter,
      property: property,
      cards: cards
    };
    this.setState({
      round: round
    });
  };

  updateCards = () => {
    const { character, filter, property } = this.state;
    const cards = createAllCards(character, filter, property);
    this.setState({
      cards: cards
    });
    this.createRound();
  };

  updateCharacter = character => {
    this.setState({
      character: character
    });
  };

  updateFilter = filter => {
    this.setState({
      filter: filter
    });
  };

  updateProperty = property => {
    this.setState({
      property: property
    });
  };

  render() {
    const { character, filter, property, round } = this.state;
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: "#012a45" }}>
          <NavBar
            character={character}
            filter={filter}
            property={property}
            updateCharacter={this.updateCharacter}
            updateFilter={this.updateFilter}
            updateProperty={this.updateProperty}
          />
          <div
            className="container"
            id="app-container"
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              height: "100vh",
              color: "#fefefe"
            }}
          >
            <Jumbotron
              style={{
                paddingTop: 5,
                marginBottom: 0,
                backgroundColor: "#012a45"
              }}
            >
              <Switch>
                <Route
                  path="/history"
                  render={props => (
                    <RoundHistory
                      {...props}
                      character={character}
                      filter={filter}
                      property={property}
                      history={JSON.parse(
                        localStorage.getItem("userRoundsHistory")
                      )}
                    />
                  )}
                />

                <Route
                  path="/trainer"
                  render={props => (
                    <Trainer
                      {...props}
                      updateCards={() => this.updateCards()}
                      round={round}
                      style={{ textAlign: "center" }}
                    />
                  )}
                />

                <Route path="/" component={Home} />
              </Switch>
            </Jumbotron>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

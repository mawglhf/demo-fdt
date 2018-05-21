import React, { Component } from "react";
import { Tabs, Tab, Button, Alert } from "react-bootstrap";

import { Link } from "react-router-dom";

export default class InitialView extends Component {
  render() {
    return (
      <div>
        <h1 style={{ marginTop: 5 }}> Frame Data Trainer </h1>
        <h3 style={{ textAlign: "right" }}> Training Mode On The Go </h3>
        <p>
          To begin, use the navbar to select a character, a filter, and a
          property, then press Start Trainer.
        </p>

        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <Link to="/trainer">
            <Button bsStyle="primary" bsSize="large">
              {" "}
              Go To Trainer{" "}
            </Button>
          </Link>

          <Alert bsStyle="info" style={{ marginTop: 20 }}>
            FDT is constantly being improved. At the moment, only Dragunov's
            Most Popular moves have working GIFs!
          </Alert>
        </div>
        <Tabs
          defaultActiveKey={0}
          id="uncontrolled-tab-example"
          style={{ fontSize: 18 }}
        >
          <Tab eventKey={1} title="FAQ">
            <h3> How does this work? </h3>
            <p>
              Choose the exact data you want to learn by selecting a character,
              filter and property. When you're ready, press Start to begin a
              round customized to your specifications. During each round, you
              will be shown a series of cards, corresponding to a certain move.
              Once a card is shown, you must select the correct answer for that
              moves data. By the way, you're timed. So don't even think about
              cheating. Once all cards have been shown, the round is over. Get
              feedback on your performance in the round with the Score Screen.
            </p>

            <h3> What are filters? </h3>
            <p>
              Filters allow you to choose which types of moves you want to
              learn. Brush up quickly on a matchup by selecting the 'Most
              Popular' moves. Take every free drop of damage by selecting
              'Punishable on Block' moves. For the true Tekken competitor,
              select 'All' to familiarize yourself with every possible
              situation.
            </p>
            <h3> What are properties? </h3>
            <p>
              Properties allow you to choose which aspect of the moves data you
              want to learn. For completely new matchup training, select Move
              Name, to learn to identify each move by name. For most users,
              selecting On Block will provide you with the data you need to know
              to punish properly. For advanced users wishing to create
              advantageous situations and craft setups, selecting Startup will
              teach you what options they have in any situation.
            </p>
          </Tab>
          <Tab eventKey={2} title="Purpose">
            <h3> Motivation </h3>
            <p>
              We've all been there--at work, in class, on the bus--wishing we
              could hit the lab to practice. To improve when away from the game,
              our options have always been limited. Twitter videos, references,
              and online forums provide information that is often consumed and
              forgotten. However, as we all know, having the information is not
              enough.
            </p>

            <p>
              We need that information to absorbed and retained. We must be able
              to recall it instantly, in the moment when it matters most. That
              secret discord tech needs to become knowledge. That's where FDT
              comes in. Reinforce that information in training, to turn it into
              knowledge.
            </p>

            <p>
              Make the fatal mistake in a tournament with everything on the
              line, or on the toilet with FDT.
            </p>
          </Tab>

          <Tab eventKey={3} title="Feedback">
            <h3>Help FDT Help You</h3>

            <p>
              The purpose of FDT is to serve as a tool to benefit the community.
              It succeeds only insofar as it can expand the knowledge of its
              users. Thus, for FDT to become the best that it can, it requires
              user feedback for iteration.
            </p>

            <p>Feedback is not only welcomed but also greatly appreciated.</p>

            <p>Reach us on Twitter @t7fdt</p>

            <p>Check out the source code at github.com/nrgaposok/t7fdt</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

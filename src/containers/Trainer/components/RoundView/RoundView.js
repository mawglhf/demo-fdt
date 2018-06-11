import React, { Component } from "react";

import RoundTypeBar from "./RoundTypeBar";
import RoundProgressBar from "./RoundProgressBar";
import RenderCard from "./RenderCard";

import createPostRoundData from "./createPostRoundData";

/**
 * Component to control the active Round Logic
 */
class RoundView extends Component {
  constructor(props) {
    super(props);
    const { cards } = this.props.round;
    this.state = {
      currentCardIndex: 0,
      userChoices: [],
      userCorrect: [],
      userScore: 0,
      total: cards.length,
      remaining: cards.length
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setupPostRoundData = () => {
    const { round } = this.props;
    const { userChoices, userCorrect, userScore } = this.state;

    return createPostRoundData(
      round,
      userChoices,
      userCorrect,
      round.cards,
      userScore
    );
  };

  handleClick = userChoice => {
    const {
      currentCardIndex,
      userChoices,
      userCorrect,
      userScore,
      remaining
    } = this.state;
    const { round, updatePostRoundData } = this.props;

    // First, push userChoice to userChocies
    this.setState({
      userChoices: [...userChoices, userChoice]
    });

    // If userChoice === cards[this.state.currentCardIndex]["answer"], add one to userCorrect
    if (userChoice === round.cards[currentCardIndex]["answer"]) {
      this.setState({
        userCorrect: [...userCorrect, true],
        userScore: userScore + 1
      });
    } else {
      this.setState({
        userCorrect: [...userCorrect, false]
      });
    }

    // If there are no remaining cards left when users makes a choice, switch to Score Screen
    if (remaining < 1) {
      return updatePostRoundData(this.setupPostRoundData());
    }

    // Now we need to call a function that will update the currentCardIndex
    this.setState({
      currentCardIndex: currentCardIndex + 1,
      remaining: remaining - 1
    });
  };

  render() {
    const { round, updatePostRoundData, endRound } = this.props;
    const { currentCardIndex, userScore, total, remaining } = this.state;
    const currentCard = round.cards[currentCardIndex];

    if (remaining < 1) {
      updatePostRoundData(this.setupPostRoundData());
      endRound();
      return <div />;
    } else {
      return (
        <div>
          <RoundTypeBar round={round} />
          <RoundProgressBar
            total={total}
            score={userScore}
            remaining={remaining}
          />
          <RenderCard
            card={currentCard}
            buttonFunction={this.handleClick}
            character={round.character}
          />
        </div>
      );
    }
  }
}

export default RoundView;

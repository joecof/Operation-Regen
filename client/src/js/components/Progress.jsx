import React, { Component } from 'react';
import '../../css/Progress.css';
import Transition from './Transition';
import GameContainer from './GameContainer';
import { Link } from "react-router-dom";

class Progress extends Component {
  constructor() {
    super();

    this.state = {
      quote: [],
      hero: 99,
      name: " ",
      score: 200,
      life: 1,
      level: 1,
      game: 0,
      transition: true,
    };

    this.toggleTransition = this.toggleTransition.bind(this);
  }

  // Fetch quote query result
  componentDidMount() {
    this.setState({
      hero: this.props.location.state.hero,
      name: this.props.location.state.name
    });
    fetch('/Quote')
      .then(res => res.json())
      .then(quote => (this.setState({ quote })));
  }

  // random number generator
  randomNumber(num) {
    const min = 0;
    const max = num;
    const rand = Math.floor(min + Math.random() * (max - min));
    return rand;
  }

  toggleTransition() {
    this.setState({
      transition: !this.state.transition,
      level: this.state.level,
      game: this.state.game + 1,
      life: this.state.life
    });
  }

  render() {
    var style = {
      backgroundImage: 'url(../img/bg_transition_brown.jpg)'
    }

    var regen = {
      display: this.state.life === 0 ? "none" : "block"
    }

    var leaderboard = {
      display: this.state.life === 0 ? "block" : "none"
    }

    // Stores quote query result
    var list = this.state.quote;
    var randQuote;

    if (list.length !== 0) {
      randQuote = list[this.randomNumber(list.length)];
    } else {
      randQuote = {
        content: "“The Earth is what we all have in common.”",
        person: "— Wendell Berry"
      };
    }

    return (
      <div className = "Progress" style = {style}>
        {(this.state.transition === true) ?
          <div>
            <p className = "Transition-Header">Level {this.state.level}</p>
            <Transition {...this.state}/>
            <div className="Quote-Box">
              <p className="Quote-Content">{randQuote.content}</p>
              <p className="Quote-Person">{randQuote.person}</p>
            </div>
            <div className="Progress-Btn">
              <Link className ="Progress-LeaderBoardBtn" style = {leaderboard} to = "/LeaderBoard">LEADERBOARD</Link>
              <button className="Progress-RegenBtn" style = {regen} onClick = {this.toggleTransition}>REGEN</button>
              <Link className="Progress-BackBtn" to = "/">BACK TO MAIN</Link>
            </div>
          </div> :
          <GameContainer
            transition = {this.state.transition}
            toggleTransition = {this.toggleTransition}
            game = {this.state.game}
          />
        }
      </div>
    )
  }
}

export default Progress;
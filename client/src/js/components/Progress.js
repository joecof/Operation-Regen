import React, { Component } from 'react';
import '../../css/Progress.css';
import Transition from './Transition';
import {Link} from "react-router-dom";
import '../../img/lives5.png'

class Progress extends Component {
  constructor() {
    super();

    this.state = {
      quote: [],
      hero: 99,
      name: " ",
      level: 1,
      life: 5,
      score: 0,
      app1: 0,
      app2: 0,
      app3: 0,
      app4: 0,
      app5: 0
    };
  }

  // Fetch quote query result
  componentDidMount() {
    this.setState({hero: this.props.location.state.hero, name: this.props.location.state.name});
    fetch('/Quote')
      .then(res => res.json())
      .then(quote => (this.setState({quote})));
  }

  // random number generator
  randomNumber(num) {
    const min = 0;
    const max = num;
    const rand = Math.floor(min + Math.random() * (max - min));
    return rand;
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
      randQuote = {content: "“The Earth is what we all have in common.”", person: "— Wendell Berry"}
    }
    
    return (
      <div className="Progress" style = {style}>
        <p className = "Transition-Header">Level {this.state.level} </p>
        <Transition hero = {this.state.hero} name = {this.state.name} life = {this.state.life} score = {this.state.score}/>
        <div className = "Quote-Box">
          <p className = "Quote-Content">{randQuote.content}</p>
          <p className = "Quote-Person">{randQuote.person}</p>
        </div>
        <div className="Progress-Btn">
          <Link className ="Progress-LeaderBoardBtn" style = {leaderboard} to = "/LeaderBoard">LEADERBOARD</Link>
          <Link className ="Progress-RegenBtn" style = {regen} to = {{
            pathname: "/Game",
            state: {
              app1: this.state.app1,
              app2: this.state.app2,
              app3: this.state.app3,
              app4: this.state.app4,
              app5: this.state.app5
            }
          }}>REGEN</Link>
          <Link className ="Progress-BackBtn" to = "/">BACK TO MAIN</Link>
        </div>
      </div>
    );
  }
}

export default Progress;
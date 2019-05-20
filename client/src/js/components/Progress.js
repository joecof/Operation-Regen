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
      life: 3,
      score: 200
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

    // Stores quote query result
    var list = this.state.quote;
    var randQuote;
    
    if (list.length !== 0) {
      randQuote = list[this.randomNumber(list.length)];
    } else {
      randQuote = {content: " ", person: " "}
    }
    
    return (
      <div className="Progress" style={style}>
        <p className = "Transition-Header">Level {this.state.level} </p>
        <Transition hero = {this.state.hero} name = {this.state.name} life = {this.state.life} score = {this.state.score}/>
        <div className = "Quote-Box">
          <p className = "Quote-Content">{randQuote.content}</p>
          <p className = "Quote-Person">{randQuote.person}</p>
        </div>
        <div className="Progress-Btn">
          <Link className ="Progress-RegenBtn" to = "/Game">REGEN</Link>
          <Link className ="Progress-BackBtn" to = "/">BACK TO MAIN</Link>
        </div>
      </div>
    )
  }
}
export default Progress;
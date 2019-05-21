import React, { Component } from 'react'
import '../../css/Transition.css';

export default class Transition extends Component {
  constructor() {
    super();

    this.state = {
      transitionImage: 10
    };

    // Transition image background array
    this.transitions = new Array(this.state.transitionImage + 1);

    for (let i = 0; i < this.state.transitionImage; i++) {
      this.transitions[i] = "url(../../img/transitionbase" + i + ".png)";
    }
  }

  // Transition image changes based on the score
  changeTransition() {
    var score = this.props.score;
    
    for (let i = 0; i < this.state.transitionImage; i++) {
      if (score < 100 * (i + 1)) {
        return i;
      }
    }
  }

  render() {
    var style = {
      backgroundImage: "url(../../img/transitionbase" + this.props.level  + ".png)"
    }
    
    return (
      <div className = "Transition" style = { style }>
        <span> Hero: {this.props.name}</span>
        <p className = "Transition-Score"> Score: {this.props.score} </p>
        <img className = "Transition-Hearts" src = {require("../../img/lives" + this.props.life + ".png")} alt = ""/>
        <img className = "Transition-Hero" src = {require("../../img/hero" + this.props.hero + "H.png")} alt = ""/>
      </div>
    )
  }
}

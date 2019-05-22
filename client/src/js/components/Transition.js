import React, { Component } from 'react'
import '../../css/Transition.css';

export default class Transition extends Component {
  constructor() {
    super();

    this.state = {
      transitionImage: 10
    };

    // Transition image background array
    this.transitions = new Array(this.state.transitionImage);

    for (let i = 0; i < this.state.transitionImage; i++) {
      this.transitions[i] = "url(../../img/transitionbase" + i + ".png)";
    }
  }

  // Transition image changes based on the score
  changeTransition() {
    var score = this.props.score;
    
    for (let i = 0; i < this.state.transitionImage; i++) {
      if (score < 1000 * (i + 1)) {
        return i;
      }
    }
  }

  // Apply number format
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    var style = {
<<<<<<< HEAD
      backgroundImage: "url(../../img/transitionbase" + this.changeTransition() + ".png)"
=======
      // backgroundImage: "url(../../img/transitionbase" + this.props.level  + ".png)"
      backgroundImage: "url(../../img/transitionbase9.png)"

>>>>>>> ivan
    }
    
    return (
      <div className = "Transition" style = {style}>
        <span className="Transition-Name"> Hero: {this.props.name}</span>
<<<<<<< HEAD
        <p className = "Transition-Score"> Score: {this.formatNumber(this.props.score)} </p>
        <img className = "Transition-Hearts" src = {require("../../img/lives" + this.props.life + ".png")} alt = ""/>
        <img className = "Transition-Hero" src = {require("../../img/hero" + this.props.hero + (this.props.life !== 0 ? "H" : "D") + ".png")} alt = ""/>
=======
        <p className = "Transition-Score"> Score: {this.props.score} </p>
        <img className = "Transition-Hearts" src = {require("../../img/lives" + this.props.life + ".png")} alt = ""/>
        <img className = "Transition-Hero" src = {require("../../img/hero" + this.props.hero + "H.png")} alt = ""/>
>>>>>>> ivan
      </div>
    );
  }
}

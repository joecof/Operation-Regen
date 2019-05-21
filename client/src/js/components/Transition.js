import React, { Component } from 'react'
import '../../css/Transition.css';

export default class Transition extends Component {
  constructor() {
    super();

    this.state = {
      transitionImage: 10
    };

    this.backgrounds = new Array(this.state.transitionImage + 1);

    for (let i = 0; i < this.state.transitionImage; i++) {
      this.backgrounds[i] = "url(../../img/transitionbase" + i + ".png)";
    }
  }

  // Apply number format
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    var style = {
      backgroundImage: this.backgrounds[7]
    }
    
    return (
      <div className = "Transition" style = { style }>
        <span>Hero: {this.props.name}</span>
        <p className = "Transition-Score"> Score: {this.formatNumber(7777)} </p>
        <img className = "Transition-Hearts" src = {require('../../img/lives5.png')}/>
        <img className = "Transition-Hero" src = {require("../../img/hero" + this.props.hero + "H.png")}/>
      </div>
    )
  }
}

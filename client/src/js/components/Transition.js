import React, { Component } from 'react'
import '../../css/Transition.css';


export default class Transition extends Component {
  constructor() {
    super();
  }

  // Apply number format
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    var style = {
      backgroundImage: 'url(../img/transi5.png)'
    }

    return (
      <div className = "Transition" style = { style }>
        <p className = "Transition-Score"> Score: {this.formatNumber(7777)} </p>
        <img className = "Transition-Hearts" src = {require('../../img/lives5.png')}/>
        <img className = "Transition-Hero" src = {require("../../img/hero" + this.props.hero + "H.png")}/>
      </div>
    )
  }
}

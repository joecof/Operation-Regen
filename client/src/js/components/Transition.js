import React, { Component } from 'react'
import '../../css/Transition.css';


export default class Transition extends Component {
  render() {

    var style = {
      backgroundImage: 'url(../img/transi5.png)',
      backgroundSize: '100% 100%'
    }

    return (
      <div className = "Transition" style = { style }>
        <p className = "Transition-Score"> Score: 100 </p>
        <img className = "Transition-Hearts "src = {require('../../img/lives5.png')} alt = ""/>
        <img className = "Transition-Hero "src = {require('../../img/hero1H.png')} alt = ""/>
      </div>
    )
  }
}

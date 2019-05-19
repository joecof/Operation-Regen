import React, { Component } from 'react'
import '../../css/Transition.css';


export default class Transition extends Component {
  render() {

    var style = {
      backgroundImage: 'url(../img/transi.png)'
    }

    return (
      <div className = "Transition" style = { style }>
        <img className = "Transition-Hearts "src = {require('../../img/lives5.png')}/>
        <img className = "Transition-Hero "src = {require('../../img/hero1H.png')}/>
      </div>
    )
  }
}

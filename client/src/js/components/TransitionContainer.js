import React, { Component } from 'react'
import Transition from './Transition'
import '../../css/TransitionContainer.css';
import {Link} from "react-router-dom";


export default class TransitionContainer extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className = 'TransitionContainer'>
        <p className = "TransitionContainer-Header">Level One: Warm Up </p>
        <Transition />
        <div className="Transition-Btn">
          <button className ="TransitionContainer-RegenBtn" onClick = {this.props.gameInit} > REGEN </button>
          <button className ="TransitionContainer-BackBtn" to = "/"> BACK TO MAIN </button>
        </div>
      </div>
    )
  }
}

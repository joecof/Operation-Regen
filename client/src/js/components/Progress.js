import React, { Component } from 'react';
import '../../css/Progress.css';
import GameContainer from './GameContainer';
import Transition from './Transition';
import {Link} from "react-router-dom";
import '../../img/lives5.png'


class Progress extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var style = {
      backgroundImage: 'url(../img/bg_transition_brown.jpg)'
    }

    return (
      <div className="Progress" style={style}>
        <p className = "Transition-Header">Level One: Warm Up </p>

        <Transition />
        <p> "Peace begins with a smile.." - Ivan Chen </p>
        <div className="Progress-Btn">
          <Link className ="Progress-RegenBtn" to = "/Game">REGEN</Link>
          <Link className ="Progress-BackBtn" to = "/">BACK TO MAIN</Link>
        </div>
      </div>
    )
  }
}
export default Progress;
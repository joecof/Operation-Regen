import React, { Component } from 'react';
import '../../css/Transition.css';
import {Link} from "react-router-dom";


class Transition extends Component {
  render() {
    var style = {
      backgroundImage: 'url(../img/bg_transition_brown.jpg)'
    }

    return (
      <div className="Transition" style={style}>
      
        <div className="Transition-Btn">
          <Link className ="Transition-RegenBtn" to = "/Transition">REGEN</Link>
          <Link className ="Transition-BackBtn" to = "/">BACK TO MAIN</Link>
        </div>

      </div>
    )
  }
}

export default Transition

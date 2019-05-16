import React, { Component } from 'react';
import '../../css/Transition.css';

class Transition extends Component {
  render() {
    var style = {
      backgroundImage: 'url(../img/bg_transition_brown.jpg)'
    }

    return (
      <div className="Transition" style={style}>
      </div>
    )
  }
}

export default Transition

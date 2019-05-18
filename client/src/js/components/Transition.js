<<<<<<< HEAD
import React, { Component } from 'react'
import Credits from './Credits'

import Header from './Header'
import GameContainer from './GameContainer'
import '../../css/Transition.css';

export default class Transition extends Component {

  render() {

    const BackgroundHead = {
      // backgroundImage: 'url(' + require('../../img/bg2.jpg') + ')',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // backgroundAttachment: 'fixed',
      backgroundColor: 'white'

      }
      
    return (
      <div className = "Transition">
        <GameContainer /> 
        {/* <Credits /> */}
=======
import React, { Component } from 'react';
import '../../css/Transition.css';

class Transition extends Component {
  render() {
    var style = {
      backgroundImage: 'url(../img/bg_transition_brown.jpg)'
    }

    return (
      <div className="Transition" style={style}>
>>>>>>> dev
      </div>
    )
  }
}

export default Transition

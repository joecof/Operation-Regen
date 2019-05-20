import React, { Component } from 'react';
import GameContainer from './GameContainer'

import '../../css/Game.css';
import TransitionContainer from './TransitionContainer';
import '../../img/lives5.png'


class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transition: true,
      transitionScene: 1
    }

    this.gameInit = this.gameInit.bind(this);
    this.transitInit = this.transitInit.bind(this);
  }

  gameInit() {
    this.setState({transition: false});
  }

  transitInit() {
    this.setState({transition: true});
  }
  
  render() {
    var style = {
      backgroundImage: 'url(../img/bg_transition_brown.jpg)'
    }

    return (
      <div className="Game" style={style}>
        {(this.state.transition === true) ? 
        <TransitionContainer transition = { this.state.transition }  gameInit = {this.gameInit}/> : 
        <GameContainer transition = { this.state.transition } transitInit = { this.transitInit }/>}
      </div>
    )
  }
}
export default Game;
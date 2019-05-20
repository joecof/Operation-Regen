import React, { Component } from 'react'

import '../../css/GameContainer.css';
import PhaserGame from '../phaser/PhaserGame';

class GameContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      game: null,
      lives: 5,
      transition: this.props.transition      
    }
  }

  componentDidMount() {
    this.game = new PhaserGame(this)
  }

  componentDidUpdate() {
    return true;
  }

  render() {
    return (
      <div className = "GameContainer" id ="gameContainer"/>

    )
  }
}

export default GameContainer;

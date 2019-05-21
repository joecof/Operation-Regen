import React, { Component } from 'react'

import '../../css/GameContainer.css';
import PhaserGame from '../phaser/PhaserGame';

class GameContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      game: null,
    }
  }

  componentDidMount() {
    this.game = new PhaserGame(this)
  }

  componentDidUpdate() {
    return false;
  }

  render() {
    return (
      <div className = "GameContainer" id ="gameContainer"/>
    )
  }
}

export default GameContainer;

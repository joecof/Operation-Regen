import React, { Component } from 'react'

import '../../css/GameContainer.css';
import Game from '../phaser/Game';

class GameContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: null,
      lives: 5
    }
  }

  componentDidMount() {
    this.game = new Game(this)

  }

  componentDidUpdate() {
    return true;
  }

  componentUnmount() {
   this.setState({game: null})
}

  render() {
    return (
      <div className = "GameContainer" id = "gameContainer" />
    )
  }
}

export default GameContainer;

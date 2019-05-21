import React, { Component } from 'react'
import '../../css/GameContainer.css';
import PhaserGame from '../phaser/PhaserGame';

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null,
      lives: 5
    }
  }

  componentDidMount() {
    this.game = new PhaserGame(this)

  }

  componentDidUpdate() {
    return true;
  }

  componentUnmount() {
   this.setState({game: null})
  }

  render() {
    return (
      <div className = "GameContainer" id = "GameContainer" />
    )
  }
}

export default GameContainer;

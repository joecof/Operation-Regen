import React, { Component } from 'react'

import '../../css/GameContainer.css';
import PhaserGame from '../phaser/PhaserGame';

class GameContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      game: null,
      transition: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ transition: nextProps.test });
  }

  componentDidMount() {
    this.game = new PhaserGame(this)
  }

  componentDidUpdate() {
    if(this.state.transition === true ) {
      this.game = null;
    }
    return true;
  }

  render() {
    return (
      <div className = "GameContainer" id ="gameContainer"/>

    )
  }
}

export default GameContainer;

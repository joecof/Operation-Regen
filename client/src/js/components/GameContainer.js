import React, { Component } from 'react'
import '../../css/GameContainer.css';
import PhaserGame from '../phaser/PhaserGame';
import PhaserGame1 from '../phaser/PhaserGame1';
import PhaserGame2 from '../phaser/PhaserGame2';
import PhaserGame3 from '../phaser/PhaserGame3';

class GameContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      game: null
    }
  }

  componentDidMount() {
    switch(this.props.game) {
      case 1:
        this.setState({game: new PhaserGame(this)});
        break;
      case 3: 
        this.setState({game: new PhaserGame1(this)});
        break;
      case 5: 
        this.setState({game: new PhaserGame2(this)});
        break;
      case 7: 
        this.setState({game: new PhaserGame3(this)});
    }
  }

  render() {
    return (
      <div className = "GameContainer" id ="gameContainer"/>
    )
  }
}

export default GameContainer;

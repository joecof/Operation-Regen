import React, { Component } from 'react'
import '../../css/GameContainer.css';
import PhaserGame1 from '../phaser/PhaserGame1';
import PhaserGame2 from '../phaser/PhaserGame2';
import PhaserGame3 from '../phaser/PhaserGame3';
import PhaserGame4 from '../phaser/PhaserGame4';
import PhaserGame5 from '../phaser/PhaserGame5';
import PhaserGame6 from '../phaser/PhaserGame6';
import PhaserGame7 from '../phaser/PhaserGame7';
import PhaserGame8 from '../phaser/PhaserGame8';
import PhaserGame9 from '../phaser/PhaserGame9';
import PhaserGame10 from '../phaser/PhaserGame10';

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
        this.setState({game: new PhaserGame1(this)});
        break;
      case 3: 
        this.setState({game: new PhaserGame2(this)});
        break;
      case 5: 
        this.setState({game: new PhaserGame3(this)});
        break;
      case 7: 
        this.setState({game: new PhaserGame4(this)});
        break;
      case 9: 
        this.setState({game: new PhaserGame5(this)});
        break;
      case 11: 
        this.setState({game: new PhaserGame6(this)});
        break;
      case 13: 
        this.setState({game: new PhaserGame7(this)});
        break;
      case 15: 
        this.setState({game: new PhaserGame8(this)});
        break;
      case 17: 
        this.setState({game: new PhaserGame9(this)});
        break;
      case 19: 
        this.setState({game: new PhaserGame10(this)});
        break;
      default:
    }
  }

  render() {
    return (
      <div className = "GameContainer" id ="gameContainer"/>
    )
  }
}

export default GameContainer;

import React, { Component } from 'react'

import {Link} from "react-router-dom";
import '../../css/GameContainer.css';
import Game from '../phaser/Game';

class GameContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: null
    }
  }

  componentDidMount() {
    this.setState({game: new Game(this)})
  }

  componentDidUpdate() {
    return false;
  }

  componentUnmount() {
   this.setState({game: null})
}

  render() {
    return (
      <div className = "GameContainer" id = "gameContainer">
        {/* <div id = "gameContainer" / > */}
        <div className="Game-BtnContainer">
          {/* <button className="Game-Btn">
            <Link className = "Game-BtnStyle" to="/">Back To Main</Link>
          </button> */}
        </div>
      </div>
    )
  }
}

export default GameContainer;

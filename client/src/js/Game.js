import Snake from 'react-snake-game';
import {Link} from "react-router-dom";
import '../css/Game.css';


import React, { Component } from 'react'

class Game extends Component {
  render() {
    return (
      <div className = "Game">
        <Snake />
        <div className="Game-BtnContainer">
          <button className="Game-Btn">
            <Link className = "Game-BtnStyle" to="/">Back To Main</Link>
          </button>
        </div>
      </div>
    )
  }
}

export default Game;

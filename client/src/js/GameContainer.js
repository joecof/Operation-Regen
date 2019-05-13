import React, { Component } from 'react'

import {Link} from "react-router-dom";
import '../css/Game.css';
import Game from './Game';


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

  render() {
    return (
      <div className = "GameContainer">
        <div id="gameContainer" />
        <div className="Game-BtnContainer">
          <button className="Game-Btn">
            <Link className = "Game-BtnStyle" to="/">Back To Main</Link>
          </button>
        </div>
      </div>
    )
  }
}

export default GameContainer;

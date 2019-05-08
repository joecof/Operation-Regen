import React, { Component } from 'react'
import '../css/PlayBox.css';

import {Link} from "react-router-dom";
import Post from './Post';
import CharacterSelection from './CharacterSelection'


class PlayBox extends Component {
  render() {
    return (
      <div className = "PlayBox">
        <div className ="PlayBox-Form">
          <CharacterSelection />
          <Post />
          <div className="PlayBox-Btn">
            <Link className ="PlayBox-PlayBtn" to = "/Play">PLAY</Link>
            <Link className ="PlayBox-LeaderBoardBtn" to = "LeaderBoard">LEADERBOARD</Link>
          </div>
        </div>      
      </div>
    )
  }
}

export default PlayBox;

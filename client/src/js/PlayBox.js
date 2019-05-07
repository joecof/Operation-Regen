import React, { Component } from 'react'
import '../css/PlayBox.css';

import {Link} from "react-router-dom";
import Post from './Post';


class PlayBox extends Component {
  render() {
    return (
      <div className = "PlayBox">
        <div className ="PlayBox-Form">
        <p className = "PlayBox-Header">Username</p>
          <Post />
          <div className="PlayBox-Btn">
            <Link className ="PlayBox-PlayBtn" to = "/">PLAY</Link>
            <Link className ="PlayBox-LeaderBoardBtn" to = "LeaderBoard">LEADERBOARD</Link>
          </div>
        </div>      
      </div>
      
    )
  }
}

export default PlayBox;

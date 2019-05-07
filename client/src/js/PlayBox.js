import React, { Component } from 'react'
import '../css/PlayBox.css';
import {Route, Switch, Link} from "react-router-dom";

class PlayBox extends Component {
  render() {
    return (
      <div className = "PlayBox">

        <form className ="PlayBox-Form">

          <input className="PlayBox-Input" type = "text" placeholder = "Username"/>

          <div className="PlayBox-Btn">
            <button className="PlayBox-PlayBtn">PLAY </button>
            <button className ="PlayBox-Login" to="">LOGIN </button>
          </div>

        </form> 

        <div className ="PlayBox-Links">
          <Link className ="PlayBox-LeaderBoard" to="/LeaderBoard">LEADERBOARD</Link>
          <Link className ="PlayBox-Register" to="/">REGISTER</Link>
        </div>
       
      </div>
      
    )
  }
}

export default PlayBox;
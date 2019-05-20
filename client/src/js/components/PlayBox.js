import React, { Component } from 'react'
import '../../css/PlayBox.css';

import {Link} from "react-router-dom";
import Post from './Post';
import CharacterSelection from './CharacterSelection'


class PlayBox extends Component {
  constructor() {
    super();
    
    this.state = {
      selectedHero: null
    }
  }

  // Sets state when a hero is selected
  selectHero(hero) {
    this.setState({selectedHero: hero});
  }

  render() {
    return (
      <div className = "PlayBox">
        <div className ="PlayBox-Form">
          <CharacterSelection hero = {this.selectHero.bind(this)}/>
          <Post />
          <div className="PlayBox-Btn">
            <Link className ="PlayBox-PlayBtn" to = {{
              pathname: "/Transition",
              state: {hero: this.state.selectedHero}
            }}>PLAY</Link>
            <Link className ="PlayBox-LeaderBoardBtn" to = "/LeaderBoard">LEADERBOARD</Link>
          </div>
        </div>      
      </div>
    )
  }
}

export default PlayBox;

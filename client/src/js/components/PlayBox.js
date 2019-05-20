import React, { Component } from 'react'
import '../../css/PlayBox.css';
import {Link} from "react-router-dom";
import Post from './Post';
import CharacterSelection from './CharacterSelection'


class PlayBox extends Component {
  constructor() {
    super();

    this.state = {
      selectedHero: null,
      heroName: null,
      nameChange: false
    }
  }

  // Sets state when a hero is selected
  selectHero(hero) {
    this.setState({selectedHero: hero, nameChange: false});
  }

  // Sets state when hero name is entered
  enterHeroName(name) {
    this.setState({heroName: name, nameChange: true});
  }

  render() {
    return (
      <div className = "PlayBox">
        <div className ="PlayBox-Form">
          <CharacterSelection hero = {this.selectHero.bind(this)} flag = {this.state.nameChange}/>
          <Post name = {this.enterHeroName.bind(this)}/>
          <div className="PlayBox-Btn">
            <Link className ="PlayBox-PlayBtn" to = {{
              pathname: "/Transition",
              state: {hero: this.state.selectedHero, name: this.state.heroName}
            }}>PLAY</Link>
            <Link className ="PlayBox-LeaderBoardBtn" to = "/LeaderBoard">LEADERBOARD</Link>
          </div>
        </div>      
      </div>
    )
  }
}

export default PlayBox;

import React, { Component } from 'react'
import '../../css/PlayBox.css';
import {Link} from "react-router-dom";
import Post from './Post';
import CharacterSelection from './CharacterSelection'
import { message } from 'antd';

class PlayBox extends Component {
  constructor() {
    super();

    this.state = {
      selectedHero: null,
      heroName: null,
      nameChange: false
    };

    this.checkUserInput = this.checkUserInput.bind(this);
    this.returnPath = this.returnPath.bind(this);
  }

  // Sets state when a hero is selected
  selectHero(hero) {
    this.setState({selectedHero: hero, nameChange: false});
  }

  // Sets state when hero name is entered
  enterHeroName(name) {
    this.setState({heroName: name, nameChange: true});
  }

  info1 = (e) => {
    message.info(e,1);
  };

  // Checks if user have selected hero and have entered hero name
  checkUserInput() {
    if (this.state.selectedHero === null) {
      this.info1('Select your hero!');
      return "";
    } else if (this.state.heroName === null || this.state.heroName === "") {
      this.info1('Enter your hero name!');
      this.setState({nameChange: true});
      return "";
    }
  } 

  // If hero is selected and name is entered, it returns path name for transition page
  returnPath() {
    if (this.state.heroName === null || this.state.heroName === "" || this.state.selectedHero === null) {
      return "";
    } else {
      return "/Progress";
    }
  }

  render() {
    return (
      <div className = "PlayBox">
        <div className ="PlayBox-Form">
          <CharacterSelection 
            hero = {this.selectHero.bind(this)} 
            flag = {this.state.nameChange}/>
          <Post 
            name = {this.enterHeroName.bind(this)}
            />
          <div className="PlayBox-Btn">
            <Link 
              className ="PlayBox-PlayBtn" 
              onClick = {this.checkUserInput}
              to = {{
                pathname: this.returnPath(),
                state: {hero: this.state.selectedHero, name: this.state.heroName}
              }}> PLAY </Link>
            <Link 
              className ="PlayBox-LeaderBoardBtn" 
              to = "/LeaderBoard"> LEADERBOARD </Link>
          </div>
          <Link className = "Credits" to = "/Credits"> Dev Team </Link>
        </div>  
      </div>
    );
  }
}

export default PlayBox;

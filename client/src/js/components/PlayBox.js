import React, { Component } from 'react'
import '../../css/PlayBox.css';
import {Link} from "react-router-dom";
//import PopUp from './PopUp';
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
      //togglePopUp: false,
      //text: ""
    }

    this.checkUserInput = this.checkUserInput.bind(this);
    this.returnPath = this.returnPath.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  /*
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }
  */

  // Sets state when a hero is selected
  selectHero(hero) {
    this.setState({selectedHero: hero, nameChange: false});
  }

  // Sets state when hero name is entered
  enterHeroName(name) {
    this.setState({heroName: name, nameChange: true});
  }

  info1 = () => {
    message.info('Select your hero!');
  };

  info2 = () => {
    message.info('Enter your hero name!');
  };

  // Checks if user have selected hero and have entered hero name
  checkUserInput_() {
    if (this.state.selectedHero === null) {
      /*
      this.setState({togglePopUp: true,
                     text: "Select Your Hero"
      })
      */
      this.info1();
      return "";
    } else if (this.state.heroName === null || this.state.heroName === "") {
      /*
      this.setState({togglePopUp: true,
                     text: "Choose Your Hero Name"
      });
      */
      this.info2();
      this.setState({nameChange: true});
      return "";
    }
  } 

  /*
  handleClick(e) {
    if(this.node.contains(e.target)) {
      this.setState({togglePopUp: false})
    }
  }
  */

  // If hero is selected and name is entered, it returns path name for transition page
  returnPath() {
    if (this.state.heroName === null || this.state.heroName === "" || this.state.selectedHero === null) {
      return "";
    } else {
      return "/Progress";
    }
  }

  checkUserInput = () => {
    console.log("hero name: " + this.state.heroName);
    fetch('/Progress', {
      method: 'POST',
      body: {
        user: this.state.heroName
      }
        //list: list[0],
        //userName: this.state.name
        //score: score,
        //heroNo: this.state.hero,
        //levelNo: level
    })
      .then(res => res.json())
      .then(() => {console.log("hello");});
  }

  render() {
    return (
      <div className = "PlayBox">
        {/* ref={node => this.node = node} */}
        <div className ="PlayBox-Form">
          <CharacterSelection 
            hero = {this.selectHero.bind(this)} 
            flag = {this.state.nameChange}/>
          <Post 
            name = {this.enterHeroName.bind(this)}/>
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
        </div>  


      {/* (this.state.togglePopUp === true) ? 
        <PopUp 
           text = { this.state.text }
      /> : <div/> */}

      </div>
    );
  }
}

export default PlayBox;

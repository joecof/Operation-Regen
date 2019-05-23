import React, { Component } from 'react';
import '../../css/Progress.css';
import Transition from './Transition';
import GameContainer from './GameContainer';
import { Link } from "react-router-dom";

class Progress extends Component {
  constructor() {
    super();

    this.state = {
      quote: [],
      listNo: null,
      hero: 99,
      name: " ",
      winScore: 1000,
      loseScore: 300,
      score: 50,
      life: 4,
      round: 1,
      level: 1,
      numOfGames: 5,
      game: 0,
      transition: true,
    };

    this.toggleTransition = this.toggleTransition.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.toggleGame = this.toggleGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    fetch('/Quote')
      .then(res => res.json())
      .then(quote => (this.setState({ quote })));

  }
  // Fetch quote query result
  componentDidMount() {
    this.setState({
      hero: this.props.location.state.hero,
      name: this.props.location.state.name
    });

  }

  insertProgress = () => {
    fetch('/Progress', {
      method: 'POST',
      data: {
        user: this.state.name
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

  // generates a random number
  randomNumber(num) {
    const min = 0;
    const max = num;
    const rand = Math.floor(min + Math.random() * (max - min));
    return rand;
  }


  // toggles between transition component and phaser game
  toggleTransition() {
    this.setState({
      transition: !this.state.transition,

    }); 
  }

  toggleGame() {
    this.setState({
      game: ++this.state.game % this.state.numOfGames
    }); 
  }

  handleClick() {
    this.toggleTransition();
    this.toggleGame();
  }

  handleSubmit = () => {
    fetch('/Progress', {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
      
        score: this.state.score,
        hero: this.state.hero,
        level: this.state.level

      }),
    })
      .then(res=>res.json())
      .then(data=>{ console.log("success!"); })
  };

  // updates progress after game 
  updateProgress(con) {
    var score = this.state.score;
    var life = this.state.life;
    var round = this.state.round;
    var level = this.state.level;
    var list = this.state.listNo;
    var name = this.state.name;

    score = con ? score + this.state.winScore : score + this.state.loseScore;
    life = con ? life : --life;

    if (life > 0) {
      this.setState({
        score: score,
        life: life,
        round: round + Math.floor(level / this.state.numOfGames),
        level: ++level,
      });
    } else if (life === 0) {
      this.setState({
        score: score,
        life: life
      });

      console.log("user: " + name);
      
    }
  }

  render() {
    var regen = {
      display: this.state.life === 0 ? "none" : "block"
    }

    var leaderboard = {
      display: this.state.life === 0 ? "block" : "none"
    }

    // Stores quote query result
    var list = this.state.quote;
    var randQuote;

    if (list.length !== 0) {
      randQuote = list[this.randomNumber(list.length)];
    } else {
      randQuote = {
        content: "“The Earth is what we all have in common.”",
        person: "— Wendell Berry"
      };
    }

    return (
      <div className="Progress" >
        {(this.state.transition === true) ?
          <div>
            <p className="Transition-Header">Level {this.state.level}</p>
            <Transition
              {...this.state}
            />
            <div className="Quote-Box">
              <p className="Quote-Content">{randQuote.content}</p>
              <p className="Quote-Person">{randQuote.person}</p>
              {/* <button >Test</button> */}
            </div>
            <div className="Progress-Btn">
              <Link className ="Progress-LeaderBoardBtn" style = {leaderboard}  onClick={this.handleSubmit} to = "/LeaderBoard">LEADERBOARD</Link>
              <button className="Progress-RegenBtn" style = {regen} onClick = {this.handleClick} >REGEN</button>
              <Link className="Progress-BackBtn" to = "/">BACK TO MAIN</Link>
            </div>
          </div> :
          <GameContainer
            transition = {this.state.transition}
            handleClick = {this.handleClick}
            toggleTransition = {this.toggleTransition}
            game = {this.state.game}
            updateProgress = {this.updateProgress}
          
          />
        }
      </div>
    )
  }
}

export default Progress;
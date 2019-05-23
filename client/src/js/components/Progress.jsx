import React, { Component } from 'react';
import '../../css/Progress.css';
import Transition from './Transition';
import GameContainer from './GameContainer';
import { Link } from 'react-router-dom';

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
      score: 0,
      life: 5,
      round: 1,
      level: 1,
      numOfGames: 10,
      game: 0,
      transition: true,
      gameEnd: false
    };

    this.toggleTransition = this.toggleTransition.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.toggleGame = this.toggleGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fetch quote query result
  componentDidMount() {
    this.setState({
      hero: this.props.location.state.hero,
      name: this.props.location.state.name
    });    
    
    fetch('/Quote')
      .then(res => res.json())
      .then(quote => (this.setState({ quote })));
  }

  insertProgress = () => {
    fetch('/Progress', {
      method: 'POST',
      data: {
        user: this.state.name,
        score: this.state.score,
        hero: this.state.hero,
        level: this.state.level
      }
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
      game: ++this.state.game
    });
  }

  handleClick() {
    this.toggleTransition();
    if (this.state.game < this.state.numOfGames * 2 - 1) {
      this.toggleGame();
    }
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
    var game = this.state.game;
    var gameEnd = this.state.gameEnd;

    score = con ? score + this.state.winScore : score + this.state.loseScore;
    life = con ? life : --life;

    if (life === 0 || game >= this.state.numOfGames * 2 - 1) {
      gameEnd = !gameEnd;
      this.setState({
        score: score,
        life: life,
        gameEnd: gameEnd
      });
    } else {
      this.setState({
        score: score,
        life: life,
        round: round + Math.floor(level / this.state.numOfGames),
        level: ++level,
      });
    }
  }

  render() {
    var regen = {
      display: this.state.life === 0 || this.state.game >= this.state.numOfGames * 2 - 1 ? "none" : "block"
    }

    var leaderboard = {
      display: this.state.life === 0 || this.state.game >= this.state.numOfGames * 2 - 1 ? "block" : "none"
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
            
            </div>
            <div className="Progress-Btn">
              <Link className ="Progress-LeaderBoardBtn" style = {leaderboard}  onClick={this.handleSubmit} to = "/LeaderBoard">LEADERBOARD</Link>
              <button className="Progress-RegenBtn" style = {regen} onClick = {this.handleClick} >REGEN</button>
              <Link className="Progress-BackBtn" onClick = { document.location.reload } to = "/">BACK TO MAIN</Link>
            </div>
          </div> :
          <GameContainer
            transition = {this.state.transition}
            handleClick = {this.handleClick}
            toggleTransition = {this.toggleTransition}
            game = {this.state.game}
            updateProgress = {this.updateProgress}
            hero = { this.state.hero }
          />
        }
      </div>
    )
  }
}

export default Progress;

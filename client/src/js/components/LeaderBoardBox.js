import React, { Component } from 'react';
import {Link} from "react-router-dom";
import LeaderBoardItem from './LeaderBoardItem';
import LeaderBoardHeader from './LeaderBoardHeader';
import '../../css/LeaderBoardBox.css';

class LeaderBoardBox extends Component {
  // Initializes leaderboard array
  constructor() {
    super();
    this.state = {
      leaderboard: []
    };
  }

  // Fetch leaderboard query result
  componentDidMount() {
    fetch('/LeaderBoard')
      .then(res => res.json())
      .then(leaderboard => (this.setState({leaderboard})));
  }

  // Apply number format
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    return(
      <div className = "LeaderBoardBoxContainer" >
        <div className = "LeaderBoardBox"> 
          <h1 className = "LeaderBoardBox-Header">Leader Board</h1>
          <LeaderBoardHeader />
          {
            this.state.leaderboard.map((temp, i) => (
              <LeaderBoardItem key = {i} 
                rank = {++i}
                hero = {temp.heroNo}
                name = {temp.userName}
                level = {temp.levelNo}
                score = {this.formatNumber(temp.score)}
              />
            ))
          }
  
          <div className = "LeaderBoardBox-BtnContainer">
            <Link className = "LeaderBoardBox-Btn" onClick = {document.location.reload} to="/">BACK TO MAIN</Link>
          </div>
          
        </div>
      </div>
    )
  }
}

export default LeaderBoardBox

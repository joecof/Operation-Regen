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
      .then(leaderboard => (this.setState({leaderboard}))
      )
  }

  render() {
    // Stores leaderboard query result
    let list = this.state.leaderboard;
    // Initiate rank to 0
    let value = 0;

    return(
      <div className = "LeaderBoardBox"> 
        <h1 className = "LeaderBoardBox-Header">Leader Board</h1>
        <LeaderBoardHeader />
        {
          list.map(temp => (
            <LeaderBoardItem 
              rank = {++value}
              name = {temp.userName}
              score = {temp.score}
            />
          ))
        }

        <div className="LeaderBoardBox-BtnContainer">
          <button className="LeaderBoardBox-Btn">
            <Link className = "LeaderBoardBox-BtnStyle" to="/">Back To Main</Link>
          </button>
        </div>
      </div>
    )
  }
}

export default LeaderBoardBox

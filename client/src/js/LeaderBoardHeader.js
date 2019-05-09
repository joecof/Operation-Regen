import React, { Component } from 'react'
import '../css/LeaderBoardHeader.css';


class LeaderBoardHeader extends Component {
  render() {
    return (
      <div className = "LeaderBoardHeader"> 
        <div className = "LeaderBoardHeader-Wrapper">
          <div className = "LeaderBoardHeader-Rank">Rank</div>
          <div className = "LeaderBoardHeader-Name">Name</div>
          <div className = "LeaderBoardHeader-Score">Score</div>
        </div>
      </div>
    )
  }
}

export default LeaderBoardHeader;

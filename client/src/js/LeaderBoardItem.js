import React, { Component } from 'react'

import '../css/LeaderBoardItem.css';


class LeaderBoardItem extends Component {
  render() {
    return (
      <div className = "LeaderBoardItem">
        <ul className = "LeaderBoardItem-ul">
          <li className = "LeaderBoardItem-li">
            <div className="rank">Name</div>
            <div className="name">Rank</div>
            <div className="score">Score</div>
          </li>
        </ul>
      </div>
    )
  }
}


export default LeaderBoardItem;
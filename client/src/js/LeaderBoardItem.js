import React, { Component } from 'react'

import '../css/LeaderBoardItem.css';


class LeaderBoardItem extends Component {
  render() {
    return (
      <div className = "LeaderBoardItem">
        <ul className = "LeaderBoardItem-ul">
          <li className = "LeaderBoardItem-li">
            <div className="rank">{this.props.rank}</div>
            <div className="name">{this.props.name}</div>
            <div className="score">{this.props.score}</div>
          </li>
        </ul>
      </div>
    )
  }
}


export default LeaderBoardItem;
import React, { Component } from 'react'

import '../../css/LeaderBoardItem.css';


class LeaderBoardItem extends Component {
  static defaultProps = {
    rank: "999",
    hero: "1",
    name: "Uncle K",
    level: "1",
    score: "0"
  }

  render() {
    return (
      <div className = "LeaderBoardItem">
        <ul className = "LeaderBoardItem-ul">
          <li className = "LeaderBoardItem-li">
            <div className="rank">{this.props.rank}</div>
            <div className="hero">{this.props.hero}</div>
            <div className="name">{this.props.name}</div>
            <div className="level">{this.props.level}</div>
            <div className="score">{this.props.score}</div>
          </li>
        </ul>
      </div>
    )
  }
}

export default LeaderBoardItem;
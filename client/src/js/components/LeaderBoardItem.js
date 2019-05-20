import React, { Component } from 'react'
import '../../css/LeaderBoardItem.css';
//import { throwStatement } from '@babel/types';

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
            <div className="hero"><img src = {require("../../img/hero" + this.props.hero + "H.png")} alt="hero"/></div>
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
import React, { Component } from 'react'
import {Route, Switch, Link} from "react-router-dom";
import LeaderBoardItem from './LeaderBoardItem';
import '../css/LeaderBoardBox.css'


class LeaderBoardBox extends Component {
  render() {
    return(
      <div className = "LeaderBoardBox"> 

      <h1 className = "LeaderBoardBox-Header">Leader Board</h1>
        <LeaderBoardItem />
        <LeaderBoardItem />
        <LeaderBoardItem />
        <LeaderBoardItem />
      </div>
    )
  }
}

export default LeaderBoardBox

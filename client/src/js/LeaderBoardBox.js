import React, { Component } from 'react'
import {Link} from "react-router-dom";
import LeaderBoardItem from './LeaderBoardItem';
import LeaderBoardHeader from './LeaderBoardHeader';
import '../css/LeaderBoardBox.css'


class LeaderBoardBox extends Component {
  render() {
    return(
      <div className = "LeaderBoardBox"> 

      <h1 className = "LeaderBoardBox-Header">Leader Board</h1>
        <LeaderBoardHeader />
        <LeaderBoardItem 
          rank = "1"
          name = "Duc Pham"
          score = "1000"
        />
        <LeaderBoardItem 
          rank = "2"
          name = "Brendon Horning"
          score = "900"
        />
        <LeaderBoardItem 
          rank = "3"
          name = "Ho Joo"
          score = "800"
        />
        <LeaderBoardItem 
          rank = "4"
          name = "Ivan Chen"
          score = "700"
        />
        <LeaderBoardItem 
          rank = "5"
          name = "Joe Fong"
          score = "600"
        />

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
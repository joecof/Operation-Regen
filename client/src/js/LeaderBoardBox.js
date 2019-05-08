import React, { Component } from 'react'
import {Link} from "react-router-dom";
import LeaderBoardItem from './LeaderBoardItem';
import LeaderBoardHeader from './LeaderBoardHeader';
import '../css/LeaderBoardBox.css'

/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Leaderboard - Connected!");
});

var queries = {
	users: 'SELECT * FROM leaderboard ORDER BY score DESC, name'
};

const getList = (queryName, queryParams) => {
	return new Promise(function(resolve, reject){
		con.query(queries[queryName], queryParams, function(err, result, fields){
			if (!err) resolve(JSON.parse(JSON.stringify(result))); // Hacky solution
			else reject(err);
		});
	});
};

console.log(getList)
*/

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

import React, { Component } from 'react';
import '../css/App.css';
import {Route, Switch, Link} from "react-router-dom";
import Wrapper from './Wrapper';
import LeaderBoardBox from './LeaderBoardBox';
// import LeaderBoardItem from './LeaderBoardItem';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Wrapper />


        <div>
        {/* <LeaderBoardBox /> */}

        </div>

        <Route exact path = '/LeaderBoard' component = {LeaderBoardBox} />
      </div>
 
    );
  }
}

export default App;

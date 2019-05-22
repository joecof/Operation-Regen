import React, { Component } from 'react';
import '../../css/App.css';
import {Route, Switch} from "react-router-dom";
import PlayBoxContainer from './PlayBoxContainer';
import GameContainer from './GameContainer';
import LeaderBoardBox from './LeaderBoardBox';
import Progress from './Progress.jsx';
// import Game from './Game123';

import Credits from './Credits';

class App extends Component {
  render() {
    var style = {
      backgroundImage: 'url(../img/bg_river_forest.jpg)' 
    }

    return (
      <div className="App" style={style}>
        <Switch>
          <Route exact path = '/' component = {PlayBoxContainer} />
          <Route exact path = '/LeaderBoard' component = {LeaderBoardBox} />
          <Route exact path = '/GameContainer' component = {GameContainer} />
          <Route exact path = '/Progress' component = {Progress} />
          <Route exact path = '/' component = {Credits} />
          <Route render = {() =>  <h1> 404 Not Found </h1>}/>
        </Switch>  
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../../css/App.css';
// import {Route, Switch, Link} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import PlayBoxContainer from './PlayBoxContainer';
import LeaderBoardBox from './LeaderBoardBox';
//import GameContainer from './GameContainer';
import Transition from './Transition';
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
          {/*<Route exact path = '/Play' component = {GameContainer} />*/}
          <Route exact path = '/Transition' component = {Transition} />
          <Route exact path = '/' component = {Credits} />
          <Route render = {() =>  <h1> 404 Not Found </h1>}/>
        </Switch>  
      </div>
    
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../../css/App.css';
import {Route, Switch} from "react-router-dom";
import PlayBoxContainer from './PlayBoxContainer';
import GameContainer from './GameContainer';
<<<<<<< HEAD
import Progress from './Progress';
import Game from './Game';
=======
import LeaderBoardBox from './LeaderBoardBox';
import Progress from './Progress.jsx';
>>>>>>> 05cf52aa2c72503b03433b5123e0701499304301

import Credits from './Credits';

class App extends Component {
  render() {
    // var style = {
    //   backgroundImage: 'url(../../img/bg_river_forest.jpg)' 
    // }

    return (
      <div className="App" >
        <Switch>
          <Route exact path = '/' component = {PlayBoxContainer} />
          <Route exact path = '/LeaderBoard' component = {LeaderBoardBox} />
<<<<<<< HEAD
          <Route exact path = '/Game' component = {Game} />
          {/* <Route exact path = '/Transition' component = {Progress} /> */}
=======
          <Route exact path = '/GameContainer' component = {GameContainer} />
          <Route exact path = '/Progress' component = {Progress} />
          <Route exact path = '/Credits' component = {Credits} />
>>>>>>> 05cf52aa2c72503b03433b5123e0701499304301
          <Route render = {() =>  <h1> 404 Not Found </h1>}/>
        </Switch>  
      </div>
    );
  }
}

export default App;

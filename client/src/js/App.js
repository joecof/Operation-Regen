import React, { Component } from 'react';
import '../css/App.css';
// import {Route, Switch, Link} from "react-router-dom";
import {Route} from "react-router-dom";
import Wrapper from './Wrapper';
import LeaderBoardBox from './LeaderBoardBox';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path = '/' component = {Wrapper} />
        <Route exact path = '/LeaderBoard' component = {LeaderBoardBox} />
      </div>
    );
  }
}

export default App;

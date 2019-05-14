import React, { Component } from 'react';
import '../css/App.css';
// import {Route, Switch, Link} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import Wrapper from './Wrapper';
import LeaderBoardBox from './LeaderBoardBox';
import GameContainer from './GameContainer';
import Credits from './Credits';



class App extends Component {

  render() {

    return (
      <div className="App">
      <Switch>
        <Route exact path = '/' component = {Wrapper} />
        <Route exact path = '/LeaderBoard' component = {LeaderBoardBox} />
        <Route exact path = '/Play' component = {GameContainer} />
        <Route exact path = '/' component = {Credits} />
        <Route render = {() =>  <h1> 404 Not Found </h1>}/>
      </Switch>  
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

   



=======
>>>>>>> 3829459d60f98354837f7c163e300ddf638911ed
=======
    
>>>>>>> f9fdaf18d74cb40897e1fcca953b401715a2681b
    );
  }
}

export default App;

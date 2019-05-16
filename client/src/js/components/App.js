import React, { Component } from 'react';
import '../../css/App.css';
// import {Route, Switch, Link} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import PlayBoxContainer from './PlayBoxContainer';
import LeaderBoardBox from './LeaderBoardBox';
import GameContainer from './GameContainer';
import Credits from './Credits';
import Transition from './Transition';
import bg from "../../img/transitionbase9.png"




class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      BackgroundHead: {
        backgroundImage: `url(${bg})`
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixeds'
      }
    }

  }


    handler() {
      this.setState({
        BackgroundHead: {
          backgroundImage: `url(${bg})`
        }
      })
    };

    




  render() {

    return (
      <div className="App" style = {this.state.BackgroundHead}>
        <Switch>
          <Route exact path = '/' component = {PlayBoxContainer} />
          <Route exact path = '/LeaderBoard' component = {LeaderBoardBox} />
          {/* <Route exact path = '/Play' component = {GameContainer} /> */}
          <Route exact path = '/Play' component = {Transition} 
            
          />
          <Route exact path = '/' component = {Credits} />
          <Route render = {() =>  <h1> 404 Not Found </h1>}/>
        </Switch>  
      </div>
    
    );
  }
}


export default App;

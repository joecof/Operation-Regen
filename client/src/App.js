import React, { Component } from 'react';
import './css/App.css';
import Menu from './Menu';
import {Route, Switch, Link} from "react-router-dom";
import Post from './Post';
import Dog from './Dog';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Operation Regen
          </p>
          <div className = "App-Container">
            <div className = "App-Menu">
              <nav className = "App-NavMenu">
               <Menu />
              </nav>
            </div>

            <div className = "App-View">  
              <Route exact path ="/index" component = {Dog}/>
            </div> 
            
           
          </div>
          <Post />

        </header>
      </div>
    );
  }
}

export default App;

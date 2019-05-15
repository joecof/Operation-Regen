import React, { Component } from 'react'

import PlayBox from './PlayBox';
import Header from './Header';

import '../../css/Wrapper.css';



class PlayBoxContainer extends Component {
  render() {
  
    return(
      <div className = 'Wrapper'> 

        <Header />
        <PlayBox />
        
      </div>
    )
  }
}

export default PlayBoxContainer;

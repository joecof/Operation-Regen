import React, { Component } from 'react'

import PlayBox from './PlayBox';
import Header from './Header';
// import Credits from './Credits';
import '../../css/PlayBoxContainer.css';



class PlayBoxContainer extends Component {
  render() {


    // const BackgroundHead = {
    //   backgroundImage: 'url(' + require('../../img/transitionbase9.png') + ')',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundAttachment: 'fixed',
    //   backgroundColor: 'white'

    //   }
  
    return(
      <div className = 'PlayBoxContainer'> 
        <Header />
        <PlayBox />
      </div>
    )
  }
}

export default PlayBoxContainer;

import React, { Component } from 'react'

import '../../css/Transition.css';
import "../../img/transitionbase0.png"

export default class Transition extends Component {

  constructor(props) {
    super(props);



  }
  

  
  render() {

    // const BackgroundHead = {
    //   backgroundImage: `url(${"../../img/transitionbase0.png"})`,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundAttachment: 'fixeds'
    //   }
      


    return (
      <div className = "Transition" >

        <button className = "button" onClick = {this.props.changeBg("../../img/transitionbase0.png")}> Click me </button>
      

        {/* <img className = "Transition" src={require('../../img/transitionbase0.png')} alt = "Operation Regen"/> */}


      </div>
    )
  }
}

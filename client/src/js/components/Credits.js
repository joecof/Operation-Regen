import React, { Component } from 'react'
import {Link} from "react-router-dom";


import '../../css/Credits.css';

export default class Credits extends Component {
  render() {
    return (
      <div className = "Credits">
        <img className ="cast" src = {require("../../img/cast.png")}/>
        <p className="desc">Team 30 is a group comprised of Joe Fong, Duc Pham, Ivan Chen, Ho Joo Lee, and Brendon Horning. 
          We are a group of like-minded individuals with a focus on entertainment with a purpose.</p>
        
        <img className ="kid" src = {require("../../img/gamekid.png")}/>
        <p className="desc">Our idea for Operation Regen came from a desire for both children’s entertainment to have good, positive messages, and for children’s education to be fun and interactive. 
          Throughout each of our individual lives, the memories and messages that have stuck with us the most have been the times when we have had the most fun. Because of this, we feel that it’s important to get young children invested in entertainment with eco-friendly messages to hopefully impact them later in life. 
          The people we are attempting to target with Operation Reject will be the voters, electors, and decision-makers of the future.</p>

        <p className="desc">Operation Regen combines the microgame-style gameplay of titles such as WarioWare with the theming and positive messages of television series such as Captain Planet. 
          Our goal with Operation Regen is to provide a fun, addicting game for children to play and understand that there are simple ways that they can be heroes of the Earth.</p>



        <div className = "Credits-BtnContainer">
          <Link className = "Credits-Btn" onClick = {document.location.reload} to="/">BACK TO MAIN</Link>
        </div>


      </div>

  



    )
  }
}

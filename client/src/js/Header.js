import React, { Component } from 'react'

import '../img/logo.png';
import '../css/Header.css';

class Header extends Component {
  render() {
    return(
      <div className = "Header">
        <img className = "Header-Logo" src={require('../img/logo.png')} alt = "Operation Regen"/>
      </div>
    )
  }
}
export default Header

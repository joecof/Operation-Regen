import React, { Component } from 'react'

import '../img/logo.png';
import '../css/Header.css';

class Header extends Component {
  render() {
    return(
      <div className = "Header">
        <img className = "Header-logo" src={require('../img/logo.png')} />
      </div>
    )
  }
}
export default Header

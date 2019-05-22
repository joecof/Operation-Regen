import React, { Component } from 'react'
import '../../css/PopUp.css';

export default class PopUp extends Component {
  render() {
    return (
      <div className = 'PopUp'>
        <div className='PopUp_inner'>
          <h3> Hey You !</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

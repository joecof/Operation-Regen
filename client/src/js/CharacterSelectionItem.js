import React, { Component } from 'react'
import '../img/hero1H.png'
import '../css/CharacterSelectionItem.css'

class CharacterSelectionItem extends Component {
  render() {
    return (
        <img className = "CharacterSelectionItem-Img" src={require('../img/' + this.props.img + '.png')} alt = " "/>
    )
  }
}

export default CharacterSelectionItem;

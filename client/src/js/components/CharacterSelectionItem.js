import React, { Component } from 'react'
import '../../css/CharacterSelectionItem.css'

class CharacterSelectionItem extends Component {
  render() {
    const clicked = () => {
      //alert("clicked!");
      alert(this.props.hero);
    }

    return (
        <img className = "CharacterSelectionItem-Img" src = {require('../../img/hero' + this.props.hero + 'H.png')} alt = "hero" onClick = {() => clicked()} />
    )
  }
}

export default CharacterSelectionItem;

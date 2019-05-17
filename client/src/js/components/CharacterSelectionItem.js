import React, { Component } from 'react';
import '../../css/CharacterSelectionItem.css';

class CharacterSelectionItem extends Component {
  state = {
    aniIndex: 6
  }

  constructor(props) {
    super(props);
    var count = this.state.aniIndex;
    this.backgrounds = new Array(++count);

    for (let i = 0; i < count; i++) {
      this.backgrounds[i] = require('../../img/hero' + this.props.hero + 'ani' + i + '.png');
    }

    this.state = { imageIndex: 0 };
    this.toggleAnimate = this.toggleAnimate.bind(this);
  }

  //componentDidMount () {
  //  this.timeout = setTimeout(this.toggleAnimate, this.props.animDuration * 100);
  //}
  
  //componentWillUnmount() {
  // 	if (this.timeout) {
  //    clearTimeout(this.timeout);
  //  }
  //}

  toggleAnimate() {
    if (this.state.imageIndex !== 6) {  //this.stats.aniIndex
      this.setState(({imageIndex}) => {
        return { imageIndex: ++imageIndex };
      }, () => {
        this.timeout = setTimeout(
          this.toggleAnimate,
          this.props.animDuration * 100
        )
      })
    } else {

    }
  }

  render() {
    return (
        <img className = "CharacterSelectionItem-Img" src = {this.backgrounds[this.state.imageIndex]}
          alt = "hero" onClick = {this.toggleAnimate} />
    )
  }
}

export default CharacterSelectionItem;

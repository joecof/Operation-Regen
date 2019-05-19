import React, { Component } from 'react';
import '../../css/CharacterSelectionItem.css';

class CharacterSelectionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
      aniIndex: 6,
      selected: false
    }

    var count = this.state.aniIndex;
    this.backgrounds = new Array(++count);

    for (let i = 0; i < count; i++) {
      this.backgrounds[i] = require('../../img/hero' + this.props.hero + 'ani' + i + '.png');
    }

    this.selectHero = this.selectHero.bind(this);
    this.toggleAnimate = this.toggleAnimate.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.hero === this.props.cur && this.state.imageIndex === this.state.aniIndex) {
      this.setState({ imageIndex: 0, selected: false });
    }
  }

  toggleAnimate() {
    //console.log("local selected: " + selected + ", this.selected: " + this.state.selected);
    if (this.state.imageIndex !== this.state.aniIndex) {
      this.setState(
        ({ imageIndex }) => {
          return { imageIndex: ++imageIndex };
        }, () => {
          this.timeout = setTimeout(this.toggleAnimate, this.props.animDuration * 100)
        }
      );
      return true;
    } else {
      return false;
    }
  }

  /**
   * When a hero is clicked, calls hero animation function and 
   */
  selectHero() {
    let selected = this.toggleAnimate();
    this.setState({ selected: selected });
    
    if (selected) {
      this.props.last(this.props.hero);
    }
  }

  render() {
    /*if () {
      var style = {
        backgroundImage: 'url(../img/bg_river_forest2.jpg)'
      }
    }*/

    return (
        <img className = "CharacterSelectionItem-Img" src = {this.backgrounds[this.state.imageIndex]}
          alt = "hero" onClick = {() => this.selectHero()}/>
    )
  }
}

export default CharacterSelectionItem;

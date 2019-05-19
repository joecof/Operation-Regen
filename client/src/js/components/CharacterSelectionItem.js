import React, { Component } from 'react';
import '../../css/CharacterSelectionItem.css';

class CharacterSelectionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
      aniIndex: 7,
      selected: false,
      display: "none"
    }

    this.backgrounds = new Array(this.state.aniIndex + 1);

    for (let i = 0; i < this.state.aniIndex + 1; i++) {
      this.backgrounds[i] = require('../../img/hero' + this.props.hero + 'ani' + i + '.png');
    }

    this.selectHero = this.selectHero.bind(this);
    this.toggleAnimate = this.toggleAnimate.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.hero === this.props.cur) {
      this.setState({ imageIndex: 0, selected: false, display: "none" });
    }
  }

  toggleAnimate() {
    if (this.state.imageIndex < this.state.aniIndex) {
      this.setState(
        ({ imageIndex }) => {
          return { imageIndex: ++imageIndex };
        }, () => {
          this.timeout = setTimeout(this.toggleAnimate, this.props.animDuration * 100)
        }
      );
    }
  }

  /**
   * When a hero is clicked, calls hero animation function
   */
  selectHero() {
    if (this.state.selected) {
      return 0;
    }
    
    let selected = true;
    this.setState({ selected: selected, display: "block" });
    this.toggleAnimate();
    console.log("hero: " + this.props.hero + ", selected: " + selected);
    
    if (selected) {
      this.props.last(this.props.hero);
    }
  }

  render() {
    return (
      <div className = "CharacterSelectionItem-Container">
        <div className = "CharacterSelectionItem-TagBox">
          <img className = "CharacterSelectionItem-Tag" src = {require("../../img/red_triangle.png")}
            alt = "tag" style = {{display: this.state.display}}/>
        </div>
        <div className = "CharacterSelectionItem-ImgBox">
          <img className = "CharacterSelectionItem-Img" src = {this.backgrounds[this.state.imageIndex]}
            alt = "hero" onClick = {() => this.selectHero()}/>
        </div>
      </div>
    )
  }
}

export default CharacterSelectionItem;

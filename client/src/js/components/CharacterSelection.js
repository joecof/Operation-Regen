import React, { Component } from 'react';
import '../../css/CharacterSelection.css';
import CharacterSelectionItem from './CharacterSelectionItem';

class CharacterSelection extends Component {
  constructor() {
    super();
    this.state = {
      lastSelectedHero: null
    };
  }

  onChangeHero(hero) {
    this.setState({lastSelectedHero: hero});
    this.props.hero(hero);
  }

  render() {
    return (
      <div className ="CharacterSelection">
        <h1 className = "CharacterSelection-Header">Select Your Hero</h1>
        <div className = "CharacterSelection-Box">
          <CharacterSelectionItem 
            hero = {1} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero}
          />
          <CharacterSelectionItem 
            hero = {2} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero}
          />
          {/*<CharacterSelectionItem 
            hero = {3} animDuration = {1} 
          />
          <CharacterSelectionItem 
            hero = {4} animDuration = {1} 
          />*/}
          <CharacterSelectionItem 
            hero = {5} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero} 
          />
          <CharacterSelectionItem 
            hero = {6} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero}
          />
        </div>
      </div>
    )
  }
}

export default CharacterSelection;

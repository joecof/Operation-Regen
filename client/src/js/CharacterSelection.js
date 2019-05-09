import React, { Component } from 'react'

import '../css/CharacterSelection.css';
import CharacterSelectionItem from './CharacterSelectionItem';


class CharacterSelection extends Component {
  render() {
    return (
      <div className ="CharacterSelection">
        <h1 className = "CharacterSelection-Header">Select Your Hero</h1>
        <div className = "CharacterSelection-Box">
          <CharacterSelectionItem 
            img = "hero1H"
          />
          <CharacterSelectionItem 
            img = "hero2H"
          />
          <CharacterSelectionItem 
            img = "hero3H"
          />
          <CharacterSelectionItem 
            img = "hero4H"
          />
          <CharacterSelectionItem 
            img = "hero5H"
          />
          <CharacterSelectionItem 
            img = "hero6H"
          />
        </div>
      </div>
    )
  }
}


export default CharacterSelection;
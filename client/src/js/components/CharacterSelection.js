import React, { Component } from 'react';
import '../../css/CharacterSelection.css';
import CharacterSelectionItem from './CharacterSelectionItem';


class CharacterSelection extends Component {
  render() {
    //var selected = 0;

    return (
      <div className ="CharacterSelection">
        <h1 className = "CharacterSelection-Header">Select Your Hero</h1>
        <div className = "CharacterSelection-Box">
          <CharacterSelectionItem 
            hero = "1" animDuration={1}
          />
          <CharacterSelectionItem 
            hero = "2" animDuration={1}
          />
          {/*<CharacterSelectionItem 
            hero = "3" animDuration={1}
          />
          <CharacterSelectionItem 
            hero = "4" animDuration={1}
          />*/}
          <CharacterSelectionItem 
            hero = "5" animDuration={1}
          />
          <CharacterSelectionItem 
            hero = "6" animDuration={1}
          />
        </div>
      </div>
    )
  }
}


export default CharacterSelection;
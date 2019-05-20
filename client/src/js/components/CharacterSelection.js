import React, { Component } from 'react';
import '../../css/CharacterSelection.css';
import CharacterSelectionItem from './CharacterSelectionItem';

class CharacterSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastSelectedHero: null,
      nameChange: props.flag
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.flag !== this.state.nameChange) {
      this.setState({ nameChange: nextProps.flag });
    }
  }

  // Sets last selected hero state and passes the data to parent
  onChangeHero(hero) {
    this.setState({lastSelectedHero: hero, nameChange: false});
    this.props.hero(hero);
  }

  render() {
    return (
      <div className ="CharacterSelection">
        <h1 className = "CharacterSelection-Header">Select Your Hero</h1>
        <div className = "CharacterSelection-Box">
          <CharacterSelectionItem 
            hero = {1} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero} flag = {this.state.nameChange}
          />
          <CharacterSelectionItem 
            hero = {2} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero} flag = {this.state.nameChange}
          />
          <CharacterSelectionItem 
            hero = {3} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero} flag = {this.state.nameChange}
          />
          <CharacterSelectionItem 
            hero = {4} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero} flag = {this.state.nameChange}
          />
          <CharacterSelectionItem 
            hero = {5} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero} flag = {this.state.nameChange}
          />
          <CharacterSelectionItem 
            hero = {6} animDuration = {1} last = {this.onChangeHero.bind(this)} cur = {this.state.lastSelectedHero} flag = {this.state.nameChange}
          />
        </div>
      </div>
    )
  }
}

export default CharacterSelection;

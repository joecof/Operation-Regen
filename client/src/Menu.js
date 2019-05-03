import React, { Component } from 'react';
import './css/Menu.css';
import MenuItem from './MenuItem';


class Menu extends Component {
  render() {
    return (
      <div>
        <MenuItem
          name = "Start Game"
          url = "/index"
        />
        <MenuItem
          name = "Log In"
        />
        <MenuItem
          name = "LeaderBoard"
        />
        <MenuItem
          name = "Settings"
        />
        <MenuItem
          name = "Log Out"
        />
      </div>
    )
  }
}

export default Menu;

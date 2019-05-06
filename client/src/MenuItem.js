import React, { Component } from 'react';
import './css/Menu-Item.css';
import {Link} from "react-router-dom";


class MenuItem extends Component {
  render() {
    return (
      <div className = "MenuItem">
        <Link className = "MenuItem-Link" to ={this.props.url}> {this.props.name} </Link>
      </div>
    )
  }
}

export default MenuItem;
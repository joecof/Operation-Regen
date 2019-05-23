import React, { Component } from 'react';
import '../../css/PlayBoxPost.css';

class Post extends Component {

  handleChange = (e) => { 
    this.props.name(e.target.value);
  }

  render() {
    return (
      <div className = "HeroNameInputBox">
        <form>
          <input
            className = "Post-Input"
            type = "text"
            maxLength = "15"
            placeholder = "Enter Your Hero Name"
            onChange = {this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Post;

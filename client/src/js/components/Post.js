import React, { Component } from 'react';

import '../../css/PlayBoxPost.css';


class Post extends Component {

  state = {
    response: ' ',
    user: ' ',
    responseToPost: ' ',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault(); 
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: this.state.post}),
    });

    const body = await response.text();

    this.setState({ responseToPost: body});
  } 

  render() {
    return (
      <div className = "HeroNameInputBox">
          <form onSubmit={this.handleSubmit}>
            <input
            onSubmit = {this.handleSubmit}            
            className = "Post-Input"
            type="text"
            maxLength = "15"
            placeholder = "Enter Your Hero Name"
            onChange={e => this.setState({ post: e.target.value })}
            />
          </form>
      </div>
    )
  }
}

export default Post;
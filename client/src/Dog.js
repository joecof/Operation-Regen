import React, { Component } from "react";

class Dog extends Component {
  
  render() {
    console.log("DOG RENDER!");
    return (
      <div className='Dog'>
        <h1>Dog!!!</h1>
        <img src='https://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Dog/Puppy/Puppies-in-Basket.ashx' />
      </div>
    );
  }
}
export default Dog;

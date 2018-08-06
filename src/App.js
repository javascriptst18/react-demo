import React, { Component, Fragment } from 'react';
import Paragraph from './components/Paragraph';

let person = {
  name:"Jesper",
  hobby: "coding"
}

class App extends Component {
  // Dynamically updated values
  // Inside of class, outside of render
  state = {
    counter: 0,
    name: 'Jesper'
  }
  
  // Arrow function on your own methods
  handleClick = () => {
    // Function that takes an object as an argument
    this.setState({ counter: this.state.counter + 1 });
  }

  // No arrow on render
  render(){
    return (
      <div>
        <button onClick={this.handleClick}> Click me! </button>
        <Header counter={this.state.counter} />
        <p>{ this.state.name }</p>
      </div>
    );
  }
}


function Header(props) {
    return <h1 className="header">
      {props.counter}
    </h1>;
}

export default App;

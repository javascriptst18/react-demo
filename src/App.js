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

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  // No arrow on render
  render(){
    return (
      <div>
        <button onClick={this.handleClick}> Click me! </button>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
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

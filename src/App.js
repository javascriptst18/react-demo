import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  // Dynamically updated values
  // Inside of class, outside of render
  state = {
    name: 'Jesper'
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render(){
    let noZ = '';
    if(this.state.name.includes('z')){
      noZ = 'NOOOOOOOOO!';
    }
    return (
      <div>
        <label htmlFor="name">Enter name</label>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p>{this.state.name.split('').reverse().join('')}</p>
        <p>{ noZ }</p>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;

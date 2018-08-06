import React from 'react';

class Counter extends React.Component{
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}> Click me! </button>
        <p>{this.state.counter} </p>
      </div>
    )
  }
}

export default Counter;
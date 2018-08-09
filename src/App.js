import React from 'react';
import FetchData from './components/FetchData';
import Counter from './components/Counter';

// Class is used when state/lifecycle is used
class App extends React.Component {

  // Class property
  state = {
    counter: 0
  }

  handleClick = (event) => {
    // Use ONLY this.setState()
    this.setState({ counter: this.state.counter + 1 });
  }

  render(){
    return <Counter />;
  }
}


export default App;

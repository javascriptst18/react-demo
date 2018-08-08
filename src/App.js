import React from 'react';
import Paragraph from './components/Paragraph';
import Container from './components/Container';

// Class is used when state/lifecycle is used
class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     counter: 0
  //   }
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // Class property
  state = {
    counter: 0
  }

  handleClick = (event) => {
    // Use ONLY this.setState()
    this.setState({ counter: this.state.counter + 1 });
  }

  render(){
    return (
    <Container 
        left={ <Heading>Heading!</Heading> }
        right={ <Paragraph /> }
    />
    );
  }
}

function Heading(props){
  return <h1> { props.children } </h1>;
}

export default App;

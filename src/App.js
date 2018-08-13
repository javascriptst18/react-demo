import React from 'react';
import Button from './components/Button';

class App extends React.Component {
  render(){
    return <Button> Click me! </Button>
  }
}

// Component
function Card(props){
  const composedClassNames = `card ${props.customClass}`;
  // Div has a class
  // Style takes an object as argument
  return <div className={composedClassNames} style={ { backgroundColor: props.color } }>
      <img src={props.img} />
      <h1>{ props.title }</h1>
      <em>{ props.subtitle }</em>
    </div>
}

// Higher Order Component
function CrimsonCard(props){
  // return <Card {...props} color="crimson" />
  return <Card title={props.title} subtitle={props.subtitle} color="crimson" />
}

export default App;

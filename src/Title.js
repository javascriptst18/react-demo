import React from 'react';

let name = "Jesper";

function Title() {
  return <h1> {name} </h1>;
}

class TitleClass extends React.Component{
  render(){
    return <h2>Yo</h2>;
  }
}

export default Title;
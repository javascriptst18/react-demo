import React, { Component, Fragment } from 'react';
import Paragraph from './components/Paragraph';

let person = {
  name:"Jesper",
  hobby: "coding"
}

function App(){
  return (
    <div>
      <Header {...person} show/>
      <Header name="Jesper" hobby="coding" age={10} />
      <Paragraph />
    </div>
  );
}

function Header(props) {
  if(props.name === "Jesper"){
    return <h1 className="header">
      {props.name} - {props.hobby}
    </h1>;
  } else {
    return null;
  }
}

export default App;

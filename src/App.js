import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
let age = 10;

function App(){
  return (
    <div className="container">
      <Header 
        name="Jesper" 
        hobby="coding"
        age={age} />
      <Header name="Bananis" />
      <Paragraph />
    </div >
  );
}

export default App;

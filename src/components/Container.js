import React from 'react';
import './Container.css';

function Container(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          { props.left }
        </div>
        <div className="col">
          { props.right }
        </div>
      </div>
    </div>
  );
}

export default Container;